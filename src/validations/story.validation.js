const Joi = require("joi");

const createStoryList = {
    body: Joi.object().keys({
        Story_title:Joi.string().required().trim(),
        Story_content:Joi.string().required().trim(),
    }),
};

module.exports = {
    createStoryList
}