const { watchService } = require("../services");

/** create Watch */
const createWatch = async (req, res) => {
  try {
    const reqBody = req.body;
    const Watch = await watchService.createWatch(reqBody);
    if (!Watch) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Watch create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get Watch list */
const getWatchList = async (req, res) => {
  try {
   const getList = await watchService.getWatchList();
   res.status(200).json({
      success: true,
      message: "Get Watch list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


/** Update Watch */
const updateWatch = async (req, res) => {
    try {
      const reqBody = req.body;
      const WatchId = req.params.buWatchId;
      const WatchExists = await watchService.getWatchById(WatchId);
     if (!WatchExists) {
        throw new Error("Watch not found!");
     }
     await watchService.updateDetails(WatchId,reqBody);
        res.status(200).json({
          success: true,
          message: "Watch update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete Watch */
const deleteWatch = async (req, res) => {
  try {
    const WatchId = req.params.WatchId;
    const WatchExists = await watchService.getWatchById(WatchId);
    if (!WatchExists) {
      throw new Error("Watch not found!");
    }
    await watchService.deleteWatch(WatchId);

    res.status(200).json({
      success: true,
      message: "Watch delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createWatch,
  getWatchList,
  updateWatch,
  deleteWatch
};