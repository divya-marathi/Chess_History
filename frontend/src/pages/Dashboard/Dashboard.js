import React from "react";
import PlayersDetails from "./PlayersDetails";
import GameTypes from "./GameTypes";

const DashBoard = () => {
  return (
    <div>
      <div class="border-bottom-8 p-4 text-center  fs-9 fw-bold">
        <h5>
          {" "}
          Select the Type of Chess Games - To see To 50 Player and Rating History
        </h5>
      </div>
      <GameTypes />
      <div class="border-bottom-8 p-4 mt-3 text-center text-success fs-6 fs-2">
        <h5>PLAYER LIST</h5>
      </div>
      <PlayersDetails />
    </div>
  );
};

export default DashBoard;
