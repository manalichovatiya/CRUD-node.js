const Joi = require("joi");

const createPlantnurseryList = {
    body: Joi.object().keys({
        Nursery_name:Joi.string().required().trim(),
        Location:Joi.string().required().trim(),
    }),
};

module.exports = {
    createPlantnurseryList
}