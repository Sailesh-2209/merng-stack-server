const postsResolvers = require("../resolvers/posts");
const usersResolvers = require("../resolvers/users");
const commentsResolvers = require("../resolvers/comments");

module.exports = {
  Query: {
    ...postsResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
    ...commentsResolvers.Mutation,
  },
};
