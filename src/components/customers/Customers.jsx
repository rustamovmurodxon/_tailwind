import React from "react";
import star from "../assets/Icon (2).svg";
import text from "../assets/Icon (3).svg";
import ground from "../assets/Icon (4).svg";
import person from "../assets/Icon (5).svg";
import like from "../assets/Icon (6).svg";
import message from "../assets/Icon (7).svg";
const Customers = () => {
  return (
    <div className="bg-[#151719] border-b-gray-600">
      <div className="container m-auto">
        <div className="text-center">
          <h1 className="text-white font-bold px-20 py-2.5 text-2xl">
            <strong>
              The majority our customers do not understand their workflows.
            </strong>
          </h1>
          <p className=" text-gray-500 py-4">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="customers grid grid-cols-3 gap-3 ">
          <div className="card text-center">
            <img src={star} className="ml-[42%]" />
            <h3 className="font-bold py-2.5 text-white">Instant Features</h3>
            <p className="text-gray-500">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </div>

          <div className="card text-center">
            <img src={text} className="ml-[42%]" />
            <h3 className="font-bold py-2.5 text-white">Instant Features</h3>
            <p className="text-gray-500">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </div>

          <div className="card text-center">
            <img src={ground} className="ml-[42%]" />
            <h3 className="font-bold py-2.5 text-white">Instant Features</h3>
            <p className="text-gray-500">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </div>

          <div className="card text-center">
            <img src={person} className="ml-[42%]" />
            <h3 className="font-bold py-2.5 text-white">Instant Features</h3>
            <p className="text-gray-500">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </div>

          <div className="card text-center">
            <img src={like} className="ml-[42%]" />
            <h3 className="font-bold py-2.5 text-white">Instant Features</h3>
            <p className="text-gray-500">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </div>

          <div className="card text-center">
            <img src={message} className="ml-[42%]" />
            <h3 className="font-bold py-2.5 text-white">Instant Features</h3>
            <p className="text-gray-500">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
