// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, createContext } from "react";
// import data
import { housesData } from "../data";

// create context
export const HouseContext = createContext();

// eslint-disable-next-line react/prop-types
const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);

  // change country to division
  const [division, setDivision] = useState("Location (any)");
  const [divisions, setDivisions] = useState([]);

  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);

  const [price, setPrice] = useState("Price range (any)");

  const [loading, setLoading] = useState(false);

  // return all divisions
  useEffect(() => {
    const allDivisions = houses.map((house) => {
      return house.division;
    });

    // Remove Duplcate
    const uniqueDivisions = ["Location (any)", ...new Set(allDivisions)];

    // set divisions state
    setDivisions(uniqueDivisions);
  }, [houses]);

  // return all Properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });

    // Remove Duplcate
    const uniqueProperties = ["Location (any)", ...new Set(allProperties)];

    // set Properties state
    setProperties(uniqueProperties);
  }, [houses]);

  const handleClick = () => {
    // set loading
    setLoading(true);

    // create a function that checks if the srting includes '(any)'

    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };

    // get first value of price and parse it to number
    const minPrice = parseInt(price.split(" ")[0]);
    // set second value of the price which is the maximum price and parse it to number
    const maxPrice = parseInt(price.split(" ")[2]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      // if all values are selected
      if (
        house.division === division &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }

      // if all values are default
      if (isDefault(division) && isDefault(property) && isDefault(price)) {
        return house;
      }

      // if country is not default
      if (!isDefault(division) && isDefault(property) && isDefault(price)) {
        return house.division === division;
      }

      // if property is not default
      if (!isDefault(property) && isDefault(division) && isDefault(price)) {
        return house.type === property;
      }

      // if price is not default
      if (!isDefault(price) && isDefault(division) && isDefault(property)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }

      // if country & property is not default
      if (!isDefault(division) && !isDefault(property) && isDefault(price)) {
        return house.division === division && house.type === property;
      }

      // if country and price is not default
      if (!isDefault(division) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.division === division;
        }
      }

      // if property & price not default
      if (isDefault(division) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
    });

    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      );
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        division,
        setDivision,
        divisions,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        loading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
