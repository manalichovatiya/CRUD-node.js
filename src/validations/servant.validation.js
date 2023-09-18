const Joi = require("joi");

const createServantList = {
    body: Joi.object().keys({
        Servant_name:Joi.string().required().trim(),
        Servant_gender:Joi.string().required().trim(),
        Salary:Joi.number().required(),
    }),
};

module.exports = {
    createServantList
}