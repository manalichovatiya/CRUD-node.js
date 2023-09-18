const Joi = require("joi");

const createCarList = {
    body: Joi.object().keys({
        Car_name:Joi.string().required().trim(),
        Car_des:Joi.string().required().trim(),
        Price:Joi.number().required(),
    }),
};

module.exports = {
    createCarList
}