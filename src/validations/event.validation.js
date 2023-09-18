const Joi = require("joi");

const createEventList = {
    body: Joi.object().keys({
        Event_type:Joi.string().required().trim(),
        Event_date:Joi.string().required().trim(),
        Event_location:Joi.string().required().trim(),
        Event_description:Joi.string().required().trim()
    }),
};

module.exports = {
    createEventList
}