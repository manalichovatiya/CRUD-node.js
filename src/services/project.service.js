const { Project } = require("../models");

//Create Project
const createProject = async (reqBody) => {
  return Project.create(reqBody);
};

// Get Project list
const getProjectList = async () => {
  return Project.find();
};

// Get Project details by id
const getProjectById = async (ProjectId) => {
  return Project.findById(ProjectId);
};

// Update Project
const updateProject = async (ProjectId,reqBody) => {
  return Project.findByIdAndUpdate(ProjectId,{$set:reqBody});
};

//  Delete Project
const deleteProject = async (ProjectId) => {
  return Project.findByIdAndDelete(ProjectId);
};

module.exports = {
    createProject,
    getProjectList,
    getProjectById,
    updateProject,
    deleteProject
};