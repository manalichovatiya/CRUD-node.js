const { flowerService } = require("../services");

/** create Flower */
const createFlower = async (req, res) => {
  try {
    const reqBody = req.body;
    const Flower = await flowerService.createFlower(reqBody);
    if (!Flower) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Flower create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get Flower list */
const getFlowerList = async (req, res) => {
  try {
   const getList = await flowerService.getFlowerList();
   res.status(200).json({
      success: true,
      message: "Get Flower list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


/** Update Flower */
const updateFlower = async (req, res) => {
    try {
      const reqBody = req.body;
      const FlowerId = req.params.buFlowerId;
      const FlowerExists = await flowerService.getFlowerById(FlowerId);
     if (!FlowerExists) {
        throw new Error("Flower not found!");
     }
     await flowerService.updateDetails(FlowerId,reqBody);
        res.status(200).json({
          success: true,
          message: "Flower update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete Flower */
const deleteFlower = async (req, res) => {
  try {
    const FlowerId = req.params.FlowerId;
    const FlowerExists = await flowerService.getFlowerById(FlowerId);
    if (!FlowerExists) {
      throw new Error("Flower not found!");
    }
    await flowerService.deleteFlower(FlowerId);

    res.status(200).json({
      success: true,
      message: "Flower delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createFlower,
  getFlowerList,
  updateFlower,
  deleteFlower
};