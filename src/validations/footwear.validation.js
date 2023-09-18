const Joi = require("joi");

const createFootwearList = {
    body: Joi.object().keys({
        Footwear_type:Joi.string().required().trim(),
        Footwear_des:Joi.string().required().trim(),
        Footwear_price:Joi.number().required(),
    }),
};

module.exports = {
    createFootwearList
}