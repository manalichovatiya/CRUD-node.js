const { Servant } = require("../models");

//Create Servant
const createServant = async (reqBody) => {
  return Servant.create(reqBody);
};

// Get Servant list
const getServantList = async () => {
  return Servant.find();
};

// Get Servant details by id
const getServantById = async (ServantId) => {
  return Servant.findById(ServantId);
};

// Update Servant
const updateServant = async (ServantId,reqBody) => {
  return Servant.findByIdAndUpdate(ServantId,{$set:reqBody});
};

//  Delete Servant
const deleteServant = async (ServantId) => {
  return Servant.findByIdAndDelete(ServantId);
};

module.exports = {
    createServant,
    getServantList,
    getServantById,
    updateServant,
    deleteServant
};