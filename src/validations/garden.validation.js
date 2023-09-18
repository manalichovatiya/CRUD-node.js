const Joi = require("joi");

const createGardenList = {
    body: Joi.object().keys({
        Garden_name:Joi.string().required().trim(),
        Location:Joi.string().required().trim(),
    }),
};

module.exports = {
    createGardenList
}