import React, { useState } from "react";

function NewAthlete({ onAddPlayer }) {

    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [jersey, setJersey] = useState("");
    

    function handleSubmit(e) {

      e.preventDefault();
    
      fetch("http://localhost:9292/players", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            position: position,
            jersey: jersey
          }),
      })
      .then((r) => r.json())
      .then((newPlayer) => {
          onAddPlayer(newPlayer);
          setName('');
          setPosition('');
          setJersey('');
      });
    }

    return (

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <input
          type="text"
          name="jersey"
          value={jersey}
          onChange={(e) => setJersey(e.target.value)}
        />
        <button type="submit">Add Player</button>
      </form>

    );
}

export default NewAthlete;