/* eslint-disable react/prop-types */
import React from "react";
import profilePic from "../../../../public/postBackgrounds/man.jpg";
import { MdOutlineCameraAlt } from "react-icons/md";
const ProfilePictureInfo = ({ profile, visitor }) => {
  return (
    <div className="flex items-center bg-white_100 pl-36 pt-3">
      <div className="relative">
        <div
          style={{
            backgroundImage: `url(${profile?.profilePicture || profilePic})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="absolute -top-[70px] -left-[120px]  w-28 h-28 rounded-full border-2 border-white "
        ></div>
        {visitor && (
          <div className="absolute top-3 cursor-pointer right-3 w-[28px] h-[28px] rounded-full flex items-center justify-center bg-white">
            <MdOutlineCameraAlt className="text-black" />
          </div>
        )}
      </div>
      <div>
        <div>
          <h3 className="font-gilroySemibold text-xl text-black">
            {profile?.firstName + " " + profile?.lastName}
          </h3>
          <span className="font-gilroyMedium text-base text-black">
            Other Name
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePictureInfo;
