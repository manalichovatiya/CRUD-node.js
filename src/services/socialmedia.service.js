const { Socialmedia } = require("../models");

//Create Socialmedia
const createSocialmedia = async (reqBody) => {
  return Socialmedia.create(reqBody);
};

// Get Socialmedia list
const getSocialmediaList = async () => {
  return Socialmedia.find();
};

// Get Socialmedia details by id
const getSocialmediaById = async (SocialmediaId) => {
  return Socialmedia.findById(SocialmediaId);
};

// Update Socialmedia
const updateSocialmedia = async (SocialmediaId,reqBody) => {
  return Socialmedia.findByIdAndUpdate(SocialmediaId,{$set:reqBody});
};

//  Delete Socialmedia
const deleteSocialmedia = async (SocialmediaId) => {
  return Socialmedia.findByIdAndDelete(SocialmediaId);
};

module.exports = {
    createSocialmedia,
    getSocialmediaList,
    getSocialmediaById,
    updateSocialmedia,
    deleteSocialmedia
};