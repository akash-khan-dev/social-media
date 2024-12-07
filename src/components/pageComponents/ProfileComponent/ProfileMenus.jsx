import React from "react";

const ProfileMenus = () => {
  return (
    <div className="w-2/4 ml-auto flex justify-between pr-2">
      <div className="text-center">
        <h4 className="font-gilroySemibold text-sm text-black">Friends</h4>
        <span className="font-gilroyBold text-lg text-black">{"10K"}</span>
      </div>
      <div className="text-center">
        <h4 className="font-gilroySemibold text-base text-black">Post</h4>
        <span className="font-gilroyBold text-lg text-black">{"10K"}</span>
      </div>
      <div className="text-center">
        <h4 className="font-gilroySemibold text-sm text-black">Followers</h4>
        <span className="font-gilroyBold text-lg text-black">{"10K"}</span>
      </div>
      <div className="text-center">
        <h4 className="font-gilroySemibold text-sm text-black">Following</h4>
        <span className="font-gilroyBold text-lg text-black">{"10K"}</span>
      </div>
      <div className="text-center">
        <h4 className="font-gilroySemibold text-sm text-black">Photos</h4>
        <span className="font-gilroyBold text-lg text-black">{"10K"}</span>
      </div>
    </div>
  );
};

export default ProfileMenus;
