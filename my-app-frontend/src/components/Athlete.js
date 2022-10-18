import React, { useState } from "react";
import Edit from "./Edit";

function Athlete({ player, onPlayerDelete, onUpdatePlayer }){

    const [edit, setEdit] = useState(false);
    
    // console.log(onPlayerDelete, onUpdatePlayer)

    function handleUpdate(updatedPlayer) {
        setEdit(false);
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
            <p>{player.name}</p>
            <p>{player.position}</p>
            <p>{player.jersey}</p>
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