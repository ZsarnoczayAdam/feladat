import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";


function Empanadas() {
    const [empanadas, setEmpanadas] = useState([]);

    function empanadaLeker() {

        const options = {
            method: "GET",
            headers: {
                "X-Parse-Application-Id": "9TMJXdyHQkZsF9vjjhZGoviPbRjt7MOmr5XpGB8n",
                "X-Parse-REST-API-Key": "OUsY0o5BkEohEsVficnW6dw4csyexEBVBaztfJzI"
            }
        }

        fetch("https://parseapi.back4app.com/classes/Empanada", options)
            .then(response => response.json())
            .then(parsed => setEmpanadas(parsed.results))
    }

    useEffect(empanadaLeker, []);

    return <div>
        {
            empanadas.map(empanada => <div>{empanada.name}</div>)
        }
    </div>
}

export default Empanadas;