/* eslint-disable react/prop-types */
import React from "react";
import Photos from "./Photos";

const ProfileLeft = ({ imageData, imageLoading }) => {
  return (
    <>
      <div className="w-full shadow-md rounded-sm p-3 mt-5">
        <Photos imageLoading={imageLoading} imageData={imageData} />
      </div>
    </>
  );
};

export default ProfileLeft;
