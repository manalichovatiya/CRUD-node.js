const { Celebrity } = require("../models");

//Create Celebrity
const createCelebrity = async (reqBody) => {
  return Celebrity.create(reqBody);
};

// Get Celebrity list
const getCelebrityList = async () => {
  return Celebrity.find();
};

// Get Celebrity details by id
const getCelebrityById = async (CelebrityId) => {
  return Celebrity.findById(CelebrityId);
};

// Update Celebrity
const updateCelebrity = async (CelebrityId,reqBody) => {
  return Celebrity.findByIdAndUpdate(CelebrityId,{$set:reqBody});
};

//  Delete Celebrity
const deleteCelebrity = async (CelebrityId) => {
  return Celebrity.findByIdAndDelete(CelebrityId);
};

module.exports = {
    createCelebrity,
    getCelebrityList,
    getCelebrityById,
    updateCelebrity,
    deleteCelebrity
};