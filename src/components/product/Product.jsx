import React from "react";
import path from "../assets/Path.svg";
import picture from "../assets/Illustration.png";
import ilustrator from "../assets/Illustration (1).png";
import ilustrator2 from "../assets/Illustration (2).png";
const Product = () => {
  return (
    <div className="bg-[#151719]">
      <div className="container mx-auto">
        <div className="text-center py-3">
          <p className="inline px-2.5 rounded-2xl bg-[#11ff80] text-[#36a268af]">
            Reach goals that matter
          </p>
          <h1>
            <b className="text-white text-3xl">
              One product,unlimited solutions
            </b>
          </h1>
          <p className="text-gray-500 ">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit laborum — semper quis lectus nulla.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <p className="my-2.5 text-[#5D5DFF]">More speed Less spend</p>
            <h2>
              <strong>
                <b className="text-white text-2xl">Keep projects on schedule</b>
              </strong>
            </h2>
            <p className="text-gray-500 mb-5 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="flex gap-2.5 text-gray-500">
              <img src={path} alt="" />
              Duis aute irure dolor in reprehenderit
            </p>
            <p className="flex gap-2.5 text-gray-500 ">
              <img src={path} alt="" />
              Excepteur sint occaecat{" "}
            </p>
            <p className="flex gap-2.5 text-gray-500">
              <img src={path} alt="" />
              Amet consectetur adipiscing elit
            </p>
          </div>
          <div>
            <img src={ilustrator2} className="w-2xs" alt="" />
          </div>

          <div>
            <div>
              <img src={picture} className="w-2xs my-3" alt="" />
            </div>

            <p className="my-2.5 text-[#5D5DFF]">More speed Less spend</p>
            <h2>
              <strong>
                <b className="text-white text-2xl">Keep projects on schedule</b>
              </strong>
            </h2>
            <p className="text-gray-500 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="flex gap-2.5 text-gray-500">
              <img src={path} alt="" />
              Duis aute irure dolor in reprehenderit
            </p>
            <p className="flex gap-2.5 text-gray-500">
              <img src={path} alt="" />
              Excepteur sint occaecat{" "}
            </p>
            <p className="flex gap-2.5 my-3 text-gray-500">
              <img src={path} alt="" />
              Amet consectetur adipiscing elit
            </p>
          </div>

          <div className="my-2.5">
            <p className="text-[#5D5DFF]">More speed Less spend</p>
            <h2>
              <strong>
                <b className="text-white text-2xl">Keep projects on schedule</b>
              </strong>
            </h2>
            <p className="text-gray-500 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="flex gap-2.5 text-gray-500">
              <img src={path} alt="" />
              Duis aute irure dolor in reprehenderit
            </p>
            <p className="flex gap-2.5 text-gray-500">
              <img src={path} alt="" />
              Excepteur sint occaecat{" "}
            </p>
            <p className="flex gap-2.5 text-gray-500">
              <img src={path} alt="" />
              Amet consectetur adipiscing elit
            </p>
            <div>
              <img src={ilustrator} className="w-2xs my-3" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
