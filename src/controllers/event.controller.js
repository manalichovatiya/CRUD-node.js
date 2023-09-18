const { eventService } = require("../services");

/** create Event */
const createEvent = async (req, res) => {
  try {
    const reqBody = req.body;
    const Event = await eventService.createEvent(reqBody);
    if (!Event) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Event create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get Event list */
const getEventList = async (req, res) => {
  try {
   const getList = await eventService.getEventList();
   res.status(200).json({
      success: true,
      message: "Get Event list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


/** Update Event */
const updateEvent = async (req, res) => {
    try {
      const reqBody = req.body;
      const EventId = req.params.buEventId;
      const EventExists = await eventService.getEventById(EventId);
     if (!EventExists) {
        throw new Error("Event not found!");
     }
     await eventService.updateDetails(EventId,reqBody);
        res.status(200).json({
          success: true,
          message: "Event update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete Event */
const deleteEvent = async (req, res) => {
  try {
    const EventId = req.params.EventId;
    const EventExists = await eventService.getEventById(EventId);
    if (!EventExists) {
      throw new Error("Event not found!");
    }
    await eventService.deleteEvent(EventId);

    res.status(200).json({
      success: true,
      message: "Event delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createEvent,
  getEventList,
  updateEvent,
  deleteEvent
};