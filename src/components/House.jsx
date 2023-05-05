// eslint-disable-next-line no-unused-vars
import React from "react";

// import icons
import { BiBed, BiBath, BiArea } from "react-icons/bi";

// eslint-disable-next-line react/prop-types
const House = ({ house }) => {
  const {
    // eslint-disable-next-line react/prop-types
    image,
    // eslint-disable-next-line react/prop-types
    type,
    // eslint-disable-next-line react/prop-types
    division,
    // eslint-disable-next-line react/prop-types
    address,
    // eslint-disable-next-line react/prop-types
    bedrooms,
    // eslint-disable-next-line react/prop-types
    bathrooms,
    // eslint-disable-next-line react/prop-types
    surface,
    // eslint-disable-next-line react/prop-types
    price,
  } = house;

  return (
    <div className=" bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
      <img className="mb-8 rounded-tl-[90px] rounded-lg" src={image} alt="" />
      <div className="mb-4 flex gap-x-2 text-sm">
        <div className=" bg-green-500 rounded-full text-white px-3">{type}</div>
        <div className=" bg-orange-500 rounded-full text-white px-3">
          {division}
        </div>
      </div>
      <div className="text-lg font-semibold max-w-[260px]">{address}</div>

      <div className="flex gap-x-4 my-4 ">
        <div className=" flex items-center text-gray-600 gap-1">
          <div className="text-[20px]">
            <BiBed />
          </div>
          <div>{bedrooms}</div>
        </div>

        <div className=" flex items-center text-gray-600 gap-1">
          <div className="text-[20px]">
            <BiBath />
          </div>
          <div>{bathrooms}</div>
        </div>

        <div className=" flex items-center text-gray-600 gap-1">
          <div className="text-[20px]">
            <BiArea />
          </div>
          <div>{surface}</div>
        </div>
      </div>
      <div className=" text-lg font-semibold text-orange-600 mb-4">
        $ {price}
      </div>
    </div>
  );
};

export default House;
