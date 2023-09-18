const { Saree } = require("../models");

//Create Saree
const createSaree = async (reqBody) => {
  return Saree.create(reqBody);
};

// Get Saree list
const getSareeList = async () => {
  return Saree.find();
};

// Get Saree details by id
const getSareeById = async (SareeId) => {
  return Saree.findById(SareeId);
};

// Update Saree
const updateSaree = async (SareeId,reqBody) => {
  return Saree.findByIdAndUpdate(SareeId,{$set:reqBody});
};

//  Delete Saree
const deleteSaree = async (SareeId) => {
  return Saree.findByIdAndDelete(SareeId);
};

module.exports = {
    createSaree,
    getSareeList,
    getSareeById,
    updateSaree,
    deleteSaree
};