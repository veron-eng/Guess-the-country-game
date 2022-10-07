
const CountryGuessItem = ({country, addGuessedCountry}) => {

    const handleClick = () => {
        addGuessedCountry(country);
    }

    return (
        <>
        <li onClick={handleClick}>{country.name.common}</li>

        </>


    );
}

export default CountryGuessItem;