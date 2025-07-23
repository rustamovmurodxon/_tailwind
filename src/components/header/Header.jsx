// import React from 'react'
import logo from "../assets/Logo.svg";
const Header = () => {
  return (
    <div className="bg-[#151719]">
      <div className="container mx-auto flex justify-between">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex gap-5 items-center">
          <p className="text-blue-700 ">
            <a href="#" target="_blank">
              Sign in
            </a>
          </p>
          <button className="text-white bg-blue-600 b rounded-[2px] p-0.5 m-1">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
