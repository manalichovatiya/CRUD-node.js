const { Necklace } = require("../models");

//Create Necklace
const createNecklace = async (reqBody) => {
  return Necklace.create(reqBody);
};

// Get Necklace list
const getNecklaceList = async () => {
  return Necklace.find();
};

// Get Necklace details by id
const getNecklaceById = async (NecklaceId) => {
  return Necklace.findById(NecklaceId);
};

// Update Necklace
const updateNecklace = async (NecklaceId,reqBody) => {
  return Necklace.findByIdAndUpdate(NecklaceId,{$set:reqBody});
};

//  Delete Necklace
const deleteNecklace = async (NecklaceId) => {
  return Necklace.findByIdAndDelete(NecklaceId);
};

module.exports = {
    createNecklace,
    getNecklaceList,
    getNecklaceById,
    updateNecklace,
    deleteNecklace
};