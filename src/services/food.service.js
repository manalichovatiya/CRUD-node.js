const { Food } = require("../models");

//Create Food
const createFood = async (reqBody) => {
  return Food.create(reqBody);
};

// Get Food list
const getFoodList = async () => {
  return Food.find();
};

// Get Food details by id
const getFoodById = async (FoodId) => {
  return Food.findById(FoodId);
};

// Update Food
const updateFood = async (FoodId,reqBody) => {
  return Food.findByIdAndUpdate(FoodId,{$set:reqBody});
};

//  Delete Food
const deleteFood = async (FoodId) => {
  return Food.findByIdAndDelete(FoodId);
};

module.exports = {
    createFood,
    getFoodList,
    getFoodById,
    updateFood,
    deleteFood
};