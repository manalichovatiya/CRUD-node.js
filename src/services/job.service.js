const { Job } = require("../models");

//Create Job
const createJob = async (reqBody) => {
  return Job.create(reqBody);
};

// Get Job list
const getJobList = async () => {
  return Job.find();
};

// Get Job details by id
const getJobById = async (JobId) => {
  return Job.findById(JobId);
};

// Update Job
const updateJob = async (JobId,reqBody) => {
  return Job.findByIdAndUpdate(JobId,{$set:reqBody});
};

//  Delete Job
const deleteJob = async (JobId) => {
  return Job.findByIdAndDelete(JobId);
};

module.exports = {
    createJob,
    getJobList,
    getJobById,
    updateJob,
    deleteJob
};