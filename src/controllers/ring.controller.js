const { ringService } = require("../services");

/** create Ring */
const createRing = async (req, res) => {
  try {
    const reqBody = req.body;
    const Ring = await ringService.createRing(reqBody);
    if (!Ring) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Ring create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get Ring list */
const getRingList = async (req, res) => {
  try {
   const getList = await ringService.getRingList();
   res.status(200).json({
      success: true,
      message: "Get Ring list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


/** Update Ring */
const updateRing = async (req, res) => {
    try {
      const reqBody = req.body;
      const RingId = req.params.buRingId;
      const RingExists = await ringService.getRingById(RingId);
     if (!RingExists) {
        throw new Error("Ring not found!");
     }
     await ringService.updateDetails(RingId,reqBody);
        res.status(200).json({
          success: true,
          message: "Ring update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete Ring */
const deleteRing = async (req, res) => {
  try {
    const RingId = req.params.RingId;
    const RingExists = await ringService.getRingById(RingId);
    if (!RingExists) {
      throw new Error("Ring not found!");
    }
    await ringService.deleteRing(RingId);

    res.status(200).json({
      success: true,
      message: "Ring delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createRing,
  getRingList,
  updateRing,
  deleteRing
};