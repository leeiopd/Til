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
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("runnsing server port 4000");
});
