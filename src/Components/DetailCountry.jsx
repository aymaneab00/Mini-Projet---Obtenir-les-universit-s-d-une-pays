import React from "react";

export default function DetailCountry({country}) {
  return (
    <div>
     
        <div>
        <img src={country[0]?.flags.png} alt={country[0]?.name.common} /> 
          <div>
            <h1>Official name : {country[0].name.common}</h1>
          </div>
        </div>
   
    </div>
  );
}
