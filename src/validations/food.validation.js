const Joi = require("joi");

const createFoodList = {
    body: Joi.object().keys({
        Food_name:Joi.string().required().trim(),
        Food_des:Joi.string().required().trim(),
        Food_price:Joi.number().required(),
    }),
};

module.exports = {
    createFoodList
}