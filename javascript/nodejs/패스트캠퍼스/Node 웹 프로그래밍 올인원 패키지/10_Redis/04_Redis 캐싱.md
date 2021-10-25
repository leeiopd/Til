# 패스트캠퍼스 - Node 웹 프로그래밍 올인원 패키지

### 10. Redis

##### 04_Redis 캐싱

* 실무에서 Redis 를 캐싱이나 세션 서버로 많이 사용
* 캐싱
  * 유저가 page 접속 할 때 데이터를 db 에서 select 하여 가져오는데, 매번 많은 데이터를 가져오지 않고 미리 데이터를 가져와 적재
  * select 연산으로 가져오지 않고, 적재된 Data 를 사용 -> 효율적



* Node CRUD template 사용

  * 글 작성: Create -> 모든 데이터 caching

    ```javascript
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
    ```

  * 글 수정: Update -> 모든 데이터 caching

    ```javascript
    // ./controllers/amin/admin.ctrl.js
    
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
    ```

  * 글 삭제: Delete -> 모든 데이터 caching

    ```javascript
    // ./controllers/amin/admin.ctrl.js
    
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
    ```

  * 목록 조회: Read -> caching 된 data 보여주기

    ```javascript
    // ./controllers/amin/admin.ctrl.js
    
    const getAsync = (key) =>
      new Promise((resolve, reject) => {
        redisClient.get(key, (err, data) => {
          if (data) {
            resolve(data);
          } else {
            resolve(null);
          }
        });
      });
    
    exports.get_products = async (_, res) => {
      // caching 된 데이터 받아오기  
      let result = JSON.parse(await getAsync("products:all"));
      
      // caching 된 데이터 없으면, db 에 data 요청
      if (!result) {
        result = await models.Products.findAll();
      }
    
      res.render("admin/products.html", { products: result });
    };
    ```

    



* caching 된 데이터 가져오기 개선

  ```javascript
  const { promisify } = require("util");
  
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
  ```

  

