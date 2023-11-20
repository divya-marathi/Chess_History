import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Details } from "../../Redux/Actions";

function GameTypes() {
  const dispatch = useDispatch();
  const GameTypes = [
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
  const [currentPerfType, setCurrentPerfType] = useState(GameTypes[0]);

  useEffect(() => {
    dispatch(Details(currentPerfType));
  }, [currentPerfType]);

  const styles = {
    container: {
      maxHeight: '200px',
      overflowY: 'scroll',
    },
    button: {
      base: "btn px-2 text-uppercase font-weight-bold text-white shadow py-1",
      success: "bg-success",
      info: "bg-dark",
    },
  };

  return (
    <>
      <div style={styles.container} className="container d-flex flex-row justify-content-center align-items-center gap-4 overflow-auto">
        {GameTypes.map((item) => (
          <button
            key={item}
            onClick={() => setCurrentPerfType(item)}
            className={`${styles.button.base} ${item === currentPerfType ? styles.button.success : styles.button.info}`}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
}

export default GameTypes;
