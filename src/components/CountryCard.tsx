import React from "react";
import { Country } from "../types/country";
import "./CountryCard.css";

interface CountryCardProps {
  country: Country;
  handleSelectCountry: (country: Country) => void;
}

const CountryCard: React.FC<CountryCardProps> = ({
  country,
  handleSelectCountry,
}) => {
  return (
    <div className="country-card" onClick={() => handleSelectCountry(country)}>
      <img
        src={country.flags.svg}
        alt={`${country.name.common} flag`}
        className="country-flag"
      />
      <h3>{country.name.common}</h3>
      <p>{country.capital ? country.capital[0] : "No capital"}</p>
    </div>
  );
};

export default CountryCard;
