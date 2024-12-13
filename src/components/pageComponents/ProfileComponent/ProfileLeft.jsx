/* eslint-disable react/prop-types */
import React from "react";
import Photos from "./Photos";
import UserInfoDetails from "./userDetails";

const ProfileLeft = ({ imageData, imageLoading, userDetail }) => {
  return (
    <>
      <div className="w-full shadow-md rounded-sm p-3 mt-5">
        <UserInfoDetails userDetail={userDetail} />
      </div>
      <div className="w-full shadow-md rounded-sm p-3 mt-5">
        <Photos imageLoading={imageLoading} imageData={imageData} />
      </div>
    </>
  );
};

export default ProfileLeft;
