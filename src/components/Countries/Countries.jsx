import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./countries.css";

export default function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  // const countryStyle = {
  //     display:'flex',
  //     flexDirection:'columns',
  //     flexWrap:'wrap',
  //     gap:'15px'
  // }
  return (
    <>
      <h3>Countries: {countries.length}</h3>
      <div className="countries-container">
        {countries.map((country) => (
          <Country key={country.cca3} country={country}></Country>
        ))}
      </div>
    </>
  );
}
