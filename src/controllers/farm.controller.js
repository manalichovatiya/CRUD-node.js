const { farmService } = require("../services");

/** create Farm */
const createFarm = async (req, res) => {
  try {
    const reqBody = req.body;
    const Farm = await farmService.createFarm(reqBody);
    if (!Farm) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Farm create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get Farm list */
const getFarmList = async (req, res) => {
  try {
   const getList = await farmService.getFarmList();
   res.status(200).json({
      success: true,
      message: "Get Farm list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


/** Update Farm */
const updateFarm = async (req, res) => {
    try {
      const reqBody = req.body;
      const FarmId = req.params.buFarmId;
      const FarmExists = await farmService.getFarmById(FarmId);
     if (!FarmExists) {
        throw new Error("Farm not found!");
     }
     await farmService.updateDetails(FarmId,reqBody);
        res.status(200).json({
          success: true,
          message: "Farm update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete Farm */
const deleteFarm = async (req, res) => {
  try {
    const FarmId = req.params.FarmId;
    const FarmExists = await farmService.getFarmById(FarmId);
    if (!FarmExists) {
      throw new Error("Farm not found!");
    }
    await farmService.deleteFarm(FarmId);

    res.status(200).json({
      success: true,
      message: "Farm delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createFarm,
  getFarmList,
  updateFarm,
  deleteFarm
};