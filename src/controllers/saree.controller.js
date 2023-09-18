const { sareeService } = require("../services");

/** create Saree */
const createSaree = async (req, res) => {
  try {
    const reqBody = req.body;
    const Saree = await sareeService.createSaree(reqBody);
    if (!Saree) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Saree create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get Saree list */
const getSareeList = async (req, res) => {
  try {
   const getList = await sareeService.getSareeList();
   res.status(200).json({
      success: true,
      message: "Get Saree list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


/** Update Saree */
const updateSaree = async (req, res) => {
    try {
      const reqBody = req.body;
      const SareeId = req.params.buSareeId;
      const SareeExists = await sareeService.getSareeById(SareeId);
     if (!SareeExists) {
        throw new Error("Saree not found!");
     }
     await sareeService.updateDetails(SareeId,reqBody);
        res.status(200).json({
          success: true,
          message: "Saree update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete Saree */
const deleteSaree = async (req, res) => {
  try {
    const SareeId = req.params.SareeId;
    const SareeExists = await sareeService.getSareeById(SareeId);
    if (!SareeExists) {
      throw new Error("Saree not found!");
    }
    await sareeService.deleteSaree(SareeId);

    res.status(200).json({
      success: true,
      message: "Saree delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createSaree,
  getSareeList,
  updateSaree,
  deleteSaree
};