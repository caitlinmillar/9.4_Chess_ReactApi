import { useState } from "react"

const PlayerForm = ({players, postPlayer}) => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const postBody = {
            name,
            username,
            password
        }
        postPlayer(postBody);
        setName("");
        setUsername("")
        setPassword("")
    }

    return(
        <form onSubmit={handleFormSubmit}>
            <h3>Create an account: </h3>
            <input 
                type="text"
                placeholder="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />

            <input 
                type="text"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />

            <input 
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />

            <button type="submit">Go</button>
        </form>
    )
}
export default PlayerForm;