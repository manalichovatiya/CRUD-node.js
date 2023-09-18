const { servantService } = require("../services");

/** create Servant */
const createServant = async (req, res) => {
  try {
    const reqBody = req.body;
    const Servant = await servantService.createServant(reqBody);
    if (!Servant) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Servant create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get Servant list */
const getServantList = async (req, res) => {
  try {
   const getList = await servantService.getServantList();
   res.status(200).json({
      success: true,
      message: "Get Servant list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


/** Update Servant */
const updateServant = async (req, res) => {
    try {
      const reqBody = req.body;
      const ServantId = req.params.buServantId;
      const ServantExists = await servantService.getServantById(ServantId);
     if (!ServantExists) {
        throw new Error("Servant not found!");
     }
     await servantService.updateDetails(ServantId,reqBody);
        res.status(200).json({
          success: true,
          message: "Servant update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete Servant */
const deleteServant = async (req, res) => {
  try {
    const ServantId = req.params.ServantId;
    const ServantExists = await servantService.getServantById(ServantId);
    if (!ServantExists) {
      throw new Error("Servant not found!");
    }
    await servantService.deleteServant(ServantId);

    res.status(200).json({
      success: true,
      message: "Servant delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createServant,
  getServantList,
  updateServant,
  deleteServant
};