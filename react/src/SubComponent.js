import { useState } from "react";


/*

[
    "Budapest",
    "London",
    "Moszkva"
]

[
    { name: "Budapest", population: 2000000 },
    { name: "London", population: 10000000 },
    { name: "Moszkva", population: 5000000 },
]

*/

export default function SubComponent() {

    const [cities, setCities] = useState([
        { name: "Budapest", population: 1000000 },
        { name: "Moszkva", population: 5000000 }
    ]);
    const [newCityName, setNewCityName] = useState("");
    const [newCityPopulation, setNewCityPopulation] = useState("");

    function changeCityName(e) {
        setNewCityName(e.target.value);
    }

    function changeCityPopulation(e) {
        setNewCityPopulation(e.target.value);
    }

    function addNewCity() {
        // 1. másolás
        const newCities = [...cities];

        // 2. új elem hozzáadás
        const newCity = {
            name: newCityName,
            population: newCityPopulation
        }
        newCities.push(newCity);

        // 3. módosított lista a state-be
        setCities(newCities);
    }

    function deleteCity(city) {
        // 1. másolás
        let newCities = [...cities];

        // 2. másolatból kitöröljük az elemet
        newCities = newCities.filter(element => element.name !== city)

        // 3. módosított listát a state-be
        setCities(newCities);
    }

    /*
        TODO LIST FELADAT (teendők)
        ===========================
        - név
        - csoport
        név: adóbefizetés   csoport: Munka
        név programozni     csoport: Munka
        név: bevásárlás     csoport: Mindennapi feladatok
        ...

        - Csinálj két beviteli mezőt (név, csoportnak) és gombnyomásra
        mentsd ki egy listába a létrejött todo-t.
        - Jelenítsd is meg a listát a képernyőn.
    */

    return <div>
        {cities.map((element) => <h1>{element.name} {element.population}</h1>)}
        <hr />
        <input type="text" placeholder="Name" onChange={changeCityName} />
        <input type="text" placeholder="Population" onChange={changeCityPopulation} />
        <button onClick={addNewCity}>Mentés</button>
    </div>
}


