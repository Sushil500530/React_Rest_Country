import CountryData from "../Country-Data/CountryData"

// function CountryDetails({country,  handleVisitedCountry, handleVisitedFlags}) 
const CountryDetails = (props)=> {
    // const {country,  handleVisitedCountry, handleVisitedFlags} = props
  return (
    <div>
        <h4>Country Details</h4>
        <hr />
        {/* 2-3 ta props hole avabe pathaite pari  */}
        {/* <CountryData
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
        ></CountryData> */}
        {/* r jodi onek(20-21 ta) gulo props hoy tahle avabe pathaite pari  */}
        <CountryData {...props}></CountryData>
    </div>
  )
}

export default CountryDetails