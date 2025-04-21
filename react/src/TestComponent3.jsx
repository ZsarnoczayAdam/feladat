import { useEffect, useState } from "react";

const TestComponent3 = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people")     
      .then((response) => response.json())
      .then((body) => {
        setCharacters(body.results);
      })
    
    /*
      Promise: {
        json: () => Promise: {
          results: [...]
        }
      }

    */
  }, []);


  return <>
    {characters.map((character, index) => <div key={"character" + index}>{character.name}</div>)}
  </>
}

export default TestComponent3;