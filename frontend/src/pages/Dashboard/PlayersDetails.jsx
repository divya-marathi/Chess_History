import React, { useEffect, useState } from "react"
import axios from "axios"
import { useSelector } from "react-redux"

const PlayersDetails = () => {
  const playerType = useSelector((state) => state)
  const url = "http://localhost:5000/chess-players/top-players"
  const [players, setPlayers] = useState([])

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get(`${url}/${playerType}`)
        setPlayers(response.data.users)
      } catch (error) {
        console.error("Error fetching players:", error)
      }
    }

    fetchPlayers()
  }, [playerType])

  return (
    <div className="container  table-responsive bg-warning">
      <table className="table shadow table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {players.map((item) => (
            <tr key={item.id}>
              <td className="border border-success">{item.id}</td>
              <td  className="border border-success">{item.perfs[playerType]?.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PlayersDetails
