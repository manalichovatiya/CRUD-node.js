const express = require("express");
const { socialmediaValidation } = require("../validations");
const { socialmediaController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Socialmedia */
router.post(
  "/create-Socialmedia",
  validate(socialmediaValidation.createSocialmediaList),
  socialmediaController.createSocialmedia
);

/** Get Socialmedia list */
router.get(
  "/Socialmedia-list",
  socialmediaController.getSocialmediaList
);

/** Delete Socialmedia */
router.delete(
  "/delete-Socialmedia/:SocialmediaId",
  socialmediaController.deleteSocialmedia
);

/** Update Socialmedia */
router.put(
  "/update-Socialmedia/:SocialmediaId",
  validate(socialmediaValidation.createSocialmediaList),
  socialmediaController.updateSocialmedia
);

module.exports = router;
