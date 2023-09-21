const { cycleService } = require("../services");

/** create Cycle */
const createCycle = async (req, res) => {
  try {
    const reqBody = req.body;
    const Cycle = await cycleService.createCycle(reqBody);
    if (!Cycle) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Cycle create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get Cycle list */
const getCycleList = async (req, res) => {
  try {
   const getList = await cycleService.getCycleList();
   res.status(200).json({
      success: true,
      message: "Get Cycle list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


/** Update Cycle */
const updateCycle = async (req, res) => {
    try {
      const reqBody = req.body;
      const CycleId = req.params.buCycleId;
      const CycleExists = await cycleService.getCycleById(CycleId);
     if (!CycleExists) {
        throw new Error("Cycle not found!");
     }
     await cycleService.updateDetails(CycleId,reqBody);
        res.status(200).json({
          success: true,
          message: "Cycle update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete Cycle */
const deleteCycle = async (req, res) => {
  try {
    const CycleId = req.params.CycleId;
    const CycleExists = await cycleService.getCycleById(CycleId);
    if (!CycleExists) {
      throw new Error("Cycle not found!");
    }
    await cycleService.deleteCycle(CycleId);

    res.status(200).json({
      success: true,
      message: "Cycle delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createCycle,
  getCycleList,
  updateCycle,
  deleteCycle
};