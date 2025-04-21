import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// valtozo?   -> változáskor: 1. Felülírja a memóriában az adatot.
// state      -> változáskor: 1. Felülírja a memóriában az adatot. 2. Újrarendereli a képernyőt
function Empty() {

  const [nevek, setNevek] = useState(["Annamari", "Róza", "Peti"]);
  const [ujNev, setUjNev] = useState("");

  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Learn react.
        <br />

        <ul>
          {nevek.map((nev, index) => <li key={"elsofelsorolas"+index}><b>{nev}</b> <button>Törlés</button></li>)}
        </ul>

        <hr />

        <input type="text" name="ujNev" onChange={e => console.log("LOL")} value={ujNev} />
        <button>Hozzáadás</button>

      </header>
    </div>
  );
}

export default Empty;
