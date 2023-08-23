import React from "react";
import { NavLink } from "react-router-dom";
import hospital1 from "../images/hospital_1.png";
import hospital2 from "../images/hospital_2.png";

const Services = () => {
  return (
    <div className="">
      <h2 className="page-heading about-heading my-10">HOSPITAL LIST</h2>
      <div className="flex lg:flex-row gap-6 justify-center align-center sm:flex-col md:flex-col min-[320px]:flex-col ">
        <div className=" bg-cyan-500 px-[10%] py-20 rounded-md">
          <img className="w-64 lg:px-[10%] mx-auto" src={hospital1} alt="" />
          <h1 className="text-4xl text-white mb-10 text-center">
            PUBLIC HOSPITAL
          </h1>
          <NavLink
            className="bg-red-500 flex items-center justify-center px-[20%] py-[5%] mx-10 mt-10 text-white rounded-md"
            to={"/publichospital"}
          >
            Details
          </NavLink>
        </div>
        <div className="bg-cyan-500 px-[10%] py-20 rounded-md">
          <img className="w-64 lg:px-[10%] mx-auto" src={hospital2} alt="" />
          <h1 className="text-4xl text-white mb-10 text-center">
            PRIVATE HOSPITAL
          </h1>
          <NavLink
            className="bg-green-500 flex items-center justify-center px-[20%] py-[5%] mx-10 mt-10 text-white rounded-md"
            to={"/privatehospital"}
          >
            Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Services;
