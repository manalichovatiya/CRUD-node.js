const Joi = require("joi");

const createAttendeesList = {
    body: Joi.object().keys({
        first_Name:Joi.string().required().trim(),
        last_Name:Joi.string().required().trim(),
        roll_number:Joi.number().required(),
    }),
};

module.exports = {
    createAttendeesList
}