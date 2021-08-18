const models = require("./models");

async function getProducts() {
  try {
    const product3 = await models.Products.findByPk(3);
    const product4 = await models.Products.findByPk(4);
    console.log(product3.dataValues);
    console.log(product4.dataValues);
  } catch (err) {
    console.log(err);
  }
}

getProducts();
