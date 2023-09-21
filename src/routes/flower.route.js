const express = require("express");
const { flowerValidation } = require("../validations");
const { flowerController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Flower */
router.post(
  "/create-Flower",
  validate(flowerValidation.createFlowerList),
  flowerController.createFlower
);

/** Get Flower list */
router.get(
  "/Flower-list",
  flowerController.getFlowerList
);

/** Delete Flower */
router.delete(
  "/delete-Flower/:FlowerId",
  flowerController.deleteFlower
);

/** Update Flower */
router.put(
  "/update-Flower/:FlowerId",
  validate(flowerValidation.createFlowerList),
  flowerController.updateFlower
);

module.exports = router;
