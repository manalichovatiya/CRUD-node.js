const { projectService } = require("../services");

/** create Project */
const createProject = async (req, res) => {
  try {
    const reqBody = req.body;
    const Project = await projectService.createProject(reqBody);
    if (!Project) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Project create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get Project list */
const getProjectList = async (req, res) => {
  try {
   const getList = await projectService.getProjectList();
   res.status(200).json({
      success: true,
      message: "Get Project list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


/** Update Project */
const updateProject = async (req, res) => {
    try {
      const reqBody = req.body;
      const ProjectId = req.params.buProjectId;
      const ProjectExists = await projectService.getProjectById(ProjectId);
     if (!ProjectExists) {
        throw new Error("Project not found!");
     }
     await projectService.updateDetails(ProjectId,reqBody);
        res.status(200).json({
          success: true,
          message: "Project update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete Project */
const deleteProject = async (req, res) => {
  try {
    const ProjectId = req.params.ProjectId;
    const ProjectExists = await projectService.getProjectById(ProjectId);
    if (!ProjectExists) {
      throw new Error("Project not found!");
    }
    await projectService.deleteProject(ProjectId);

    res.status(200).json({
      success: true,
      message: "Project delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createProject,
  getProjectList,
  updateProject,
  deleteProject
};