# 패스트캠퍼스 - Node 웹 프로그래밍 올인원 패키지

### 07.GraphQL

##### 02_Express 연동

* npm install express
* npm install express-graphql



```javascript
// ./index.js

const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

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

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    // graphQL gui 설정
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("runnsing server port 4000");
});
```

* ~/graphql 로 접속하면, graphQL gui Page 가 나타난다.
* schema 로 선언한 내용들을 호출 가능하다.

