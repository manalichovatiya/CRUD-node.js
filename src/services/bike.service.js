const { Bike } = require("../models");

//Create Bike
const createBike = async (reqBody) => {
  return Bike.create(reqBody);
};

// Get Bike list
const getBikeList = async () => {
  return Bike.find();
};

// Get Bike details by id
const getBikeById = async (BikeId) => {
  return Bike.findById(BikeId);
};

// Update Bike
const updateBike = async (BikeId,reqBody) => {
  return Bike.findByIdAndUpdate(BikeId,{$set:reqBody});
};

//  Delete Bike
const deleteBike = async (BikeId) => {
  return Bike.findByIdAndDelete(BikeId);
};

module.exports = {
    createBike,
    getBikeList,
    getBikeById,
    updateBike,
    deleteBike
};