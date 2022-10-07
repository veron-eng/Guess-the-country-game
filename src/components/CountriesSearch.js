import { Input, Card } from "antd";
import { useState } from "react";
import CountrySearchItem from "./CountrySearchItem";

import '../App.css';
import CountryGuesses from "./CountryGuesses";





const CountriesSearch = ({countries, selectCountry,addGuessedCountry,hidden}) => {

    const [guess,setGuessCountry] = useState("");

    const [search, setSearch] = useState("");
    const [filteredCountries, setFilteredCountries] = useState(countries)



    const countryListItems = filteredCountries.map((country) =>{
    // mapps throught the countries, and selects each of the individual countries and returns 
    // the country name
    // this method is then called bellow in the return
    return(
        <CountrySearchItem 
                    country={country} 
                    selectCountry={selectCountry}
                    addGuessedCountry={addGuessedCountry}
                    hidden={hidden}

                />
    )})

    const handleSearch = (e) =>{
        setSearch(e.target.value)
        if (e.target.value !== "") {
            setFilteredCountries(countries.filter((country) => (country.name.common.toLowerCase().includes(e.target.value))))
        } 
        else {
            setFilteredCountries(countries)
        }
    }



    
    return (
        <div>
            <input type="text" value={search} onChange={handleSearch}/>
            
        {countryListItems}

        </div>
    )
}
export default CountriesSearch;