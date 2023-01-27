import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Player from "../components/Player";
import PlayerList from "../components/PlayerList";
import PlayerForm from "../components/PlayerForm";
import Search from "../components/Search";

const ChessContainer = () => {
    const [players, setPlayers] = useState([]);
    const [name, setName] = useState([]);
    const [error, setError] = useState("");
    const [im, setIm] = useState([])
    const [gm, setGm] = useState([]);
    const [wgm, setWgm] = useState([]);


    // useEffect(() => {
    //     fetch(`https://api.chess.com/pub/player/caitls712/stats`)
    //         .then((response) => response.json())
    //         .then((data) => setName(data.players))
    //         .catch((err) => setError(err.message));
    //     },
    // [])
    
    useEffect(() => {
            fetch(`https://api.chess.com/pub/titled/GM`)
                .then((response) => response.json())
                .then((data) => setGm(data.players))
                .catch((err) => setError(err.message));
    }, [])

    useEffect(() => {
        fetch(`https://api.chess.com/pub/titled/IM`)
            .then((response) => response.json())
            .then((data) => setIm(data.players))
            .catch((err) => setError(err.message));
    }, [])

    useEffect(() => {
        fetch(`https://api.chess.com/pub/titled/WGM`)
            .then((response) => response.json())
            .then((data) => setWgm(data.players))
            .catch((err) => setError(err.message));
    }, [])


    return(
        <BrowserRouter>
        <div className="navBar">
        <div className="search"><Search /></div>
                <Link to="/International-masters"> International Masters</Link>
                <Link to="/Grand-masters"> Grand Masters</Link>
                <Link to="/Woman-grand-masters"> Woman Grand Masters</Link>
                {/* <button className="myStats">
                <Link to="/player/caitls712/stats"> Caitlin</Link></button> */}
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
                    <Route path="/International-masters" element={
                    <PlayerList 
                        players={im}
                        />}/>
                
                    <Route path="/Grand-masters" element={
                    <PlayerList 
                        players={gm}
                        />}/>
                    
                    <Route path="/Woman-grand-masters" element={
                    <PlayerList 
                        players={wgm}
                        />}/>

                    {/* <Route path="/player/caitls712/stats" element={
                    <PlayerList 
                        players={name}
                        />}/> */}
            </Routes>
            </div>
            <div className="mainPage">
            </div>
        </div> 
        </BrowserRouter>
    )
}


export default ChessContainer;