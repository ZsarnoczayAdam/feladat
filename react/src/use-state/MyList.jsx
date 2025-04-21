import { useState } from "react";

export default function MyList() {
    
    // ALLAPOT
    const [ animals, setAnimals ] = useState([
        { type: "Kutya", age: 6},
        { type: "Macska", age: 2},
        { type: "Denever", age: 1},
    ]);

   function filtering() {
    setAnimals(animals.filter(animal => animal.age > 1));
   }
    
    // KINEZET - JSX
    return (
        <div>
            <div className="kajsdflfj">
                { animals.map(animal => <div>{animal.type} ({animal.age}) </div>) }
                <button onClick={filtering}>Szurd</button>
            </div>
            
            <div>

            </div>
        </div>
    )
}

