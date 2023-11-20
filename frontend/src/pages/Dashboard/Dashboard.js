import React from "react";
import PlayersDetails from "./PlayersDetails";
import GameTypes from "./GameTypes";

const DashBoard = () => {
  return (
    <>
      <div className="row">
      <div className="col-md-3">
          <div className="border-bottom-8 p-4 text-center flex flex-column align-items-center">
            <h5>Select the Type of Chess Games -<br></br> To see To 50 Player and Rating History</h5>
            <GameTypes />
          </div>
        </div>
        <div className="col-md-9">
          <div className="border-bottom-8 p-4 text-center text-success fs-6 fs-2">
            <h5>PLAYER LIST</h5>
          </div>
          <PlayersDetails />
        </div>
        
      </div>
    </>
  );
};

export default DashBoard;
