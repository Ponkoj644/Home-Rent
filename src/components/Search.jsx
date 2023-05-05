// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";

// import components
import CountryDropdown from "./CountryDropdown";
import PropertyDropdown from "./PropertyDropdown";
import PriceRangeDropdown from "./PriceRangeDropdown";
// import icon
import { RiSearch2Line } from "react-icons/ri";

// import context
import { HouseContext } from "./HouseContext";

const Search = () => {
  const { handleClick } = useContext(HouseContext);
  // console.log(houses);

  return (
    <div className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg">
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button
        onClick={() => handleClick()}
        className="bg-orange-700 hover:bg-orange-800 text-white rounded-lg transition w-full lg:max-w-[160px] h-12 flex justify-center items-center"
      >
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
