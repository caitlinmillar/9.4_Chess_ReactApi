import { useEffect, useState } from "react";
import Player from "../components/Player";

const ChessContainer = () => {
    const [player, setPlayer] = useState([]);
    const [error, setError] = useState("")

    useEffect((id) => {
        fetch(`https://api.chess.com/pub/player/${id}`)
            .then((response) => response.json())
            .then((data) => setPlayer(data))
            .catch((err) => setError(err.message));
        }, [])

    useEffect(() => {
        fetch(`https://api.chess.com/pub/titled/GM`)
            .then((response) => response.json())
            .then((data) => setPlayer(data))
            .catch((err) => setError(err.message));
    }, [])


    return(

    <Player player = {player}/>

    )
}


export default ChessContainer;