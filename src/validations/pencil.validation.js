const Joi = require("joi");

const createPencilList = {
    body: Joi.object().keys({
        brand:Joi.string().required().trim(),
        Pencil_des:Joi.string().required().trim(),
        price:Joi.number().required(),
    }),
};

module.exports = {
    createPencilList
}