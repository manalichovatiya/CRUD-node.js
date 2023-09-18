const { gameService } = require("../services");

/** create Game */
const createGame = async (req, res) => {
  try {
    const reqBody = req.body;
    const Game = await gameService.createGame(reqBody);
    if (!Game) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Game create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get Game list */
const getGameList = async (req, res) => {
  try {
   const getList = await gameService.getGameList();
   res.status(200).json({
      success: true,
      message: "Get Game list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


/** Update Game */
const updateGame = async (req, res) => {
    try {
      const reqBody = req.body;
      const GameId = req.params.buGameId;
      const GameExists = await gameService.getGameById(GameId);
     if (!GameExists) {
        throw new Error("Game not found!");
     }
     await gameService.updateDetails(GameId,reqBody);
        res.status(200).json({
          success: true,
          message: "Game update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete Game */
const deleteGame = async (req, res) => {
  try {
    const GameId = req.params.GameId;
    const GameExists = await gameService.getGameById(GameId);
    if (!GameExists) {
      throw new Error("Game not found!");
    }
    await gameService.deleteGame(GameId);

    res.status(200).json({
      success: true,
      message: "Game delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createGame,
  getGameList,
  updateGame,
  deleteGame
};