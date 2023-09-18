const express = require("express");
const { eventValidation } = require("../validations");
const { eventController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Event */
router.post(
  "/create-Event",
  validate(eventValidation.createEventList),
  eventController.createEvent
);

/** Get Event list */
router.get(
  "/Event-list",
  eventController.getEventList
);

/** Delete Event */
router.delete(
  "/delete-Event/:EventId",
  eventController.deleteEvent
);

/** Update Event */
router.put(
  "/update-Event/:EventId",
  validate(eventValidation.createEventList),
  eventController.updateEvent
);

module.exports = router;
