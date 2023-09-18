const { Perfume } = require("../models");

//Create Perfume
const createPerfume = async (reqBody) => {
  return Perfume.create(reqBody);
};

// Get Perfume list
const getPerfumeList = async () => {
  return Perfume.find();
};

// Get Perfume details by id
const getPerfumeById = async (PerfumeId) => {
  return Perfume.findById(PerfumeId);
};

// Update Perfume
const updatePerfume = async (PerfumeId,reqBody) => {
  return Perfume.findByIdAndUpdate(PerfumeId,{$set:reqBody});
};

//  Delete Perfume
const deletePerfume = async (PerfumeId) => {
  return Perfume.findByIdAndDelete(PerfumeId);
};

module.exports = {
    createPerfume,
    getPerfumeList,
    getPerfumeById,
    updatePerfume,
    deletePerfume
};