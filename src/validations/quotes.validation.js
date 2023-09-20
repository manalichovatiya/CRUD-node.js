const Joi = require("joi");

const createQuotesList = {
    body: Joi.object().keys({
        text:Joi.string().required().trim(),
        author:Joi.string().required().trim(),
        category:Joi.string().required().trim(),
    }),
};

module.exports = {
    createQuotesList
}