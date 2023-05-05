// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useContext } from "react";

// import icons
import {
  RiMapPin4Line,
  RiArrowDownSFill,
  RiArrowUpSFill,
} from "react-icons/ri";

// import headless ul
import { Menu } from "@headlessui/react";

// import house context
import { HouseContext } from "./HouseContext";

const CountryDropdown = () => {
  const { division, setDivision, divisions } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiMapPin4Line className="dropdown-icon-primary text-orange-700" />
        <div>
          <div className="text-[15px] font-medium leading-tight">
            {division}
          </div>
          <div className="text-[13px]">Select your place</div>
        </div>
        {isOpen ? (
          <RiArrowUpSFill className="dropdown-icon-secondary text-orange-700 " />
        ) : (
          <RiArrowDownSFill className="dropdown-icon-secondary text-orange-700" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {divisions.map((division, index) => {
          return (
            <Menu.Item
              onClick={() => setDivision(division)}
              className="cursore-pointer hover:text-orange-700 transition"
              as="li"
              key={index}
            >
              {division}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default CountryDropdown;
