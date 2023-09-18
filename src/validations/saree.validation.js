const Joi = require("joi");

const createSareeList = {
    body: Joi.object().keys({
        Brand:Joi.string().required().trim(),
        Fabric:Joi.string().required().trim(),
        Occasion:Joi.string().required().trim(),
        Price:Joi.number().required(),
    }),
};

module.exports = {
    createSareeList
}