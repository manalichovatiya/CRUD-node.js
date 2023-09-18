const Joi = require("joi");

const createJeansList = {
    body: Joi.object().keys({
        Brand_name:Joi.string().required().trim(),
        Style:Joi.string().required().trim(),
        Color:Joi.string().required().trim(),
        Price:Joi.number().required(),
    }),
};

module.exports = {
    createJeansList
}