const models = require("../../models");

// redis 접속
const redis = require("redis");
const redisClient = redis.createClient();

const { promisify } = require("util");

redisClient.on("error", (err) => {
  console.log("Error " + err);
});

// const getAsync = (key) =>
//   new Promise((resolve, reject) => {
//     redisClient.get(key, (err, data) => {
//       if (data) {
//         resolve(data);
//       } else {
//         resolve(null);
//       }
//     });
//   });
const getAsync = promisify(redisClient.get).bind(redisClient);

exports.get_products = async (_, res) => {
  let result = JSON.parse(await getAsync("products:all"));
  if (!result) {
    result = await models.Products.findAll();
  }

  res.render("admin/products.html", { products: result });
};

exports.get_products_write = (_, res) => {
  res.render("admin/write.html");
};

exports.post_products_write = async (req, res) => {
  await models.Products.create({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  });

  // 전체 products 가져오기
  const products = await models.Products.findAll();
  // redis cache 에 적재
  redisClient.set("products:all", JSON.stringify(products));

  res.redirect("/admin/products");
};

exports.get_products_detail = (req, res) => {
  models.Products.findByPk(req.params.id).then((product) => {
    res.render("admin/detail.html", { product: product });
  });
};

exports.get_products_edit = (req, res) => {
  //기존에 폼에 value안에 값을 셋팅하기 위해 만든다.
  models.Products.findByPk(req.params.id).then((product) => {
    res.render("admin/write.html", { product: product });
  });
};

exports.post_products_edit = (req, res) => {
  models.Products.update(
    {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
    },
    {
      where: { id: req.params.id },
    }
  ).then(async () => {
    // 전체 products 가져오기
    const products = await models.Products.findAll();
    // redis cache 에 적재
    redisClient.set("products:all", JSON.stringify(products));

    res.redirect("/admin/products/detail/" + req.params.id);
  });
};

exports.get_products_delete = (req, res) => {
  models.Products.destroy({
    where: {
      id: req.params.id,
    },
  }).then(async () => {
    // 전체 products 가져오기
    const products = await models.Products.findAll();
    // redis cache 에 적재
    redisClient.set("products:all", JSON.stringify(products));

    res.redirect("/admin/products");
  });
};
