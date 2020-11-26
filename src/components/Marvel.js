import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Marvel.css";

export default function Marvel() {
  const URL = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=458f93be4a6df21efee622fcd9637889&hash=03a1481a0b726e3d1c16008b571cae3d";
  const [marvel, setMarvel] = useState([]);

  useEffect(() => {
    console.log("hola");
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
      <section className="section-as__card">
          <h1 className="text-align">Personajes de Marvel</h1>
        <div className="container-as__card bd-grid-as__card">
          {marvel.map((ma) => (
           <div className="body-as__card">
           <div className="image-card-container">
             <img src={ma.thumbnail.path+"."+ma.thumbnail.extension} alt="j" className="img-as-card-three"/>
           </div>
           <h3 className="subtittle-as__card">{ma.name}</h3>
           <div className="subtittle-image-as__card">
             <p className="p-card-font text-align">
             {ma.description}
             </p>
           </div>
         </div>
          ))}
        </div>
      </section>
    </>
  );
}
