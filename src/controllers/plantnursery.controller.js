const { plantnurseryService } = require("../services");

/** create Plantnursery */
const createPlantnursery = async (req, res) => {
  try {
    const reqBody = req.body;
    const Plantnursery = await plantnurseryService.createPlantnursery(reqBody);
    if (!Plantnursery) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Plantnursery create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get Plantnursery list */
const getPlantnurseryList = async (req, res) => {
  try {
   const getList = await plantnurseryService.getPlantnurseryList();
   res.status(200).json({
      success: true,
      message: "Get Plantnursery list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


/** Update Plantnursery */
const updatePlantnursery = async (req, res) => {
    try {
      const reqBody = req.body;
      const PlantnurseryId = req.params.buPlantnurseryId;
      const PlantnurseryExists = await plantnurseryService.getPlantnurseryById(PlantnurseryId);
     if (!PlantnurseryExists) {
        throw new Error("Plantnursery not found!");
     }
     await plantnurseryService.updateDetails(PlantnurseryId,reqBody);
        res.status(200).json({
          success: true,
          message: "Plantnursery update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete Plantnursery */
const deletePlantnursery = async (req, res) => {
  try {
    const PlantnurseryId = req.params.PlantnurseryId;
    const PlantnurseryExists = await plantnurseryService.getPlantnurseryById(PlantnurseryId);
    if (!PlantnurseryExists) {
      throw new Error("Plantnursery not found!");
    }
    await plantnurseryService.deletePlantnursery(PlantnurseryId);

    res.status(200).json({
      success: true,
      message: "Plantnursery delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createPlantnursery,
  getPlantnurseryList,
  updatePlantnursery,
  deletePlantnursery
};