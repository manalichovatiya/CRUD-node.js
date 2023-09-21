const { Quotes } = require("../models");

//Create Quotes
const createQuotes = async (reqBody) => {
  return Quotes.create(reqBody);
};

// Get Quotes list
const getQuotesList = async () => {
  return Quotes.find();
};

// Get Quotes details by id
const getQuotesById = async (QuotesId) => {
  return Quotes.findById(QuotesId);
};

// Update Quotes
const updateQuotes = async (QuotesId,reqBody) => {
  return Quotes.findByIdAndUpdate(QuotesId,{$set:reqBody});
};

//  Delete Quotes
const deleteQuotes = async (QuotesId) => {
  return Quotes.findByIdAndDelete(QuotesId);
};

module.exports = {
    createQuotes,
    getQuotesList,
    getQuotesById,
    updateQuotes,
    deleteQuotes
};