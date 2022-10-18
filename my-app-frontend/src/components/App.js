import React, { useEffect, useState } from "react";
import Header from "./Header";
import AthleteList from "./AthleteList"
import NewAthlete from "./NewAthlete"

function App() {

    const [players, setPlayers] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/players")
          .then((r) => r.json())
          .then((players) => setPlayers(players));
      }, []);

    function handleAddPlayer(newPlayer) {
        setPlayers([...players, newPlayer]);
    }

    function handleDeletePlayer(id) {
        const updatedList = players.filter((player) => player.id !== id);
        setPlayers(updatedList);
    }

    function handleUpdatePlayer(updatedPlayer) {
        const updatedList = players.map((player) => {
          if (player.id === updatedPlayer.id) {
            return updatedPlayer;
          } else {
            return player;
          }
        });
        setPlayers(updatedList);
    }

    return (
        <main id="main">
            <Header 
            />
            <NewAthlete 
                onAddPlayer={handleAddPlayer}
            />
            <AthleteList  
                players={players}               
                onPlayerDelete={handleDeletePlayer}
                onUpdatePlayer={handleUpdatePlayer}
            />
        </main>
    );

}

export default App;