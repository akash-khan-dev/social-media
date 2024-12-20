import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const OldCoverPhoto = ({ setShowOldCover, imageData, setCoverPhoto }) => {
  const userInfo = useSelector((state) => state.userInformation.userInfo);
  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-blur h-screen flex items-center justify-center z-50">
        <div className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[35%] shadow-md bg-white relative">
          <div>
            <div
              onClick={() => setShowOldCover(false)}
              className="absolute top-2 right-3 text-purple-100 cursor-pointer"
            >
              <IoCloseCircleOutline className="text-black" size={27} />
            </div>
            <div className="border-b border-line_color p-2">
              <h3 className="font-gilroyBold text-lg text-black text-center">
                Upload Cover Profile
              </h3>
            </div>
            <div className="w-full max-h-[250px] px-3 overflow-y-auto">
              <h3 className="font-gilroyNormal font-md font-black">
                Cover Photos
              </h3>
              <span className="font-gilroyMedium text-base text-secondary_color lining-[20px]">
                Total (
                {
                  imageData?.filter(
                    (img) =>
                      img.asset_folder ===
                      `${userInfo.username.replace(/\s+/g, "_")}/cover_picture`
                  ).length
                }
                )
              </span>
              <div className="grid grid-cols-4 md:grid-cols-5 lg-grid-cols-3 gap-2 mt-2">
                {imageData
                  ?.filter(
                    (img) =>
                      img.asset_folder ===
                      `${userInfo.username.replace(/\s+/g, "_")}/cover_picture`
                  )
                  .map((file, i) => (
                    <div key={i}>
                      <img
                        onClick={() => {
                          setCoverPhoto(file.secure_url);
                          setShowOldCover(false);
                        }}
                        src={file.secure_url}
                        alt="profile"
                        className="w-full h-[80px] object-cover cursor-pointer"
                      />
                    </div>
                  ))}
              </div>
            </div>
            <div className="w-full h-[300px] mt-3 px-3 overflow-y-auto">
              <h3 className="font-gilroyNormal font-lg font-black">
                Other photos
              </h3>
              <span className="font-gilroyMedium text-base text-secondary_color lining-[20px]">
                Total (
                {
                  imageData?.filter(
                    (img) =>
                      img.asset_folder ==
                      `${userInfo.username.replace(
                        /\s+/g,
                        "_"
                      )}/profile_picture`
                  ).length
                }
                )
              </span>
              <div className="grid gid-cols-5 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-5 gap-2 mt-2">
                {imageData
                  ?.filter(
                    (img) =>
                      img.asset_folder ==
                      `${userInfo.username.replace(
                        /\s+/g,
                        "_"
                      )}/profile_picture`
                  )
                  .map((file, i) => (
                    <div key={i}>
                      <img
                        onClick={() => {
                          setCoverPhoto(file.secure_url);
                          setShowOldCover(false);
                        }}
                        src={file.secure_url}
                        alt="profile"
                        className="w-full h-[100px] object-cover cursor-pointer"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OldCoverPhoto;
