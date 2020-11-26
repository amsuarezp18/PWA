import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function Marvel() {

    const date = new Date().getDate();
    const URL = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=458f93be4a6df21efee622fcd9637889&hash=03a1481a0b726e3d1c16008b571cae3d"
    const [marvel, setMarvel] = useState(null);

    //1762a0e003e0621e01b90db2b27b993d239524bef26bdf206ab28f36658977077b4da0dad

    useEffect(() => {
        console.log("hola hola")
        axios
          .get(URL)
          .then((response) => {
            // Obtenemos los datos
            console.log(response);
          })
          .catch((e) => {
            // Capturamos los errores
            console.log(e);
          });
      }, [URL]);

    return (
        <>
            <div>
                <h1>Hola</h1>
                <div id="marvel">

                </div>
            </div>
        </>
    )
}
