const { pencilService } = require("../services");

/** create Pencil */
const createPencil = async (req, res) => {
  try {
    const reqBody = req.body;
    const Pencil = await pencilService.createPencil(reqBody);
    if (!Pencil) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Pencil create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get Pencil list */
const getPencilList = async (req, res) => {
  try {
   const getList = await pencilService.getPencilList();
   res.status(200).json({
      success: true,
      message: "Get Pencil list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


/** Update Pencil */
const updatePencil = async (req, res) => {
    try {
      const reqBody = req.body;
      const PencilId = req.params.buPencilId;
      const PencilExists = await pencilService.getPencilById(PencilId);
     if (!PencilExists) {
        throw new Error("Pencil not found!");
     }
     await pencilService.updateDetails(PencilId,reqBody);
        res.status(200).json({
          success: true,
          message: "Pencil update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete Pencil */
const deletePencil = async (req, res) => {
  try {
    const PencilId = req.params.PencilId;
    const PencilExists = await pencilService.getPencilById(PencilId);
    if (!PencilExists) {
      throw new Error("Pencil not found!");
    }
    await pencilService.deletePencil(PencilId);

    res.status(200).json({
      success: true,
      message: "Pencil delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createPencil,
  getPencilList,
  updatePencil,
  deletePencil
};