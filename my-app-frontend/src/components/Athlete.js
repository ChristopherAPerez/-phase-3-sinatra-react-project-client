import React, { useState } from "react";
import Edit from "./Edit";

function Athlete({ player, onPlayerDelete, onUpdatePlayer }){

    const[playersName, setPlayersName] = useState(player.name)

    const [edit, setEdit] = useState(false);

    function handleUpdate(updatedPlayer) {
        setEdit(!edit);
        onUpdatePlayer(updatedPlayer);
      }

    function handleDelete() {
        fetch(`http://localhost:9292/players/${player.id}`, {
          method: "DELETE",
        });
        onPlayerDelete(player.id);
      }

    return(
        <ul>
            {edit ? (
                <Edit
                player={player}
                name={playersName}
                handleUpdate={handleUpdate}
                />
            ) : (
            <p>Name: {player.name} | Position: {player.position} | Jersey: #{player.jersey_number}</p>
            )}
            <button onClick={handleUpdate}>
            ✍️
            </button>
            <button onClick={handleDelete}>
            ❌
            </button>
        </ul>
    );

}

export default Athlete;