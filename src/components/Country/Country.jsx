
import { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountry}) => {
    const {name, flags, population, capital, area, cca3 } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited=()=>{
        setVisited(!visited);
    }
    
    const passWithParams=()=> handleVisitedCountry(country);


    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Name:{name?.common} </h3>
            <img src={flags.png} />
            <p>Population: {population}</p>
            <p> Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <p>Capital: {capital}</p>
            <button onClick={()=> handleVisitedCountry(country)}> Mark Visited</button>
            <br></br>
            <button onClick={handleVisited}>{visited? 'Visited' : 'Going' }</button>
            {visited? " Country Visited" : "Planing to visit"}
        </div>
    );
};

export default Country;