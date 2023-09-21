const { Todolist } = require("../models");

//Create Todolist
const createTodolist = async (reqBody) => {
  return Todolist.create(reqBody);
};

// Get Todolist list
const getTodoList = async () => {
  return Todolist.find();
};

// Get Todolist details by id
const getTodolistById = async (TodolistId) => {
  return Todolist.findById(TodolistId);
};

// Update Todolist
const updateTodolist = async (TodolistId,reqBody) => {
  return Todolist.findByIdAndUpdate(TodolistId,{$set:reqBody});
};

//  Delete Todolist
const deleteTodolist = async (TodolistId) => {
  return Todolist.findByIdAndDelete(TodolistId);
};

module.exports = {
    createTodolist,
    getTodoList,
    getTodolistById,
    updateTodolist,
    deleteTodolist
};