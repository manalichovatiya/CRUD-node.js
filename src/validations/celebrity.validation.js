const Joi = require("joi");

const createCelebrityList = {
    body: Joi.object().keys({
        Celebrity_name:Joi.string().required().trim(),
        Celebrity_birthdate:Joi.string().required().trim(),
        Celebrity_nationality:Joi.string().required().trim(),
    }),
};

module.exports = {
    createCelebrityList
}