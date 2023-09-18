const { Watch } = require("../models");

//Create Watch
const createWatch = async (reqBody) => {
  return Watch.create(reqBody);
};

// Get Watch list
const getWatchList = async () => {
  return Watch.find();
};

// Get Watch details by id
const getWatchById = async (WatchId) => {
  return Watch.findById(WatchId);
};

// Update Watch
const updateWatch = async (WatchId,reqBody) => {
  return Watch.findByIdAndUpdate(WatchId,{$set:reqBody});
};

//  Delete Watch
const deleteWatch = async (WatchId) => {
  return Watch.findByIdAndDelete(WatchId);
};

module.exports = {
    createWatch,
    getWatchList,
    getWatchById,
    updateWatch,
    deleteWatch
};