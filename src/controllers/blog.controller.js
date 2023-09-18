const { blogService } = require("../services");

/** create Blog */
const createBlog = async (req, res) => {
  try {
    const reqBody = req.body;
    const Blog = await blogService.createBlog(reqBody);
    if (!Blog) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Blog create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get Blog list */
const getBlogList = async (req, res) => {
  try {
   const getList = await blogService.getBlogList();
   res.status(200).json({
      success: true,
      message: "Get Blog list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


/** Update Blog */
const updateBlog = async (req, res) => {
    try {
      const reqBody = req.body;
      const BlogId = req.params.buBlogId;
      const BlogExists = await blogService.getBlogById(BlogId);
     if (!BlogExists) {
        throw new Error("Blog not found!");
     }
     await blogService.updateDetails(BlogId,reqBody);
        res.status(200).json({
          success: true,
          message: "Blog update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete Blog */
const deleteBlog = async (req, res) => {
  try {
    const BlogId = req.params.BlogId;
    const BlogExists = await blogService.getBlogById(BlogId);
    if (!BlogExists) {
      throw new Error("Blog not found!");
    }
    await blogService.deleteBlog(BlogId);

    res.status(200).json({
      success: true,
      message: "Blog delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createBlog,
  getBlogList,
  updateBlog,
  deleteBlog
};