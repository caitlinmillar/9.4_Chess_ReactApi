import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Player from "../components/Player";
import PlayerList from "../components/PlayerList";
import PlayerForm from "../components/PlayerForm";
import Search from "../components/Search";



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
        // const getGMs = async () => {
        //     const response = await fetch(`https://api.chess.com/pub/titled/GM`)
        //     const data = await response.json();
        //     setGm(data.gm);
        // }
        // getGMs()
            fetch(`https://api.chess.com/pub/titled/GM`)
                .then((response) => response.json())
                .then((data) => setPlayers(data.players))
                .catch((err) => setError(err.message));
    }, [])

    const [im, setIm] = useState([])
    useEffect(() => {
        fetch(`https://api.chess.com/pub/titled/IM`)
            .then((response) => response.json())
            .then((data) => setIm(data.im))
            .catch((err) => setError(err.message));
    }, [])


    return(
        <BrowserRouter>
        <div className="navBar">
        <div className="search"><Search /></div>
                <Link to="/International-masters"> International Masters</Link>
                <Link to="/Grand-masters"> Grand Masters</Link>
            </div> 
            
            
        <div className="container">
            <div className="header_bar">
                <h2 className="header">Chess.com </h2>
                <div className="form">
                    <PlayerForm players={players}/>
                </div>
            </div>  
            
            <div className="GM_List">
            <Routes>
                    {/* <Route path="/International-masters" element={
                    <PlayerList 
                        im={im}
                        players={players}/>}/> */}
                
                    <Route path="/Grand-masters" element={
                    <PlayerList 
                        players={players}
                        />}/>
             
            </Routes>    
            </div>
            <hr/>
            <div className="mainPage">
                <img />
            </div>
        </div> 
        </BrowserRouter>
    )
}


export default ChessContainer;