import React, { useState } from "react";

import HomeMiddle from "../Home/HomeMiddle";
import ProfilePostView from "./ProfilePostView";

const ProfileRight = ({ setPostPopupVisible }) => {
  const [postView, setPostView] = useState("list");
  return (
    <>
      <div>
        <HomeMiddle setPostPopupVisible={setPostPopupVisible} />
      </div>
      <div>
        <ProfilePostView postView={postView} setPostView={setPostView} />
      </div>
      {postView === "list" ? <h1>List</h1> : <h1>Grid</h1>}
    </>
  );
};

export default ProfileRight;
