
//Top 500 classical chess players
const TopPlayers = async (req, res, next) => {
  try {
    const response = await fetch("https://lichess.org/api/player/top/500/classical");

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const ChessPlayersData = await response.json();
    console.log(ChessPlayersData)

    res.send(ChessPlayersData) 

  } catch (error) {
    next(error);
  }
}


//Top 500 classical chess players rating history
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


//Top 50 chess(bullet,classical...All) players
const ChessPlayers = async (req, res, next) => {
  const gamename = req.params.gamename;
  try {
    const response = await fetch(`https://lichess.org/api/player/top/50/${gamename}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const ChessPlayersData = await response.json();
  
    res.send(ChessPlayersData) 

  } catch (error) {
    next(error);
  }
}


module.exports = { TopPlayers,PlayersWithRatingHistory,ChessPlayers};
