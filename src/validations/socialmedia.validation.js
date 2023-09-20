const Joi = require("joi");

const createSocialmediaList = {
    body: Joi.object().keys({
        user:Joi.string().required().trim(),
        content:Joi.string().required().trim(),
        createdAt:Joi.string().required(),
    }),
};

module.exports = {
    createSocialmediaList
}