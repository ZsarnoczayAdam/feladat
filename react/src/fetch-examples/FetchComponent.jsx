import { useState } from "react";

// Létrehozom a FetchComponent nevú komponenst
function FetchComponent() {

    // létrehozok egy új state-t aminek a neve name, kezdőértéke egy üres string
    // és értékének a módosítására a setName nevű függvényt tudom alkalmazni
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    // létrehozok egy függvény ami azt a célt szolgáljah ogy létrehozzak
    // egy új sort az adatbázisban a űrlapra írt adatok alapjan.
    function mentes() {

        // 
        const newApartment = {
            name: name,
            price: parseInt(address),
            onStock: true
        }

        const options = {
            headers: {
                "X-Parse-Application-Id": "9TMJXdyHQkZsF9vjjhZGoviPbRjt7MOmr5XpGB8n",
                "X-Parse-REST-API-Key": "OUsY0o5BkEohEsVficnW6dw4csyexEBVBaztfJzI",
                "Content-Type": "application/json"
            },
            method: "post",
            body: JSON.stringify(newApartment)
        }

        fetch("https://parseapi.back4app.com/classes/Empanada", options)
            .then(response => response.json())
            .then(data => alert("sikeres letrehozas"));
    }

    return <div>
        Nev: <input type="text" onChange={(event) => setName(event.target.value)} value={name} /><br/>
        Ar: <input type="text" onChange={(event) => setAddress(event.target.value)} value={address} /><br/>
        <button onClick={mentes}>Mentes</button>
    </div>
}

export default FetchComponent;