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
};

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
};

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
};




// const TopPlayersClassical = async (req, res, next) => {
//   try {
//     const response = await fetch(
//       "https://lichess.org/api/player/top/50/classical"
//     );

//     if (!response.ok) {
//       throw new Error(`Failed to fetch data: ${response.statusText}`);
//     }

//     const ChessPlayersData = await response.json();
//     console.log(ChessPlayersData);

//     res.send(ChessPlayersData);
//   } catch (error) {
//     next(error);
//   }
// };

// const fetchAndStoreRatingHistory = async () => {
//   try {
//     const response = await fetch(
//       "https://lichess.org/api/player/top/50/classical"
//     );

//     if (!response.ok) {
//       throw new Error(`Failed to fetch data: ${response.statusText}`);
//     }

//     const topPlayersData = await response.json();

//     // Iterate through the top players and fetch their rating history
//     for (const player of topPlayersData.users) {
//       const playerResponse = await fetch(
//         `https://lichess.org/api/games/user/${player.username}?max=30`
//       );
//       const playerGames = await playerResponse.json();
//       const ratingHistory = playerGames.map(
//         (game) => game.players.white.rating
//       );

//       // Create or update the MongoDB document
//       await ChessPlayerModel.findOneAndUpdate(
//         { username: player.username },
//         { username: player.username, ratingHistory },
//         { upsert: true, new: true }
//       );

//       console.log(`Rating history for ${player.username} stored successfully.`);
//     }
//   } catch (error) {
//     console.error(`Error fetching or storing rating history: ${error.message}`);
//   }
// };

module.exports = {
  TopPlayers,
  PlayersWithRatingHistory,
  ChessPlayers,
 
};
