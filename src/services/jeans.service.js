const { Jeans } = require("../models");

//Create Jeans
const createJeans = async (reqBody) => {
  return Jeans.create(reqBody);
};

// Get Jeans list
const getJeansList = async () => {
  return Jeans.find();
};

// Get Jeans details by id
const getJeansById = async (JeansId) => {
  return Jeans.findById(JeansId);
};

// Update Jeans
const updateJeans = async (JeansId,reqBody) => {
  return Jeans.findByIdAndUpdate(JeansId,{$set:reqBody});
};

//  Delete Jeans
const deleteJeans = async (JeansId) => {
  return Jeans.findByIdAndDelete(JeansId);
};

module.exports = {
    createJeans,
    getJeansList,
    getJeansById,
    updateJeans,
    deleteJeans
};