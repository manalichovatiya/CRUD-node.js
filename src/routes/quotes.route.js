const express = require("express");
const { quotesValidation } = require("../validations");
const { quotesController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Quotes */
router.post(
  "/create-Quotes",
  validate(quotesValidation.createQuotesList),
  quotesController.createQuotes
);

/** Get Quotes list */
router.get(
  "/Quotes-list",
  quotesController.getQuotesList
);

/** Delete Quotes */
router.delete(
  "/delete-Quotes/:QuotesId",
  quotesController.deleteQuotes
);

/** Update Quotes */
router.put(
  "/update-Quotes/:QuotesId",
  validate(quotesValidation.createQuotesList),
  quotesController.updateQuotes
);

module.exports = router;
