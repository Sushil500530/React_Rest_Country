import { useState } from "react";
import "./country.css";
function Country({ country, handleVisitedCountry,handleVisitedFlags}) {
  const { name, flags, area, region, population,cca3} = country;
  // console.log(country);

  const [visited,setVisited] =useState(false);

  const handleVisited = ()=>{
    setVisited(!visited);
  }

// const passWithParams =()=>handleVisitedCountry(country)


  return (
    <div className={`country ${visited ? 'visited':'non-visited'}`}>
      <img src={flags.png} alt="" />
      <h3 style={{color: visited ? 'white' : 'black'}}>Name: {name.common}</h3>
      <p>Area: {area} sqr/m</p>
      <p>Region: {region} </p>
      <p>Population: {population}</p>
      <p>Code: {cca3}</p>
      <button onClick={()=>handleVisitedCountry(country)}>Mark Visted</button>
      <br />
      <br />
    <button onClick={()=> handleVisitedFlags(country.flags.png)}>Add VisitedFlags</button>
    <br />
    <br />
      <button onClick={handleVisited}>{visited ?'Visited' : 'Going'}</button>

      {visited ? 'I have visited this country!' : 'i want to visit!'}

    </div>
  );
}

export default Country;
