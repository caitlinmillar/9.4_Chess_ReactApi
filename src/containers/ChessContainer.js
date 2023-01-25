import { useEffect, useState } from "react";
import Player from "../components/Player";
import PlayerList from "../components/PlayerList";

const ChessContainer = () => {
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState("")

    useEffect((id) => {
        fetch(`https://api.chess.com/pub/player/caitls712`)
            .then((response) => response.json())
            .then((data) => setPlayers(data))
            .catch((err) => setError(err.message));
    },[])
    
    useEffect(() => {
        fetch(`https://api.chess.com/pub/titled/GM`)
            .then((response) => response.json())
            .then((data) => setPlayers(data))
            .catch((err) => setError(err.message));
    }, [])


    return(
        <>  
            <PlayerList players={players}/>
        </>
    )
}


export default ChessContainer;