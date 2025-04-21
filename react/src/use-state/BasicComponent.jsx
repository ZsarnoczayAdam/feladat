import { useState } from "react"

export default function BasicComponent() {


    const [characters, setCharacters] = useState([])

    function lekeres() {
        fetch("https://swapi.dev/api/people")
            .then(response => response.json())
            .then(data => setCharacters(data.results));
    }


    return <div>
        <button onClick={lekeres}>SW karakterek lekerese</button>
        {characters.map(elem => <div>{elem.name}</div>)}
    </div>

}