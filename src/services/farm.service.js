const { Farm } = require("../models");

//Create Farm
const createFarm = async (reqBody) => {
  return Farm.create(reqBody);
};

// Get Farm list
const getFarmList = async () => {
  return Farm.find();
};

// Get Farm details by id
const getFarmById = async (FarmId) => {
  return Farm.findById(FarmId);
};

// Update Farm
const updateFarm = async (FarmId,reqBody) => {
  return Farm.findByIdAndUpdate(FarmId,{$set:reqBody});
};

//  Delete Farm
const deleteFarm = async (FarmId) => {
  return Farm.findByIdAndDelete(FarmId);
};

module.exports = {
    createFarm,
    getFarmList,
    getFarmById,
    updateFarm,
    deleteFarm
};