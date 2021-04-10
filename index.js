const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");

const { MONGODB } = require("./config");

const typeDefs = gql`
  type Query {
    sayHi: String!
  }
`;

const resolvers = {
  Query: {
    sayHi: () => "Hello world!",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected succesfully.");
    return server.listen({ port: 5000 });
  })
  .then((result) => {
    console.log(`Server running at ${result.url}`);
  })
  .catch((err) => {
    throw new Error(err);
  });
