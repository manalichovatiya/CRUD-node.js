const { bikeService } = require("../services");

/** create Bike */
const createBike = async (req, res) => {
  try {
    const reqBody = req.body;
    const Bike = await bikeService.createBike(reqBody);
    if (!Bike) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Bike create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get Bike list */
const getBikeList = async (req, res) => {
  try {
   const getList = await bikeService.getBikeList();
   res.status(200).json({
      success: true,
      message: "Get Bike list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


/** Update Bike */
const updateBike = async (req, res) => {
    try {
      const reqBody = req.body;
      const BikeId = req.params.buBikeId;
      const BikeExists = await bikeService.getBikeById(BikeId);
     if (!BikeExists) {
        throw new Error("Bike not found!");
     }
     await bikeService.updateDetails(BikeId,reqBody);
        res.status(200).json({
          success: true,
          message: "Bike update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete Bike */
const deleteBike = async (req, res) => {
  try {
    const BikeId = req.params.BikeId;
    const BikeExists = await bikeService.getBikeById(BikeId);
    if (!BikeExists) {
      throw new Error("Bike not found!");
    }
    await bikeService.deleteBike(BikeId);

    res.status(200).json({
      success: true,
      message: "Bike delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createBike,
  getBikeList,
  updateBike,
  deleteBike
};