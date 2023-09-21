const { socialmediaService } = require("../services");

/** create Socialmedia */
const createSocialmedia = async (req, res) => {
  try {
    const reqBody = req.body;
    const Socialmedia = await socialmediaService.createSocialmedia(reqBody);
    if (!Socialmedia) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Socialmedia create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get Socialmedia list */
const getSocialmediaList = async (req, res) => {
  try {
   const getList = await socialmediaService.getSocialmediaList();
   res.status(200).json({
      success: true,
      message: "Get Socialmedia list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


/** Update Socialmedia */
const updateSocialmedia = async (req, res) => {
    try {
      const reqBody = req.body;
      const SocialmediaId = req.params.buSocialmediaId;
      const SocialmediaExists = await socialmediaService.getSocialmediaById(SocialmediaId);
     if (!SocialmediaExists) {
        throw new Error("Socialmedia not found!");
     }
     await socialmediaService.updateDetails(SocialmediaId,reqBody);
        res.status(200).json({
          success: true,
          message: "Socialmedia update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete Socialmedia */
const deleteSocialmedia = async (req, res) => {
  try {
    const SocialmediaId = req.params.SocialmediaId;
    const SocialmediaExists = await socialmediaService.getSocialmediaById(SocialmediaId);
    if (!SocialmediaExists) {
      throw new Error("Socialmedia not found!");
    }
    await socialmediaService.deleteSocialmedia(SocialmediaId);

    res.status(200).json({
      success: true,
      message: "Socialmedia delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createSocialmedia,
  getSocialmediaList,
  updateSocialmedia,
  deleteSocialmedia
};