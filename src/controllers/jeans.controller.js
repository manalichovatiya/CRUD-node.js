const { jeansService } = require("../services");

/** create Jeans */
const createJeans = async (req, res) => {
  try {
    const reqBody = req.body;
    const Jeans = await jeansService.createJeans(reqBody);
    if (!Jeans) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Jeans create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get Jeans list */
const getJeansList = async (req, res) => {
  try {
   const getList = await jeansService.getJeansList();
   res.status(200).json({
      success: true,
      message: "Get Jeans list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


/** Update Jeans */
const updateJeans = async (req, res) => {
    try {
      const reqBody = req.body;
      const JeansId = req.params.buJeansId;
      const JeansExists = await jeansService.getJeansById(JeansId);
     if (!JeansExists) {
        throw new Error("Jeans not found!");
     }
     await jeansService.updateDetails(JeansId,reqBody);
        res.status(200).json({
          success: true,
          message: "Jeans update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete Jeans */
const deleteJeans = async (req, res) => {
  try {
    const JeansId = req.params.JeansId;
    const JeansExists = await jeansService.getJeansById(JeansId);
    if (!JeansExists) {
      throw new Error("Jeans not found!");
    }
    await jeansService.deleteJeans(JeansId);

    res.status(200).json({
      success: true,
      message: "Jeans delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createJeans,
  getJeansList,
  updateJeans,
  deleteJeans
};