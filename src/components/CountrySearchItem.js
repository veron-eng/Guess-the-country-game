const CountrySearchItem = ({country, addGuessedCountry,hidden}) => {

    const handleClick = async() => {
        addGuessedCountry(country);
        if (country.name.common === await hidden.name.common) {
            alert("You've guessed correctly!");
        }
        console.log(country.name.common)

        console.log(hidden.name.common)
        
    }

    return (
        <>
        <li onClick={handleClick}>{country.name.common}</li>

        </>


    );
}

export default CountrySearchItem;