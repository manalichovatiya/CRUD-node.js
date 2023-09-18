const { Footwear } = require("../models");

//Create Footwear
const createFootwear = async (reqBody) => {
  return Footwear.create(reqBody);
};

// Get Footwear list
const getFootwearList = async () => {
  return Footwear.find();
};

// Get Footwear details by id
const getFootwearById = async (FootwearId) => {
  return Footwear.findById(FootwearId);
};

// Update Footwear
const updateFootwear = async (FootwearId,reqBody) => {
  return Footwear.findByIdAndUpdate(FootwearId,{$set:reqBody});
};

//  Delete Footwear
const deleteFootwear = async (FootwearId) => {
  return Footwear.findByIdAndDelete(FootwearId);
};

module.exports = {
    createFootwear,
    getFootwearList,
    getFootwearById,
    updateFootwear,
    deleteFootwear
};