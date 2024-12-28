/* eslint-disable react/prop-types */
import { useState } from "react";

import HomeMiddle from "../Home/HomeMiddle";
import ProfilePostView from "./ProfilePostView";
import ShowPost from "../Home/HomeMiddle/ShowPost";

const ProfileRight = ({ userInfo, profile, setPostPopupVisible, visitor }) => {
  const [postView, setPostView] = useState("list");
  return (
    <>
      {visitor && (
        <div>
          <HomeMiddle setPostPopupVisible={setPostPopupVisible} />
        </div>
      )}

      <div>
        <ProfilePostView postView={postView} setPostView={setPostView} />
      </div>
      {profile?.post && profile?.post?.length ? (
        <div>
          {profile?.post?.map((item) => (
            <ShowPost key={item._id} post={item} userInfo={userInfo} />
          ))}
        </div>
      ) : (
        <div className="w-full shadow-md mt-5 bg-white p-3 text-center rounded-md">
          <h4 className="font-gilroyMedium text-xl text-black">
            No Post available
          </h4>
        </div>
      )}
    </>
  );
};

export default ProfileRight;
