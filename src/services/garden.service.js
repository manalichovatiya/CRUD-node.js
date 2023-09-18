const { Garden } = require("../models");

//Create Garden
const createGarden = async (reqBody) => {
  return Garden.create(reqBody);
};

// Get Garden list
const getGardenList = async () => {
  return Garden.find();
};

// Get Garden details by id
const getGardenById = async (GardenId) => {
  return Garden.findById(GardenId);
};

// Update Garden
const updateGarden = async (GardenId,reqBody) => {
  return Garden.findByIdAndUpdate(GardenId,{$set:reqBody});
};

//  Delete Garden
const deleteGarden = async (GardenId) => {
  return Garden.findByIdAndDelete(GardenId);
};

module.exports = {
    createGarden,
    getGardenList,
    getGardenById,
    updateGarden,
    deleteGarden
};