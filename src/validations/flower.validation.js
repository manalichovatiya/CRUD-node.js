const Joi = require("joi");

const createFlowerList = {
    body: Joi.object().keys({
        Flower_name:Joi.string().required().trim(),
        Flower_des:Joi.string().required().trim(),
        Flower_color:Joi.string().required().trim(),
    }),
};

module.exports = {
    createFlowerList
}