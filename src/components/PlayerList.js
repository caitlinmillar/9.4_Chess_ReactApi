import Player from "./Player";

const PlayerList = ({ players }) => {

    const playerComponents = players.map((player, id) => {
    return <Player player = {player} key={id} />
    })

    return(
        <>
        <h2>Chess.com </h2>
        <hr />
        {playerComponents}
        
        </>
    )
}

export default PlayerList;