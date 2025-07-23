import React from "react";
import logo from "../assets/Logo.svg";
import one from "../assets/1.svg";
import second from "../assets/2.svg";
import thirth from "../assets/3.svg";
import four from "../assets/4.svg";
import end from "../assets/5.svg";
const Footer = () => {
  return (
    <div className="bg-[#151719]">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 text-gray-500">
          <div className="card">
            <img src={logo} alt="" />
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
          </div>
          <div>
            <ul>
              <li className="text-white">Products</li>
              <li>Web Studio</li>
              <li>DynamicBox Flex</li>
              <li>Programming Forms</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="text-white">Resources</li>
              <li>Nostrud exercitation</li>
              <li>Visual mockups</li>
              <li>Nostrud exercitation</li>
              <li>Visual mockups</li>
              <li>Nostrud exercitation</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="text-white">Company</li>
              <li>Consectetur adipiscing</li>
              <li>Labore et dolore</li>
              <li>Consectetur adipiscing</li>
              <li>Labore et dolore</li>
              <li>Consectetur adipiscing</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <p className="text-gray-500">
            Made by <span className="text-white">Cruip</span> .All right
            reserved
          </p>
          <div className="flex gap-3">
            <img src={one} alt="" />
            <img src={second} alt="" />
            <img src={thirth} alt="" />
            <img src={four} alt="" />
            <img src={end} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
