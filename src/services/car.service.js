const { Car } = require("../models");

//Create Car
const createCar = async (reqBody) => {
  return Car.create(reqBody);
};

// Get Car list
const getCarList = async () => {
  return Car.find();
};

// Get Car details by id
const getCarById = async (CarId) => {
  return Car.findById(CarId);
};

// Update Car
const updateCar = async (CarId,reqBody) => {
  return Car.findByIdAndUpdate(CarId,{$set:reqBody});
};

//  Delete Car
const deleteCar = async (CarId) => {
  return Car.findByIdAndDelete(CarId);
};

module.exports = {
    createCar,
    getCarList,
    getCarById,
    updateCar,
    deleteCar
};