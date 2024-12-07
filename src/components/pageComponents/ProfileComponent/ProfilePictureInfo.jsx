/* eslint-disable react/prop-types */
import React from "react";
import profilePic from "../../../../public/postBackgrounds/man.jpg";
const ProfilePictureInfo = ({ profile }) => {
  return (
    <div className="flex items-center bg-white_100 pl-36 pt-3">
      <div
        style={{
          backgroundImage: `url(${profile?.profilePicture || profilePic})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute top-50 left-5  w-28 h-28 rounded-full border-2 border-white "
      ></div>
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
