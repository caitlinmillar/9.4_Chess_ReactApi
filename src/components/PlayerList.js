import Player from "./Player";

const PlayerList = ({ players }) => {

    const playerComponents = players.map((player, id) => {
    return <li><Player player = {player} key={id} /></li>
    })

    return(
        <>
        <hr />
        <h3> List of Grand Masters </h3>
        <ul>
        {playerComponents}
        </ul>
        </>
    )
}

export default PlayerList;