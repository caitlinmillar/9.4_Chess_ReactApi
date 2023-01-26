import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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
        <BrowserRouter>
        <div className="container">
            <div className="header_bar">
                <h2 className="header">Chess.com </h2>
                <div className="form">
                    <PlayerForm players={players}/>
                </div>
            </div>   
            <ul>
                
                <li>
                    <Link to="/GrandMasters">List of GrandMasters</Link>
                </li>
            </ul> 
            <div className="GM_List">
            <Routes>
                
                    <Route path="/GrandMasters" element={
                    <PlayerList 
                        players={players}/>}
                    />
             
            </Routes>    
            </div>
        </div> 
        </BrowserRouter>
    )
}


export default ChessContainer;