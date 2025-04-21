import { useState } from "react";

export default function MyComponent() {
    
    // ALLAPOT
    const [ szam, setSzam ] = useState(0);

    // VISELKEDES
    const kivonas2 = () => {
        setSzam(szam - 1);
    }

    const hozzadas = () => {
        setSzam(szam + 1);
    }
    
    // KINEZET - JSX
    return (
        <div>
            <div className="kajsdflfj">
                <button onClick={kivonas2}>-</button>
                { szam }
                <button onClick={hozzadas}>+</button>
            </div>
            
            <div>

            </div>
        </div>
    )
}


















