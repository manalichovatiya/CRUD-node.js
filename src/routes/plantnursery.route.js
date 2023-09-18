const express = require("express");
const { plantnurseryValidation } = require("../validations");
const { plantnurseryController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Plantnursery */
router.post(
  "/create-Plantnursery",
  validate(plantnurseryValidation.createPlantnurseryList),
  plantnurseryController.createPlantnursery
);

/** Get Plantnursery list */
router.get(
  "/Plantnursery-list",
  plantnurseryController.getPlantnurseryList
);

/** Delete Plantnursery */
router.delete(
  "/delete-Plantnursery/:PlantnurseryId",
  plantnurseryController.deletePlantnursery
);

/** Update Plantnursery */
router.put(
  "/update-Plantnursery/:PlantnurseryId",
  validate(plantnurseryValidation.createPlantnurseryList),
  plantnurseryController.updatePlantnursery
);

module.exports = router;
