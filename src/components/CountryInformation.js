

const CountryInformation = ({addGuessedCountry, hidden}) => {


    
    return(
        <div id="country-information">
            <h2>Clues</h2>
            <ul>
                <li>Clue 1 = Area: {hidden.population} km<sup>2</sup></li>
                <li>Clue 2 = Total population: {hidden.population}</li>
                <li>Clue 3 = Continent: {hidden.continents}</li>
                <li>Clue 4 = Flag: {hidden.flag}</li>
                <li>Clue 5 = Capital: {hidden.capital}</li>

                

            </ul>
            
        </div>
    )
}

export default CountryInformation;