const Joi = require("joi");

const createJobList = {
    body: Joi.object().keys({
        Job_title:Joi.string().required().trim(),
        Company:Joi.string().required().trim(),
        Location:Joi.string().required().trim(),
        Salary:Joi.number().required(),
    }),
};

module.exports = {
    createJobList
}