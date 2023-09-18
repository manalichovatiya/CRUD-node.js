const { vlogService } = require("../services");

/** create Vlog */
const createVlog = async (req, res) => {
  try {
    const reqBody = req.body;
    const Vlog = await vlogService.createVlog(reqBody);
    if (!Vlog) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Vlog create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get Vlog list */
const getVlogList = async (req, res) => {
  try {
   const getList = await vlogService.getVlogList();
   res.status(200).json({
      success: true,
      message: "Get Vlog list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


/** Update Vlog */
const updateVlog = async (req, res) => {
    try {
      const reqBody = req.body;
      const VlogId = req.params.buVlogId;
      const VlogExists = await vlogService.getVlogById(VlogId);
     if (!VlogExists) {
        throw new Error("Vlog not found!");
     }
     await vlogService.updateDetails(VlogId,reqBody);
        res.status(200).json({
          success: true,
          message: "Vlog update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete Vlog */
const deleteVlog = async (req, res) => {
  try {
    const VlogId = req.params.VlogId;
    const VlogExists = await vlogService.getVlogById(VlogId);
    if (!VlogExists) {
      throw new Error("Vlog not found!");
    }
    await vlogService.deleteVlog(VlogId);

    res.status(200).json({
      success: true,
      message: "Vlog delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createVlog,
  getVlogList,
  updateVlog,
  deleteVlog
};