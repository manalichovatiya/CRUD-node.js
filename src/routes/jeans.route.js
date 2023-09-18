const express = require("express");
const { jeansValidation } = require("../validations");
const { jeansController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Jeans */
router.post(
  "/create-Jeans",
  validate(jeansValidation.createJeansList),
  jeansController.createJeans
);

/** Get Jeans list */
router.get(
  "/Jeans-list",
  jeansController.getJeansList
);

/** Delete Jeans */
router.delete(
  "/delete-Jeans/:JeansId",
  jeansController.deleteJeans
);

/** Update Jeans */
router.put(
  "/update-Jeans/:JeansId",
  validate(jeansValidation.createJeansList),
  jeansController.updateJeans
);

module.exports = router;
