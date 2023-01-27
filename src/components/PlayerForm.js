import { useState } from "react"
import { useNavigate } from "react-router-dom";

const PlayerForm = ({players}) => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const postBody = {
            name,
            username,
            password
        }

        setName("");
        setUsername("")
        setPassword("")
    }

    return(
        <div className="inputs">
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

            <button class="shadow__btn" type="submit"><span>Go</span></button>
        </form>
        </div>
    )
}
export default PlayerForm;