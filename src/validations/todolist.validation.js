const Joi = require("joi");

const createToDoList = {
    body: Joi.object().keys({
        task_name:Joi.string().required().trim(),
        description:Joi.string().required().trim(),
        dueDate:Joi.string().required().trim(),
    }),
};

module.exports = {
    createToDoList
}