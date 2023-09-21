const { Cycle } = require("../models");

//Create Cycle
const createCycle = async (reqBody) => {
  return Cycle.create(reqBody);
};

// Get Cycle list
const getCycleList = async () => {
  return Cycle.find();
};

// Get Cycle details by id
const getCycleById = async (CycleId) => {
  return Cycle.findById(CycleId);
};

// Update Cycle
const updateCycle = async (CycleId,reqBody) => {
  return Cycle.findByIdAndUpdate(CycleId,{$set:reqBody});
};

//  Delete Cycle
const deleteCycle = async (CycleId) => {
  return Cycle.findByIdAndDelete(CycleId);
};

module.exports = {
    createCycle,
    getCycleList,
    getCycleById,
    updateCycle,
    deleteCycle
};