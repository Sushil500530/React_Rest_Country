import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./countries.css";

export default function Countries() {
  const [countries, setCountries] = useState([]);

  const [visitCountries,setVisiteCountries] = useState([]);

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


  // const countryStyle = {
  //     display:'flex',
  //     flexDirection:'columns',
  //     flexWrap:'wrap',
  //     gap:'15px'
  // }
  return (
    <>
      <h3>Countries: {countries.length}</h3>
      <div>
        <h5>Visited Countries: {visitCountries.length}</h5>
        <ul>
    {
      visitCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
    }
        </ul>
      </div>
      <div className="countries-container">
        {countries.map((country) => (
          <Country key={country.cca3}
          handleVisitedCountry ={handleVisitedCountry}
           country={country}></Country>
        ))}
      </div>
    </>
  );
}
