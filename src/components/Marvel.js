import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Marvel() {
  const URL =
    "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=458f93be4a6df21efee622fcd9637889&hash=03a1481a0b726e3d1c16008b571cae3d";
  const [marvel, setMarvel] = useState([]);

  useEffect(() => {
    console.log("hola hola");
    axios
      .get(URL)
      .then((response) => {
        // Obtenemos los datos
        setMarvel(response.data.data.results);
        console.log(response.data.data.results);
      })
      .catch((e) => {
        // Capturamos los errores
        console.log(e);
      });
  }, [URL]);

  return (
    <>
      <div>
        {marvel.map((ma) => (
                <p>{ma.name}</p>
        ))}
      </div>
    </>
  );
}
