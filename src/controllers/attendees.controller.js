const { attendeesService } = require("../services");

/** create Attendees */
const createAttendees = async (req, res) => {
  try {
    const reqBody = req.body;
    const Attendees = await attendeesService.createAttendees(reqBody);
    if (!Attendees) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Attendees create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get Attendees list */
const getAttendeesList = async (req, res) => {
  try {
   const getList = await attendeesService.getAttendeesList();
   res.status(200).json({
      success: true,
      message: "Get Attendees list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


/** Update Attendees */
const updateAttendees = async (req, res) => {
    try {
      const reqBody = req.body;
      const AttendeesId = req.params.buAttendeesId;
      const AttendeesExists = await attendeesService.getAttendeesById(AttendeesId);
     if (!AttendeesExists) {
        throw new Error("Attendees not found!");
     }
     await attendeesService.updateDetails(AttendeesId,reqBody);
        res.status(200).json({
          success: true,
          message: "Attendees update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete Attendees */
const deleteAttendees = async (req, res) => {
  try {
    const AttendeesId = req.params.AttendeesId;
    const AttendeesExists = await attendeesService.getAttendeesById(AttendeesId);
    if (!AttendeesExists) {
      throw new Error("Attendees not found!");
    }
    await attendeesService.deleteAttendees(AttendeesId);

    res.status(200).json({
      success: true,
      message: "Attendees delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createAttendees,
  getAttendeesList,
  updateAttendees,
  deleteAttendees
};