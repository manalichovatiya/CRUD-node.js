const express = require("express");
const { blogValidation } = require("../validations");
const { blogController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Blog */
router.post(
  "/create-Blog",
  validate(blogValidation.createBlogList),
  blogController.createBlog
);

/** Get Blog list */
router.get(
  "/Blog-list",
  blogController.getBlogList
);

/** Delete Blog */
router.delete(
  "/delete-Blog/:BlogId",
  blogController.deleteBlog
);

/** Update Blog */
router.put(
  "/update-Blog/:BlogId",
  validate(blogValidation.createBlogList),
  blogController.updateBlog
);

module.exports = router;
