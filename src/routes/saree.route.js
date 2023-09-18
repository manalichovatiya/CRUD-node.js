const express = require("express");
const { sareeValidation } = require("../validations");
const { sareeController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Saree */
router.post(
  "/create-Saree",
  validate(sareeValidation.createSareeList),
  sareeController.createSaree
);

/** Get Saree list */
router.get(
  "/Saree-list",
  sareeController.getSareeList
);

/** Delete Saree */
router.delete(
  "/delete-Saree/:SareeId",
  sareeController.deleteSaree
);

/** Update Saree */
router.put(
  "/update-Saree/:SareeId",
  validate(sareeValidation.createSareeList),
  sareeController.updateSaree
);

module.exports = router;
