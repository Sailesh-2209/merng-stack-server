const Post = require("../../models/Post");
const { UserInputError } = require("apollo-server");

const checkAuth = require("../../utils/check-auth");

module.exports.Mutation = {
  async likePost(_, { postId }, context) {
    const { username } = checkAuth(context);
    const post = await Post.findById(postId);
    if (post) {
      if (post.likes.find((like) => like.username === username)) {
        // user has already liked the post. Remove the like
        post.likes = post.likes.filter((like) => like.username !== username);
      } else {
        // user has not liked the post. Add a like
        post.likes.push({
          username,
          createdAt: new Date().toISOString(),
        });
      }
      await post.save();
      return post;
    } else throw new UserInputError("Post not found");
  },
};
