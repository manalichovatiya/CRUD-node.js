const { Game } = require("../models");

//Create Game
const createGame = async (reqBody) => {
  return Game.create(reqBody);
};

// Get Game list
const getGameList = async () => {
  return Game.find();
};

// Get Game details by id
const getGameById = async (GameId) => {
  return Game.findById(GameId);
};

// Update Game
const updateGame = async (GameId,reqBody) => {
  return Game.findByIdAndUpdate(GameId,{$set:reqBody});
};

//  Delete Game
const deleteGame = async (GameId) => {
  return Game.findByIdAndDelete(GameId);
};

module.exports = {
    createGame,
    getGameList,
    getGameById,
    updateGame,
    deleteGame
};