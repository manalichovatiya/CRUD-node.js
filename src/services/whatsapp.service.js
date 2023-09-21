const { Whatsapp } = require("../models");

//Create Whatsapp
const createWhatsapp = async (reqBody) => {
  return Whatsapp.create(reqBody);
};

// Get Whatsapp list
const getWhatsappList = async () => {
  return Whatsapp.find();
};

// Get Whatsapp details by id
const getWhatsappById = async (WhatsappId) => {
  return Whatsapp.findById(WhatsappId);
};

// Update Whatsapp
const updateWhatsapp = async (WhatsappId,reqBody) => {
  return Whatsapp.findByIdAndUpdate(WhatsappId,{$set:reqBody});
};

//  Delete Whatsapp
const deleteWhatsapp = async (WhatsappId) => {
  return Whatsapp.findByIdAndDelete(WhatsappId);
};

module.exports = {
    createWhatsapp,
    getWhatsappList,
    getWhatsappById,
    updateWhatsapp,
    deleteWhatsapp
};