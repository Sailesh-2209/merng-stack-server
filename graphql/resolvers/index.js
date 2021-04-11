const postsResolvers = require("../resolvers/posts");
const usersResolvers = require("../resolvers/users");
const commentsResolvers = require("../resolvers/comments");
const likeResolvers = require("../resolvers/likes");

module.exports = {
  Post: {
    likeCount: (parent) => parent.likes.length,
    commentCount: (parent) => parent.comments.length,
  },
  Query: {
    ...postsResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
    ...commentsResolvers.Mutation,
    ...likeResolvers.Mutation,
  },
};
