const express = require("express");
const { gameValidation } = require("../validations");
const { gameController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Game */
router.post(
  "/create-Game",
  validate(gameValidation.createGameList),
  gameController.createGame
);

/** Get Game list */
router.get(
  "/Game-list",
  gameController.getGameList
);

/** Delete Game */
router.delete(
  "/delete-Game/:GameId",
  gameController.deleteGame
);

/** Update Game */
router.put(
  "/update-Game/:GameId",
  validate(gameValidation.createGameList),
  gameController.updateGame
);

module.exports = router;
