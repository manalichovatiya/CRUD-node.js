const Joi = require("joi");

const createGameList = {
    body: Joi.object().keys({
        Game_name:Joi.string().required().trim(),
        Game_des:Joi.string().required().trim(),
        Players:Joi.number().required(),
    }),
};

module.exports = {
    createGameList
}