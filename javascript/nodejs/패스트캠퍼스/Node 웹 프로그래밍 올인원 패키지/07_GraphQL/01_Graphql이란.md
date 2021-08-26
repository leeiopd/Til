# 패스트캠퍼스 - Node 웹 프로그래밍 올인원 패키지

### 07.GraphQL

##### 01_Graphql 이란?

* 목차
  1. Graph QL 이란
  2. Express 연동
  3. 데이터 추가
  4. 데이터 수정, 삭제
  5. 클라이언트 사용하기



* REST API
  * ex)
    * GET /products (제품을 가져오고 싶다)
    * GET /products/1
    * GET /checkout
    * GET /cart (장바구니를 가져오고 싶다)
  * 프론트엔드와 백엔드가 나누어져 있는 경우, 프론트엔드 개발자가 필요한 API 를 백엔드에 작업요청을 해야함



* GraphQL 이란

  * Facebook 에서 만든 API 로 쿼리를 호출 할 수 있게 함

  * 백엔드 개발자에게 요청 없이 프론트엔드 에서 자유롭게 모델에게 호출

    * /graphql 하나의 Url 로 통일하여 사용

      ```json
      {
        product(id:1){
          id,
            price,
            name
        },
        cart(user_id: 10){
          thumbnail,
            price
        }
      }
      ```

    * 여러 요청을 한번에 요청 가능

  * 프론트앤드에서 모델 및 필요한 필드를 호출해서 자유도가 높음



* 설치
  * npm install graphql



* 작성법
  * 스미카 작성 (데이터 구조)
  * url 로 호출 할 수 있게 작성



* 타입
  * Int: 부호가 있는 32bit 정수
  * Float: 부호가 있는 부동소수점 값
  * String: UTF-8 문자열
  * Boolean: true 또는 false





```javascript
// ./start.js

const { graphql, buldSchema, buildSchema } = require("graphql");

const schema = buildSchema(`
    type Query{
        hello: String,
        nodejs: Int
    }
`);

const root = {
  hello: () => "hello world",
  nodejs: () => 20,
};

graphql(schema, "{hello, nodejs}", root).then((response) => {
  console.log(response);
  // { data: [Object: null prototype] { hello: 'hello world', nodejs: 20 } }
});
```

