// eslint-disable-next-line no-unused-vars
import React from "react";

// import link
import { Link } from "react-router-dom";

// import logo
import Logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <header className="py-5 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center ">
        {/* logo */}
        <Link to="/">
          <img className=" sm: max-w-[200px]" src={Logo} alt="" />
        </Link>

        {/* Buttons */}
        <div className="flex items-center gap-6">
          <Link className="hover:text-orange-900" to="">
            Log in
          </Link>
          <Link
            className="bg-orange-700 hover:bg-orange-800 text-white px-4 py-3 sm rounded-lg transition ease-in duration-200 "
            to=""
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
