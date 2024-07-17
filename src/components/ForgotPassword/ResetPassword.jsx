/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <>
      <div className="bg-white min-w-[320px] w-[530px] px-8 py-4 rounded-md">
        <div>
          <h2 className="font-gilroyBold text-xl text-black border-b border-line_color pb-3 text-center">
            Reset Password
          </h2>
          <p className="font-gilroyMedium text-base text-title_color mt-2">
            How do you want to receive the code to reset your password?
          </p>
        </div>

        <div className="w-16 h-16 bg-black rounded-full mx-auto mt-3"></div>
        <div className="flex items-center justify-center mt-2 gap-2">
          <input type="radio" defaultChecked={true} />
          <p className="font-gilroySemibold text-base text-black">
            mdakashkhan@gmail.com
          </p>
        </div>
        <div className="mt-3 text-center">
          <Link to="/login">
            <button className="bg-[#f0f2f5] p-3 md:px-5 md:py-2 rounded-md font-gilroyMedium text-sm md:text-base text-title_color mr-3">
              Not you?
            </button>
          </Link>
          <button className="bg-primary_color md:px-5 md:py-2 rounded-md font-gilroyMedium text-sm md:text-base text-white mr-3">
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
