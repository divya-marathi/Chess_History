const { ChessPlayerModel } = require("../Models/chessPlayersModel");

//Top 500 classical chess players
const TopPlayers = async (req, res, next) => {
  try {
    const response = await fetch(
      "https://lichess.org/api/player/top/500/classical"
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const ChessPlayersData = await response.json();
    console.log(ChessPlayersData);

    res.send(ChessPlayersData);
  } catch (error) {
    next(error);
  }
}

//Top 500 chess players rating history
const PlayersWithRatingHistory = async (req, res, next) => {
  const username = req.params.username;
  try {
    const response = await fetch(
      `https://lichess.org/api/user/${username}/rating-history`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const ChessPlayersData = await response.json();

    res.send(ChessPlayersData);
  } catch (error) {
    next(error);
  }
}

//Top 50 chess(bullet,classical...Anytpye) players
const ChessPlayers = async (req, res, next) => {
  const gamename = req.params.gamename;
  try {
    const response = await fetch(
      `https://lichess.org/api/player/top/50/${gamename}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const ChessPlayersData = await response.json();

    res.send(ChessPlayersData);
  } catch (error) {
    next(error);
  }
}


//Top 50 classical players with rating hisory
const TopPlayersClassical = async (req, res, next) => {
  try {
    const response = await fetch(
      "https://lichess.org/api/player/top/50/classical"
    )

    const chessPlayersData = await response.json();

    for (const playerData of chessPlayersData.users) {
      try {
        // save multiple players
        const chessPlayer = await ChessPlayerModel.insertMany({
          username: playerData.username,
          ratingHistory: [playerData.perfs?.classical?.rating] || [],
        });
      } catch (error) {
        console.error(`Error saving data for ${playerData.username}:`, error);
      }
    }


    // Extracting username and rating
    const responseData = chessPlayersData.users.map((playerData) => ({
      username: playerData.username,
      ratingHistory: [playerData.perfs?.classical?.rating] || [],
    }));

    return res.status(200).json({
      message: "Data saved to MongoDB",
      fetchedData: responseData,
    });
  } catch (error) {
    console.error("Error fetching or saving data:", error);
    next(error);
  }
};

module.exports = {
  TopPlayers,
  PlayersWithRatingHistory,
  ChessPlayers,
  TopPlayersClassical,
};
