const Joi = require("joi");

const createBikeList = {
    body: Joi.object().keys({
        brand_Name:Joi.string().required().trim(),
        bike_des:Joi.string().required().trim(),
        price:Joi.number().required(),
    }),
};

module.exports = {
    createBikeList
}