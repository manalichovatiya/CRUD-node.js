const Joi = require("joi");

const createBlogList = {
    body: Joi.object().keys({
        Blog_title:Joi.string().required().trim(),
        Blog_des:Joi.string().required().trim(),
    }),
};

module.exports = {
    createBlogList
}