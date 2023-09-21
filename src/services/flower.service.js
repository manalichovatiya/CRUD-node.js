const { Flower } = require("../models");

//Create Flower
const createFlower = async (reqBody) => {
  return Flower.create(reqBody);
};

// Get Flower list
const getFlowerList = async () => {
  return Flower.find();
};

// Get Flower details by id
const getFlowerById = async (FlowerId) => {
  return Flower.findById(FlowerId);
};

// Update Flower
const updateFlower = async (FlowerId,reqBody) => {
  return Flower.findByIdAndUpdate(FlowerId,{$set:reqBody});
};

//  Delete Flower
const deleteFlower = async (FlowerId) => {
  return Flower.findByIdAndDelete(FlowerId);
};

module.exports = {
    createFlower,
    getFlowerList,
    getFlowerById,
    updateFlower,
    deleteFlower
};