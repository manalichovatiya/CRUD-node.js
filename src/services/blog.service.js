const { Blog } = require("../models");

//Create Blog
const createBlog = async (reqBody) => {
  return Blog.create(reqBody);
};

// Get Blog list
const getBlogList = async () => {
  return Blog.find();
};

// Get Blog details by id
const getBlogById = async (BlogId) => {
  return Blog.findById(BlogId);
};

// Update Blog
const updateBlog = async (BlogId,reqBody) => {
  return Blog.findByIdAndUpdate(BlogId,{$set:reqBody});
};

//  Delete Blog
const deleteBlog = async (BlogId) => {
  return Blog.findByIdAndDelete(BlogId);
};

module.exports = {
    createBlog,
    getBlogList,
    getBlogById,
    updateBlog,
    deleteBlog
};