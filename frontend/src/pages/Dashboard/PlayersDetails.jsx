import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const PlayersDetails = () => {
  const player = useSelector((s) => s);
  const baseurl = "http://localhost:5000/chess-players/top-players";
  const [players, setPlayer] = useState([]);

  useEffect(() => {
    submitHandler();
  }, [player]);

  const submitHandler = async () => {
    await axios.get(`${baseurl}/${player}`).then((res) => {
      setPlayer(res.data.users);
    });
  };

  return (
    <>
    <div className="container col-md-9 table-responsive bg-warning">
      <table className="table shadow table-striped">
        <thead>
          <tr>
            <th >Name</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {players.map((item) => (
            <tr key={item.id}>
              <td className="border boerder-dark">{item.id}</td>
              <td>{item.perfs[player]?.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default PlayersDetails;
