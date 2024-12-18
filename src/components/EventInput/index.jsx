import { useState } from "react";
const EventInput = () => {
    const [texto, setTexto] = useState("");
    const handleChange = (event) => {
        console.log("ENEMY",event.target.value);
        event.preventDefault();
        setTexto(event.target.value);
    }
    return (
        <div>
            <h1> Change text</h1>
            <input
                type="text"
                placeholder="Write something"
                value={texto}
                onChange={handleChange}
            />

            <p> Register text: {texto}</p>
        </div>
    )
}
export default EventInput;