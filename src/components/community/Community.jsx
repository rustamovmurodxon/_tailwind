import React from "react";
import avatar from "../assets/Avatar.svg";
import avatar_2 from "../assets/Avatar (1).svg";
import avatar_3 from "../assets/Avatar (2).svg";
const Community = () => {
  return (
    <div className="bg-[#151719]">
      <div className="container mx-auto">
        <div className="px-36 text-center">
          <h1 className="text-white text-4xl">
            <b>Don't take our word for it</b>
          </h1>
          <p className="text-gray-500 my-5">
            Vitae aliquet nec ullamcorper sit amet risus nullam eget felis
            semper quis lectus nulla at volutpat diam ut venenatis tellus—in
            ornare.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="border p-2.5 bg-[#25282C]">
            <img src={avatar} alt="" />
            <p className="text-gray-500 my-4">
              — Open PRO lets me quickly get the insights I care about so that I
              can focus on my productive work. I've had Open PRO for about 24
              hours now and I honestly don't know how I functioned without it
              before.
            </p>
            <hr />
            <p className="text-white">
              Anastasia Dan <span className="text-[#5959F2]">UX Board</span>{" "}
            </p>
          </div>
          <div className="border p-2.5 bg-[#25282C]">
            <img src={avatar_2} alt="" />
            <p className="text-gray-500 my-4">
              — Open PRO lets me quickly get the insights I care about so that I
              can focus on my productive work. I've had Open PRO for about 24
              hours now and I honestly don't know how I functioned without it
              before.
            </p>
            <hr />
            <p className="text-white">
              Anastasia Dan <span className="text-[#5959F2]">UX Board</span>{" "}
            </p>
          </div>
          <div className="border p-2.5 bg-[#25282C]">
            <img src={avatar_3} alt="" />
            <p className="text-gray-500 my-4">
              — Open PRO lets me quickly get the insights I care about so that I
              can focus on my productive work. I've had Open PRO for about 24
              hours now and I honestly don't know how I functioned without it
              before.
            </p>
            <hr />
            <p className="text-white">
              Anastasia Dan <span className="text-[#5959F2]">UX Board</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
