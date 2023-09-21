const express = require("express");
const { todolistValidation } = require("../validations");
const { todolistController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Todo */
router.post(
  "/create-Todo",
  validate(todolistValidation.createToDoList),
  todolistController.createToDo
);

/** Get Todo list */
router.get(
  "/Todo-list",
  todolistController.getToDoList
);

/** Delete Todo */
router.delete(
  "/delete-Todo/:TodoId",
  todolistController.deleteToDo
);

/** Update Todo */
router.put(
  "/update-Todo/:TodoId",
  validate(todolistValidation.createToDoList),
  todolistController.updateToDo
);

module.exports = router;
