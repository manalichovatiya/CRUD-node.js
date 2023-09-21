const { whatsappService } = require("../services");

/** create Whatsapp */
const createWhatsapp = async (req, res) => {
  try {
    const reqBody = req.body;
    const Whatsapp = await whatsappService.createWhatsapp(reqBody);
    if (!Whatsapp) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Whatsapp create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get Whatsapp list */
const getWhatsappList = async (req, res) => {
  try {
   const getList = await whatsappService.getWhatsappList();
   res.status(200).json({
      success: true,
      message: "Get Whatsapp list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update Whatsapp */
const updateWhatsapp = async (req, res) => {
    try {
      const reqBody = req.body;
      const WhatsappId = req.params.buWhatsappId;
      const WhatsappExists = await whatsappService.getWhatsappById(WhatsappId);
     if (!WhatsappExists) {
        throw new Error("Whatsapp not found!");
     }
     await whatsappService.updateDetails(WhatsappId,reqBody);
        res.status(200).json({
          success: true,
          message: "Whatsapp update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete Whatsapp */
const deleteWhatsapp = async (req, res) => {
  try {
    const WhatsappId = req.params.WhatsappId;
    const WhatsappExists = await whatsappService.getWhatsappById(WhatsappId);
    if (!WhatsappExists) {
      throw new Error("Whatsapp not found!");
    }
    await whatsappService.deleteWhatsapp(WhatsappId);

    res.status(200).json({
      success: true,
      message: "Whatsapp delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createWhatsapp,
  getWhatsappList,
  updateWhatsapp,
  deleteWhatsapp
};