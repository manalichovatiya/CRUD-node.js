const Joi = require("joi");

const createVlogList = {
    body: Joi.object().keys({
        Vlog_title:Joi.string().required().trim(),
        Vlog_content:Joi.string().required().trim(),
    }),
};

module.exports = {
    createVlogList
}