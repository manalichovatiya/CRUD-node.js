const { Story } = require("../models");

//Create Story
const createStory = async (reqBody) => {
  return Story.create(reqBody);
};

// Get Story list
const getStoryList = async () => {
  return Story.find();
};

// Get Story details by id
const getStoryById = async (StoryId) => {
  return Story.findById(StoryId);
};

// Update Story
const updateStory = async (StoryId,reqBody) => {
  return Story.findByIdAndUpdate(StoryId,{$set:reqBody});
};

//  Delete Story
const deleteStory = async (StoryId) => {
  return Story.findByIdAndDelete(StoryId);
};

module.exports = {
    createStory,
    getStoryList,
    getStoryById,
    updateStory,
    deleteStory
};