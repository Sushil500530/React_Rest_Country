import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./countries.css";

export default function Countries() {
  const [countries, setCountries] = useState([]);

  const [visitCountries,setVisiteCountries] = useState([]);
  const [visitedFlags,setVisitedFlags] = useState([])
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

 const handleVisitedCountry =(country) =>{
    console.log('add this to you country')
    const newVisitedCountries = [...visitCountries,country]
    setVisiteCountries(newVisitedCountries)
  // console.log(country)
 }

const handleVisitedFlags=(flag)=>{
  // console.log('flag adding!')
  const newVisitedFlags = [...visitedFlags, flag] ;
  setVisitedFlags(newVisitedFlags)
}
  // const countryStyle = {
  //     display:'flex',
  //     flexDirection:'columns',
  //     flexWrap:'wrap',
  //     gap:'15px'
  // }

/*   (remove korar jonno ja ja korte hobe)-----
   1. remove item from an array in a state 
   2. use filter to select all the elements except the one you want to remove
*/


  return (
    <>
      <h3>Countries: {countries.length}</h3>
      {/* visisted country */}
      <div>
        <h5>Visited Countries: {visitCountries.length}</h5>
        <ul>
    {
      visitCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
    }
        </ul>
      </div>
      <div className="flag-container">
          {
            visitedFlags.map((flag,inx) => <img key={inx} src={flag}></img>)
          }
      </div>
      {/* display countries */}
      <div className="countries-container">
        {countries.map((country) => (
          <Country key={country.cca3}
          handleVisitedCountry ={handleVisitedCountry}
          handleVisitedFlags = {handleVisitedFlags}
           country={country}></Country>
        ))}
      </div>
    </>
  );
}
