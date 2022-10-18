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
            jersey_number: jersey
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

      <form className="form" onSubmit={handleSubmit}>
        <p>Name</p>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Position</p>
        <input
          type="text"
          name="position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <p>Jersey #</p>
        <input
          type="text"
          name="jersey"
          value={jersey}
          onChange={(e) => setJersey(e.target.value)}
        />
        <br/>
        <br/>
        <button type="submit">Add Player</button>
      </form>

    );
}

export default NewAthlete;