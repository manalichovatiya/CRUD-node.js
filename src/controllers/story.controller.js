const { storyService } = require("../services");

/** create Story */
const createStory = async (req, res) => {
  try {
    const reqBody = req.body;
    const Story = await storyService.createStory(reqBody);
    if (!Story) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Story create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get Story list */
const getStoryList = async (req, res) => {
  try {
   const getList = await storyService.getStoryList();
   res.status(200).json({
      success: true,
      message: "Get Story list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


/** Update Story */
const updateStory = async (req, res) => {
    try {
      const reqBody = req.body;
      const StoryId = req.params.buStoryId;
      const StoryExists = await storyService.getStoryById(StoryId);
     if (!StoryExists) {
        throw new Error("Story not found!");
     }
     await storyService.updateDetails(StoryId,reqBody);
        res.status(200).json({
          success: true,
          message: "Story update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete Story */
const deleteStory = async (req, res) => {
  try {
    const StoryId = req.params.StoryId;
    const StoryExists = await storyService.getStoryById(StoryId);
    if (!StoryExists) {
      throw new Error("Story not found!");
    }
    await storyService.deleteStory(StoryId);

    res.status(200).json({
      success: true,
      message: "Story delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createStory,
  getStoryList,
  updateStory,
  deleteStory
};