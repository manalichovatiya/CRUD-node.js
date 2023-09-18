const { Plantnursery } = require("../models");

//Create Plantnursery
const createPlantnursery = async (reqBody) => {
  return Plantnursery.create(reqBody);
};

// Get Plantnursery list
const getPlantnurseryList = async () => {
  return Plantnursery.find();
};

// Get Plantnursery details by id
const getPlantnurseryById = async (PlantnurseryId) => {
  return Plantnursery.findById(PlantnurseryId);
};

// Update Plantnursery
const updatePlantnursery = async (PlantnurseryId,reqBody) => {
  return Plantnursery.findByIdAndUpdate(PlantnurseryId,{$set:reqBody});
};

//  Delete Plantnursery
const deletePlantnursery = async (PlantnurseryId) => {
  return Plantnursery.findByIdAndDelete(PlantnurseryId);
};

module.exports = {
    createPlantnursery,
    getPlantnurseryList,
    getPlantnurseryById,
    updatePlantnursery,
    deletePlantnursery
};