const Joi = require("joi");

const createFarmList = {
    body: Joi.object().keys({
        Farm_name:Joi.string().required().trim(),
        Location:Joi.string().required().trim(),
    }),
};

module.exports = {
    createFarmList
}