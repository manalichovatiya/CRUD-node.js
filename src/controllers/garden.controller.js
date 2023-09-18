const { gardenService } = require("../services");

/** create Garden */
const createGarden = async (req, res) => {
  try {
    const reqBody = req.body;
    const Garden = await gardenService.createGarden(reqBody);
    if (!Garden) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Garden create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get Garden list */
const getGardenList = async (req, res) => {
  try {
   const getList = await gardenService.getGardenList();
   res.status(200).json({
      success: true,
      message: "Get Garden list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


/** Update Garden */
const updateGarden = async (req, res) => {
    try {
      const reqBody = req.body;
      const GardenId = req.params.buGardenId;
      const GardenExists = await gardenService.getGardenById(GardenId);
     if (!GardenExists) {
        throw new Error("Garden not found!");
     }
     await gardenService.updateDetails(GardenId,reqBody);
        res.status(200).json({
          success: true,
          message: "Garden update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete Garden */
const deleteGarden = async (req, res) => {
  try {
    const GardenId = req.params.GardenId;
    const GardenExists = await gardenService.getGardenById(GardenId);
    if (!GardenExists) {
      throw new Error("Garden not found!");
    }
    await gardenService.deleteGarden(GardenId);

    res.status(200).json({
      success: true,
      message: "Garden delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createGarden,
  getGardenList,
  updateGarden,
  deleteGarden
};