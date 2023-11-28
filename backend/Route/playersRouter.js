const express = require("express")
const { TopPlayers,PlayersWithRatingHistory,ChessPlayers,TopPlayersClassical } = require("../Controllers/chessPlayerController");
const playersRouter = express.Router()

//Top 500 classical chess players
playersRouter.get("/top-players",TopPlayers)

//Top 500 chess players rating history
playersRouter.get("/player/:username/rating-history",PlayersWithRatingHistory)

//Top 50 chess(bullet,classical...Anytpye) players
playersRouter.get("/chess-players/top-players/:gamename", ChessPlayers)


playersRouter.get("/top-50-players-classical",TopPlayersClassical)

// playersRouter.get("/players/rating-history-csv", GetCSV)

module.exports = { playersRouter }