import React from "react";
import Athlete from "./Athlete";

function AthleteList({ players, onPlayerDelete, onUpdatePlayer}) {
  return (
    <div className="list">
      <ul>
        {players.map((player) => (
          <Athlete
            key={player.id}
            player={player}
            onPlayerDelete={onPlayerDelete}
            onUpdatePlayer={onUpdatePlayer}
          />
        ))}
      </ul>
    </div>
  );
}

export default AthleteList;