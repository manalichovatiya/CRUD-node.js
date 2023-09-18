const { Vlog } = require("../models");

//Create Vlog
const createVlog = async (reqBody) => {
  return Vlog.create(reqBody);
};

// Get Vlog list
const getVlogList = async () => {
  return Vlog.find();
};

// Get Vlog details by id
const getVlogById = async (VlogId) => {
  return Vlog.findById(VlogId);
};

// Update Vlog
const updateVlog = async (VlogId,reqBody) => {
  return Vlog.findByIdAndUpdate(VlogId,{$set:reqBody});
};

//  Delete Vlog
const deleteVlog = async (VlogId) => {
  return Vlog.findByIdAndDelete(VlogId);
};

module.exports = {
    createVlog,
    getVlogList,
    getVlogById,
    updateVlog,
    deleteVlog
};