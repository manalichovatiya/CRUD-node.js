const express = require("express");
const { pencilValidation } = require("../validations");
const { pencilController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Pencil */
router.post(
  "/create-Pencil",
  validate(pencilValidation.createPencilList),
  pencilController.createPencil
);

/** Get Pencil list */
router.get(
  "/Pencil-list",
  pencilController.getPencilList
);

/** Delete Pencil */
router.delete(
  "/delete-Pencil/:PencilId",
  pencilController.deletePencil
);

/** Update Pencil */
router.put(
  "/update-Pencil/:PencilId",
  validate(pencilValidation.createPencilList),
  pencilController.updatePencil
);

module.exports = router;
