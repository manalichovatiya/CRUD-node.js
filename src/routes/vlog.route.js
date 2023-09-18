const express = require("express");
const { vlogValidation } = require("../validations");
const { vlogController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Vlog */
router.post(
  "/create-Vlog",
  validate(vlogValidation.createVlogList),
  vlogController.createVlog
);

/** Get Vlog list */
router.get(
  "/Vlog-list",
  vlogController.getVlogList
);

/** Delete Vlog */
router.delete(
  "/delete-Vlog/:VlogId",
  vlogController.deleteVlog
);

/** Update Vlog */
router.put(
  "/update-Vlog/:VlogId",
  validate(vlogValidation.createVlogList),
  vlogController.updateVlog
);

module.exports = router;
