const { celebrityService } = require("../services");

/** create Celebrity */
const createCelebrity = async (req, res) => {
  try {
    const reqBody = req.body;
    const Celebrity = await celebrityService.createCelebrity(reqBody);
    if (!Celebrity) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Celebrity create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get Celebrity list */
const getCelebrityList = async (req, res) => {
  try {
   const getList = await celebrityService.getCelebrityList();
   res.status(200).json({
      success: true,
      message: "Get Celebrity list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


/** Update Celebrity */
const updateCelebrity = async (req, res) => {
    try {
      const reqBody = req.body;
      const CelebrityId = req.params.buCelebrityId;
      const CelebrityExists = await celebrityService.getCelebrityById(CelebrityId);
     if (!CelebrityExists) {
        throw new Error("Celebrity not found!");
     }
     await celebrityService.updateDetails(CelebrityId,reqBody);
        res.status(200).json({
          success: true,
          message: "Celebrity update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete Celebrity */
const deleteCelebrity = async (req, res) => {
  try {
    const CelebrityId = req.params.CelebrityId;
    const CelebrityExists = await celebrityService.getCelebrityById(CelebrityId);
    if (!CelebrityExists) {
      throw new Error("Celebrity not found!");
    }
    await celebrityService.deleteCelebrity(CelebrityId);

    res.status(200).json({
      success: true,
      message: "Celebrity delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createCelebrity,
  getCelebrityList,
  updateCelebrity,
  deleteCelebrity
};