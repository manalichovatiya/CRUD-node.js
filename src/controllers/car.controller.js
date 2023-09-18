const { carService } = require("../services");

/** create Car */
const createCar = async (req, res) => {
  try {
    const reqBody = req.body;
    const Car = await carService.createCar(reqBody);
    if (!Car) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Car create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get Car list */
const getCarList = async (req, res) => {
  try {
   const getList = await carService.getCarList();
   res.status(200).json({
      success: true,
      message: "Get Car list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


/** Update Car */
const updateCar = async (req, res) => {
    try {
      const reqBody = req.body;
      const CarId = req.params.buCarId;
      const CarExists = await carService.getCarById(CarId);
     if (!CarExists) {
        throw new Error("Car not found!");
     }
     await carService.updateDetails(CarId,reqBody);
        res.status(200).json({
          success: true,
          message: "Car update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete Car */
const deleteCar = async (req, res) => {
  try {
    const CarId = req.params.CarId;
    const CarExists = await carService.getCarById(CarId);
    if (!CarExists) {
      throw new Error("Car not found!");
    }
    await carService.deleteCar(CarId);

    res.status(200).json({
      success: true,
      message: "Car delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createCar,
  getCarList,
  updateCar,
  deleteCar
};