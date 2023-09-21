const { Pencil } = require("../models");

//Create Pencil
const createPencil = async (reqBody) => {
  return Pencil.create(reqBody);
};

// Get Pencil list
const getPencilList = async () => {
  return Pencil.find();
};

// Get Pencil details by id
const getPencilById = async (PencilId) => {
  return Pencil.findById(PencilId);
};

// Update Pencil
const updatePencil = async (PencilId,reqBody) => {
  return Pencil.findByIdAndUpdate(PencilId,{$set:reqBody});
};

//  Delete Pencil
const deletePencil = async (PencilId) => {
  return Pencil.findByIdAndDelete(PencilId);
};

module.exports = {
    createPencil,
    getPencilList,
    getPencilById,
    updatePencil,
    deletePencil
};