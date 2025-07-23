import React from "react";

const Stay = () => {
  return (
    <div className="bg-[#151719] py-5">
      <div className="container mx-auto bg-[#5D5DFF] flex gap-10 ">
        <div className="text-2xl text-white p-5">
          <p>
            <b>Stay in the loop</b>
          </p>
          <p className="text-gray-300">
            Join our newsletter to get top news before anyone else.
          </p>
        </div>
        <div className="flex relative gap-2.5">
          <input
            className="absolute bg-[#1212f568] justify-center top-10 text-gray-200 p-1.5"
            type="text"
            placeholder="Your best email..."
          />
          <button className="absolute text-[#5d5dff] bg-white px-4 py-1.5 left-52 top-10">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stay;
