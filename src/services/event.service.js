const { Event } = require("../models");

//Create Event
const createEvent = async (reqBody) => {
  return Event.create(reqBody);
};

// Get Event list
const getEventList = async () => {
  return Event.find();
};

// Get Event details by id
const getEventById = async (EventId) => {
  return Event.findById(EventId);
};

// Update Event
const updateEvent = async (EventId,reqBody) => {
  return Event.findByIdAndUpdate(EventId,{$set:reqBody});
};

//  Delete Event
const deleteEvent = async (EventId) => {
  return Event.findByIdAndDelete(EventId);
};

module.exports = {
    createEvent,
    getEventList,
    getEventById,
    updateEvent,
    deleteEvent
};