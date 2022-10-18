import React, { useState } from "react";

function Edit( { player, name, handleUpdate } ) {

    const [editName, setEditName] = useState(name);

    function handleSubmit(e) {
        e.preventDefault();
    
        fetch(`http://localhost:9292/players/${player.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: editName,
            position: player.position,
            jersey_number: player.jersey_number
          }),
        })
          .then((r) => r.json())
          .then((updatedName) => handleUpdate(updatedName));
      }

    return (
        <form className="edit" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
        />
        <input type="submit" value="✅" />
      </form>
    )
};


export default Edit;