import Player from "./Player";

const PlayerList = ({ players }) => {

    const playerComponents = players.slice(0,150).map((player, id) => {
    return <li><span><Player player = {player} key={id} /></span></li>
    })

    return(
        <>
        <hr />
        <h3> List of Grand Masters </h3>
        <ul>
        {playerComponents}
        </ul>
        <h3> List of International Masters </h3>
        <ul>
        {playerComponents}
        </ul>
        </>
    )
}

export default PlayerList;