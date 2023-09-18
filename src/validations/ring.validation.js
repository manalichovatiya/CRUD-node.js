const Joi = require("joi");

const createRingList = {
    body: Joi.object().keys({
        Ring_type:Joi.string().required().trim(),
        Ring_des:Joi.string().required().trim(),
        Ring_price:Joi.number().required(),
    }),
};

module.exports = {
    createRingList
}