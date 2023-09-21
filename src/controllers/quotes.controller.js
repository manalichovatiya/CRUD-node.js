const { quotesService } = require("../services");

/** create Quotes */
const createQuotes = async (req, res) => {
  try {
    const reqBody = req.body;
    const Quotes = await quotesService.createQuotes(reqBody);
    if (!Quotes) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Quotes create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get Quotes list */
const getQuotesList = async (req, res) => {
  try {
   const getList = await quotesService.getQuotesList();
   res.status(200).json({
      success: true,
      message: "Get Quotes list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


/** Update Quotes */
const updateQuotes = async (req, res) => {
    try {
      const reqBody = req.body;
      const QuotesId = req.params.buQuotesId;
      const QuotesExists = await quotesService.getQuotesById(QuotesId);
     if (!QuotesExists) {
        throw new Error("Quotes not found!");
     }
     await quotesService.updateDetails(QuotesId,reqBody);
        res.status(200).json({
          success: true,
          message: "Quotes update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete Quotes */
const deleteQuotes = async (req, res) => {
  try {
    const QuotesId = req.params.QuotesId;
    const QuotesExists = await quotesService.getQuotesById(QuotesId);
    if (!QuotesExists) {
      throw new Error("Quotes not found!");
    }
    await quotesService.deleteQuotes(QuotesId);

    res.status(200).json({
      success: true,
      message: "Quotes delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createQuotes,
  getQuotesList,
  updateQuotes,
  deleteQuotes
};