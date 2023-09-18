const { necklaceService } = require("../services");

/** create Necklace */
const createNecklace = async (req, res) => {
  try {
    const reqBody = req.body;
    const Necklace = await necklaceService.createNecklace(reqBody);
    if (!Necklace) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Necklace create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get Necklace list */
const getNecklaceList = async (req, res) => {
  try {
   const getList = await necklaceService.getNecklaceList();
   res.status(200).json({
      success: true,
      message: "Get Necklace list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


/** Update Necklace */
const updateNecklace = async (req, res) => {
    try {
      const reqBody = req.body;
      const NecklaceId = req.params.buNecklaceId;
      const NecklaceExists = await necklaceService.getNecklaceById(NecklaceId);
     if (!NecklaceExists) {
        throw new Error("Necklace not found!");
     }
     await necklaceService.updateDetails(NecklaceId,reqBody);
        res.status(200).json({
          success: true,
          message: "Necklace update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete Necklace */
const deleteNecklace = async (req, res) => {
  try {
    const NecklaceId = req.params.NecklaceId;
    const NecklaceExists = await necklaceService.getNecklaceById(NecklaceId);
    if (!NecklaceExists) {
      throw new Error("Necklace not found!");
    }
    await necklaceService.deleteNecklace(NecklaceId);

    res.status(200).json({
      success: true,
      message: "Necklace delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createNecklace,
  getNecklaceList,
  updateNecklace,
  deleteNecklace
};