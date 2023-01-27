import Player from "./Player";

const PlayerList = ({ players }) => {

    const playerComponents = players.slice(0,150).map((player, id) => {
    return <span><Player player = {player} key={id} /></span>
    })

    return(
        <>
        {playerComponents}
        </>
    )
}

export default PlayerList;