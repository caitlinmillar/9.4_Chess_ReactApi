import { useEffect, useState } from "react";
import Player from "../components/Player";
import PlayerList from "../components/PlayerList";
import PlayerForm from "../components/PlayerForm";



const ChessContainer = () => {
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState("");


    // const loadPlayers = () => {
    //     fetch("https://api.chess.com/pub/titled/GM")
    //     .then(response => response.json())
    //     .then(data => setPlayers(data));
    // }

    // useEffect(() => {
    //     fetch(`https://api.chess.com/pub/player/caitls712`)
    //         .then((response) => response.json())
    //         .then((data) => setPlayers(data.players.name))
    //         .catch((err) => setError(err.message));
    //     },
    // [])

    
    
    useEffect(() => {
        fetch(`https://api.chess.com/pub/titled/GM`)
            .then((response) => response.json())
            .then((data) => setPlayers(data.players))
            .catch((err) => setError(err.message));
    }, [])


    return(
        <>
            <h2 className="header">Chess.com </h2>
            <div className="form">
                <PlayerForm players={players}/>
            </div>
            <div className="GM_List">
                <PlayerList players={players}/>
            </div>
       
        </>    
    )
}


export default ChessContainer;