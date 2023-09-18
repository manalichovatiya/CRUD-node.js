const { foodService } = require("../services");

/** create Food */
const createFood = async (req, res) => {
  try {
    const reqBody = req.body;
    const Food = await foodService.createFood(reqBody);
    if (!Food) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Food create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get Food list */
const getFoodList = async (req, res) => {
  try {
   const getList = await foodService.getFoodList();
   res.status(200).json({
      success: true,
      message: "Get Food list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


/** Update Food */
const updateFood = async (req, res) => {
    try {
      const reqBody = req.body;
      const FoodId = req.params.buFoodId;
      const FoodExists = await foodService.getFoodById(FoodId);
     if (!FoodExists) {
        throw new Error("Food not found!");
     }
     await foodService.updateDetails(FoodId,reqBody);
        res.status(200).json({
          success: true,
          message: "Food update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete Food */
const deleteFood = async (req, res) => {
  try {
    const FoodId = req.params.FoodId;
    const FoodExists = await foodService.getFoodById(FoodId);
    if (!FoodExists) {
      throw new Error("Food not found!");
    }
    await foodService.deleteFood(FoodId);

    res.status(200).json({
      success: true,
      message: "Food delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createFood,
  getFoodList,
  updateFood,
  deleteFood
};