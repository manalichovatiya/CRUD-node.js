const Joi = require("joi");

const createWhatsappList = {
    body: Joi.object().keys({
        sender_PhoneNumber:Joi.number().required(),
        recipient_PhoneNumber:Joi.number().required(),
        content:Joi.string().required().trim(),
    }),
};

module.exports = {
    createWhatsappList
}