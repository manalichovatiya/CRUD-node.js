const Joi = require("joi");

const createProjectList = {
    body: Joi.object().keys({
        project_name:Joi.string().required().trim(),
        project_des:Joi.string().required().trim(),
        dueDate:Joi.string().required().trim(),
    }),
};

module.exports = {
    createProjectList
}