/* eslint-disable react/prop-types */
import React from "react";
import Photos from "./Photos";

const ProfileLeft = ({ imageData }) => {
  return (
    <>
      <div className="w-full shadow-md rounded-sm p-3 mt-5">
        <Photos imageData={imageData} />
      </div>
    </>
  );
};

export default ProfileLeft;
