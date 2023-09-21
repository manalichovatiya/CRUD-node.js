const { Attendees } = require("../models");

//Create Attendees
const createAttendees = async (reqBody) => {
  return Attendees.create(reqBody);
};

// Get Attendees list
const getAttendeesList = async () => {
  return Attendees.find();
};

// Get Attendees details by id
const getAttendeesById = async (AttendeesId) => {
  return Attendees.findById(AttendeesId);
};

// Update Attendees
const updateAttendees = async (AttendeesId,reqBody) => {
  return Attendees.findByIdAndUpdate(AttendeesId,{$set:reqBody});
};

//  Delete Attendees
const deleteAttendees = async (AttendeesId) => {
  return Attendees.findByIdAndDelete(AttendeesId);
};

module.exports = {
    createAttendees,
    getAttendeesList,
    getAttendeesById,
    updateAttendees,
    deleteAttendees
};