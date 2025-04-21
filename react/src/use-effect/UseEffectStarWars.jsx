import { useEffect, useState } from "react";
import { Link, resolvePath } from "react-router-dom";

function UseEffectStarWars() {

    const [characters, setCharacters] = useState({});

    function sayHello() {
      fetch("https://swapi.dev/api/people")
        .then(response => response.json())
        .then(data => setCharacters(data));
    }

    useEffect(sayHello, []);

    return <div>
      <h1>Összes karakter: {characters.count}</h1>
      {characters.results?.map(character => <div>{character.name}</div>)}
    </div>
}

export default UseEffectStarWars;