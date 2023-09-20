const Joi = require("joi");

const createCycleList = {
    body: Joi.object().keys({
        brand:Joi.string().required().trim(),
        cycle_des:Joi.string().required().trim(),
        price:Joi.number().required(),
    }),
};

module.exports = {
    createCycleList
}