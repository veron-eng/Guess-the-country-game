

import CountrySearchItem from "./CountrySearchItem";

const CountryGuesses = ({guessedCountries, selectCountry}) => {

    const guessedCountryListItems = guessedCountries.map((country) => {

        return (
            <CountrySearchItem 
                country={country}   
                selectCountry={selectCountry}
        />
    )

    })


    // const handleClick = () => {
    //     addGuessedCountry(selectedCountry)
    // }

    // <button onClick={handleClick}>Add to guessed!</button>

    return(
        <ul>
            {guessedCountryListItems}
        </ul>
    );
}

export default CountryGuesses;