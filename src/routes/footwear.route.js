const express = require("express");
const { foowearValidation } = require("../validations");
const { footwearController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Footwear */
router.post(
  "/create-Footwear",
  validate(foowearValidation.createFootwearList),
  footwearController.createFootwear
);

/** Get Footwear list */
router.get(
  "/Footwear-list",
  footwearController.getFootwearList
);

/** Delete Footwear */
router.delete(
  "/delete-Footwear/:FootwearId",
  footwearController.deleteFootwear
);

/** Update Footwear */
router.put(
  "/update-Footwear/:FootwearId",
  validate(foowearValidation.createFootwearList),
  footwearController.updateFootwear
);

module.exports = router;
