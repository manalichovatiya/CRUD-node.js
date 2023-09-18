const { perfumeService } = require("../services");

/** create Perfume */
const createPerfume = async (req, res) => {
  try {
    const reqBody = req.body;
    const Perfume = await perfumeService.createPerfume(reqBody);
    if (!Perfume) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Perfume create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get Perfume list */
const getPerfumeList = async (req, res) => {
  try {
   const getList = await perfumeService.getPerfumeList();
   res.status(200).json({
      success: true,
      message: "Get Perfume list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


/** Update Perfume */
const updatePerfume = async (req, res) => {
    try {
      const reqBody = req.body;
      const PerfumeId = req.params.buPerfumeId;
      const PerfumeExists = await perfumeService.getPerfumeById(PerfumeId);
     if (!PerfumeExists) {
        throw new Error("Perfume not found!");
     }
     await perfumeService.updateDetails(PerfumeId,reqBody);
        res.status(200).json({
          success: true,
          message: "Perfume update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete Perfume */
const deletePerfume = async (req, res) => {
  try {
    const PerfumeId = req.params.PerfumeId;
    const PerfumeExists = await perfumeService.getPerfumeById(PerfumeId);
    if (!PerfumeExists) {
      throw new Error("Perfume not found!");
    }
    await perfumeService.deletePerfume(PerfumeId);

    res.status(200).json({
      success: true,
      message: "Perfume delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createPerfume,
  getPerfumeList,
  updatePerfume,
  deletePerfume
};