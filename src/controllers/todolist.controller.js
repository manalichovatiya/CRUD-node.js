const { todolistService } = require("../services");

/** create ToDo */
const createToDo = async (req, res) => {
  try {
    const reqBody = req.body;
    const ToDo = await todolistService.createTodolist(reqBody);
    if (!ToDo) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "ToDo create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get ToDo list */
const getToDoList = async (req, res) => {
  try {
   const getList = await todolistService.getTodoList();
   res.status(200).json({
      success: true,
      message: "Get ToDo list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update ToDo */
const updateToDo = async (req, res) => {
    try {
      const reqBody = req.body;
      const ToDoId = req.params.buToDoId;
      const ToDoExists = await todolistService.getTodolistById(ToDoId);
     if (!ToDoExists) {
        throw new Error("ToDo not found!");
     }
     await todolistService.updateTodolist(ToDoId,reqBody);
        res.status(200).json({
          success: true,
          message: "ToDo update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete ToDo */
const deleteToDo = async (req, res) => {
  try {
    const ToDoId = req.params.ToDoId;
    const ToDoExists = await todolistService.getTodolistById(ToDoId);
    if (!ToDoExists) {
      throw new Error("ToDo not found!");
    }
    await todolistService.deleteTodolist(ToDoId);

    res.status(200).json({
      success: true,
      message: "ToDo delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createToDo,
  getToDoList,
  updateToDo,
  deleteToDo
};