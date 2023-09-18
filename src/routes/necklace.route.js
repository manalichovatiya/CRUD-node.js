const express = require("express");
const { necklaceValidation } = require("../validations");
const { necklaceController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Necklace */
router.post(
  "/create-Necklace",
  validate(necklaceValidation.createNecklaceList),
  necklaceController.createNecklace
);

/** Get Necklace list */
router.get(
  "/Necklace-list",
  necklaceController.getNecklaceList
);

/** Delete Necklace */
router.delete(
  "/delete-Necklace/:NecklaceId",
  necklaceController.deleteNecklace
);

/** Update Necklace */
router.put(
  "/update-Necklace/:NecklaceId",
  validate(necklaceValidation.createNecklaceList),
  necklaceController.updateNecklace
);

module.exports = router;
