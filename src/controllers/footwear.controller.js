const { footwearService } = require("../services");

/** create Footwear */
const createFootwear = async (req, res) => {
  try {
    const reqBody = req.body;
    const Footwear = await footwearService.createFootwear(reqBody);
    if (!Footwear) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Footwear create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get Footwear list */
const getFootwearList = async (req, res) => {
  try {
   const getList = await footwearService.getFootwearList();
   res.status(200).json({
      success: true,
      message: "Get Footwear list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


/** Update Footwear */
const updateFootwear = async (req, res) => {
    try {
      const reqBody = req.body;
      const FootwearId = req.params.buFootwearId;
      const FootwearExists = await footwearService.getFootwearById(FootwearId);
     if (!FootwearExists) {
        throw new Error("Footwear not found!");
     }
     await footwearService.updateDetails(FootwearId,reqBody);
        res.status(200).json({
          success: true,
          message: "Footwear update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete Footwear */
const deleteFootwear = async (req, res) => {
  try {
    const FootwearId = req.params.FootwearId;
    const FootwearExists = await footwearService.getFootwearById(FootwearId);
    if (!FootwearExists) {
      throw new Error("Footwear not found!");
    }
    await footwearService.deleteFootwear(FootwearId);

    res.status(200).json({
      success: true,
      message: "Footwear delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createFootwear,
  getFootwearList,
  updateFootwear,
  deleteFootwear
};