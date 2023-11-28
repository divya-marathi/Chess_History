import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Details } from "../../Redux/Actions";
import './GameTypes.css';


function GameTypes() {
  const dispatch = useDispatch();
  const gameTypes = [
    "ultraBullet",
    "bullet",
    "blitz",
    "rapid",
    "classical",
    "chess960",
    "crazyhouse",
    "antichess",
    "atomic",
    "horde",
    "kingOfTheHill",
    "racingKings",
    "threeCheck",
  ];
  const [currentPerfType, setCurrentPerfType] = useState(gameTypes[""]);

  useEffect(() => {
    dispatch(Details(currentPerfType));
  }, [currentPerfType]);

  return (
    <div className="d-flex  justify-content-center align-items-center text-start gap-4 overflow-auto" style={{ width: "100%", maxHeight: "80vh" }}>
      {gameTypes.map((item) => (
        <button
          key={item}
          onClick={() => setCurrentPerfType(item)}
          className={`btn px-2 text-uppercase font-weight-bold text-white shadow py-1 ${item === currentPerfType ? 'bg-success' : 'bg-dark'}`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default GameTypes;
