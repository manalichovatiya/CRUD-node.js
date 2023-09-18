const Joi = require("joi");

const createPerfumeList = {
    body: Joi.object().keys({
        Brand:Joi.string().required().trim(),
        Name:Joi.string().required().trim(),
        Scent:Joi.string().required().trim(),
        Price:Joi.number().required(),
    }),
};

module.exports = {
    createPerfumeList
}