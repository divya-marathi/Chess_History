import React from "react";
import PlayersDetails from "./PlayersDetails";
import GameTypes from "./GameTypes";

const DashBoard = () => {
  return (
    <>
    <section className="w-full container-fluid">
      <div className="row p-3">
      <div className="col-md-3">
          <div className="border-bottom-8 p-4 text-center flex flex-column align-items-center ">
            <h6>Select the Type of Chess Games -<br/> To see To 50 Player and Rating History</h6>
            <GameTypes/>
          </div>
        </div>
        <div className="col-md-9">
          <div className="border-bottom-8 p-4 text-center text-success fs-6 fs-2">
            <h5>PLAYER LIST</h5>
          </div>
          <PlayersDetails />
        </div>
        
      </div>
      </section>
    </>
  );
};

export default DashBoard;
