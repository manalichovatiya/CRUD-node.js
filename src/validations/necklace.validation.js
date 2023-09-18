const Joi = require("joi");

const createNecklaceList = {
    body: Joi.object().keys({
        Necklace_type:Joi.string().required().trim(),
        Necklace_des:Joi.string().required().trim(),
        Necklace_price:Joi.number().required(),
    }),
};

module.exports = {
    createNecklaceList
}