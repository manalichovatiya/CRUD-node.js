const { jobService } = require("../services");

/** create Job */
const createJob = async (req, res) => {
  try {
    const reqBody = req.body;
    const Job = await jobService.createJob(reqBody);
    if (!Job) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Job create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get Job list */
const getJobList = async (req, res) => {
  try {
   const getList = await jobService.getJobList();
   res.status(200).json({
      success: true,
      message: "Get Job list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


/** Update Job */
const updateJob = async (req, res) => {
    try {
      const reqBody = req.body;
      const JobId = req.params.buJobId;
      const JobExists = await jobService.getJobById(JobId);
     if (!JobExists) {
        throw new Error("Job not found!");
     }
     await jobService.updateDetails(JobId,reqBody);
        res.status(200).json({
          success: true,
          message: "Job update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete Job */
const deleteJob = async (req, res) => {
  try {
    const JobId = req.params.JobId;
    const JobExists = await jobService.getJobById(JobId);
    if (!JobExists) {
      throw new Error("Job not found!");
    }
    await jobService.deleteJob(JobId);

    res.status(200).json({
      success: true,
      message: "Job delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createJob,
  getJobList,
  updateJob,
  deleteJob
};