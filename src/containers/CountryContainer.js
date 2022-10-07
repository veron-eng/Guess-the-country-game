import CountryGuesses from "../components/CountryGuesses";


import { useState, useEffect } from "react";
import CountriesSearch from "../components/CountriesSearch";
import CountrySearchItem from "../components/CountrySearchItem";
import CountryInformation from "../components/CountryInformation";

const CountryContainer = () =>{

    const [countries,setCountries] = useState([]);
    const [guessedCountries, setGuessedCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [hidden, setHidden] = useState([]);
    const [count, setCount] = useState(null)
   


    const fetchCountries = async () => {

        const response = await fetch("https://restcountries.com/v3.1/all")
        const jsonCountries = await response.json();

        setCountries(jsonCountries);
        hiddenCountry(jsonCountries)
    }

    useEffect(() => {
        fetchCountries();
        // using use effect so thsi loads in when the app loads in,
        // second array stays empty, so this only loads in whe the app only first loads in 
    },[])

    const addGuessedCountry = (country) => {
        if(country === hidden.name.common) {
            alert("You've already guessed this country incorrectly!");
        }
        else if(guessedCountries.includes(country)){
            alert("You've already guessed this country incorrectly!");
        } else {
            setGuessedCountries([...guessedCountries, country])
        }
    }

    const checkWin = () => {
        guessedCountries.forEach(country => {
            if(country === hidden.name.common) {
                alert("You've already guessed this country incorrectly!");
            }
        });
    }

    const hiddenCountry = (countries) => {
        let len = countries.length;
        setHidden(countries[Math.floor(Math.random() * len)]);
    }

    const selectCountry = (country) => {

        setSelectedCountry(country);
        
    }
    

    return (
        <>
       
        <p>
            guess the country!
            every time you answer wrong, you will get a clue
            maximum number of points availble is 6 
            you get 5 tries to get the answer right 
            good luck !
        </p>

        <div id="main-container">
            {countries.length === 0 ? <p>loading</p>: 
            <CountriesSearch countries={countries} addGuessedCountry={addGuessedCountry} hidden={hidden}/>}

        
            <CountryInformation
                   
                hidden = {hidden}
                addGuessedCountry={addGuessedCountry}
                    
            /> 
            
            <CountryGuesses
                guessedCountries={guessedCountries}
                selectCountry={selectCountry}
                hidden = {hidden}
                checkWin ={checkWin}
                addGuessedCountry={addGuessedCountry}
            />
        </div>


        

        
        </>
    )
}
export default CountryContainer;