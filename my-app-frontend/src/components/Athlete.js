import React from "react";

function Athlete({ id, player, onPlayerDelete, onUpdatePlayer }){

    console.log(onPlayerDelete, onUpdatePlayer)

    return(
        <li>
            <p>{id}</p>
            <p>{player.name}</p>
            <p>{player.position}</p>
            <p>{player.jersey}</p>
            <button>
                edit
            </button>
            <button>
                delete
            </button>
        </li>
    );

}

export default Athlete;