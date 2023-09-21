const express = require("express");
const { attendeesValidation } = require("../validations");
const { attendeesController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Attendees */
router.post(
  "/create-Attendees",
  validate(attendeesValidation.createAttendeesList),
  attendeesController.createAttendees
);

/** Get Attendees list */
router.get(
  "/Attendees-list",
  attendeesController.getAttendeesList
);

/** Delete Attendees */
router.delete(
  "/delete-Attendees/:AttendeesId",
  attendeesController.deleteAttendees
);

/** Update Attendees */
router.put(
  "/update-Attendees/:AttendeesId",
  validate(attendeesValidation.createAttendeesList),
  attendeesController.updateAttendees
);

module.exports = router;
