/* eslint-disable react/prop-types */

import { PuffLoader } from "react-spinners";

const Activate = ({ type, heading, message, loading }) => {
  return (
    <>
      <div className=" absolute top-0 left-0 w-full h-screen bg-blur z-20 flex items-center justify-center">
        <div className="w-[400px] bg-white shadow-md p-4 text-center">
          <h3
            className={`${
              type === "success" ? "text-green" : "text-red"
            } font-gilroySemibold text-lg`}
          >
            {heading}
          </h3>
          <h5 className="font-gilroyNormal text-lg text-black">{message}</h5>

          <PuffLoader
            className="m-auto mt-2"
            color="#21D997"
            size={40}
            loading={loading}
          />
        </div>
      </div>
    </>
  );
};

export default Activate;
