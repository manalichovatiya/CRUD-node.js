const express = require("express");
const { servantValidation } = require("../validations");
const { servantController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Servant */
router.post(
  "/create-Servant",
  validate(servantValidation.createServantList),
  servantController.createServant
);

/** Get Servant list */
router.get(
  "/Servant-list",
  servantController.getServantList
);

/** Delete Servant */
router.delete(
  "/delete-Servant/:ServantId",
  servantController.deleteServant
);

/** Update Servant */
router.put(
  "/update-Servant/:ServantId",
  validate(servantValidation.createServantList),
  servantController.updateServant
);

module.exports = router;
