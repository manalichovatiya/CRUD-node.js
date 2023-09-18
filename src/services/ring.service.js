const { Ring } = require("../models");

//Create Ring
const createRing = async (reqBody) => {
  return Ring.create(reqBody);
};

// Get Ring list
const getRingList = async () => {
  return Ring.find();
};

// Get Ring details by id
const getRingById = async (RingId) => {
  return Ring.findById(RingId);
};

// Update Ring
const updateRing = async (RingId,reqBody) => {
  return Ring.findByIdAndUpdate(RingId,{$set:reqBody});
};

//  Delete Ring
const deleteRing = async (RingId) => {
  return Ring.findByIdAndDelete(RingId);
};

module.exports = {
    createRing,
    getRingList,
    getRingById,
    updateRing,
    deleteRing
};