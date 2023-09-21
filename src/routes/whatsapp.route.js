const express = require("express");
const { whatsappValidation } = require("../validations");
const { whatsappController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Whatsapp */
router.post(
  "/create-Whatsapp",
  validate(whatsappValidation.createWhatsappList),
  whatsappController.createWhatsapp
);

/** Get Whatsapp list */
router.get(
  "/Whatsapp-list",
  whatsappController.getWhatsappList
);

/** Delete Whatsapp */
router.delete(
  "/delete-Whatsapp/:WhatsappId",
  whatsappController.deleteWhatsapp
);

/** Update Whatsapp */
router.put(
  "/update-Whatsapp/:WhatsappId",
  validate(whatsappValidation.createWhatsappList),
  whatsappController.updateWhatsapp
);

module.exports = router;
