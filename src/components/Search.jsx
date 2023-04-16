import React, { useState, useContext } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { myContextApi } from "../StateManagement";

import { AsyncPaginate } from "react-select-async-paginate";

const Search = ({ onSearchChange }) => {
  const { setLongitude, setLatitude, cityName, setCityName } =
    useContext(myContextApi);
  const [search, setSearch] = useState(null);

  const geoOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5e3037cc9amsha2a12b21aae7181p16d9bajsn7173051fbda5",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };

  const loadOptions = (inputValue) => {
    return fetch(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${inputValue}`,
      geoOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response?.data?.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name} ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  console.log(cityName);

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      backgroundColor: "#BDC3C7",
      borderRadius: "4px",
      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
      padding: "8px",
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "#fff" : "#333",
      backgroundColor: state.isSelected ? "#007bff" : "#fff",
      cursor: "pointer",
    }),
  };
  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
      styles={customStyles}
      
    />
  );
};

export default Search;
