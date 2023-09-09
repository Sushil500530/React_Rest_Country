import { useState } from "react";
import "./country.css";
function Country({ country }) {
  const { name, flags, area, region, population,cca3} = country;
  console.log(country);

  const [visited,setVisited] =useState(false);

  const handleVisited = ()=>{
    setVisited(!visited);
  }

  return (
    <div className="country">
      <img src={flags.png} alt="" />
      <h3>Name: {name.common}</h3>
      <p>Area: {area} sqr/m</p>
      <p>Region: {region} </p>
      <p>Population: {population}</p>
      <p>Code: {cca3}</p>
      <button onClick={handleVisited}>{visited ?'Visited' : 'Going'}</button>

      {visited ? 'I have visited this country!' : 'i want to visit!'}

    </div>
  );
}

export default Country;
