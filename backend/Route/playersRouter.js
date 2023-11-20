const express = require("express");
const { TopPlayers,PlayersWithRatingHistory,ChessPlayers } = require("../Controllers/chessPlayerController");
const playersRouter = express.Router();

playersRouter.get("/top-players",TopPlayers);

playersRouter.get("/player/:username/rating-history",PlayersWithRatingHistory)

playersRouter.get("/chess-players/top-players/:gamename", ChessPlayers)

module.exports = { playersRouter };