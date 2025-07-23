import React from "react";
import picture from "../assets/hero.png";
import play from "../assets/Play.svg";
const Hero = () => {
  return (
    <div className="bg-[#151719]">
      <div className="bg-[#151719] container m-auto">
        <div className="text-center max-w-5xl ">
          <h1 className="font-bold text-white text-2xl">
            Landing template for startups
          </h1>
          <p className="text-gray-500 my-3 mx-28">
            Our landing page template works on all devices, so you only have to
            set it up once, and get beautiful results forever.
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <button className="bg-[#5D5DFF] p-2">Start free trial</button>
          <button className="bg-[#33363A] p-2">Learn more</button>
        </div>
        <div className=" relative">
          <img src={picture} className="container w-[100%] mt-10  " alt="" />
          <img
            src={play}
            className="absolute top-[40%] flex left-[43%]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
