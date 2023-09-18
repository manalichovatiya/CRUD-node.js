const Joi = require("joi");

const createWatchList = {
    body: Joi.object().keys({
        Brand:Joi.string().required().trim(),
        Model:Joi.string().required().trim(),
        Style:Joi.string().required().trim(),
        Price:Joi.number().required(),
    }),
};

module.exports = {
    createWatchList
}