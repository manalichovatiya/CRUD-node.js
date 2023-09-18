const express = require("express");
const { perfumeValidation } = require("../validations");
const { perfumeController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Perfume */
router.post(
  "/create-Perfume",
  validate(perfumeValidation.createPerfumeList),
  perfumeController.createPerfume
);

/** Get Perfume list */
router.get(
  "/Perfume-list",
  perfumeController.getPerfumeList
);

/** Delete Perfume */
router.delete(
  "/delete-Perfume/:PerfumeId",
  perfumeController.deletePerfume
);

/** Update Perfume */
router.put(
  "/update-Perfume/:PerfumeId",
  validate(perfumeValidation.createPerfumeList),
  perfumeController.updatePerfume
);

module.exports = router;
