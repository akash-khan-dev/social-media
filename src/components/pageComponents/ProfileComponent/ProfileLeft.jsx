/* eslint-disable react/prop-types */

import Photos from "./Photos";
import UserInfoDetails from "./userDetails";
import FriendList from "./FriendList";

const ProfileLeft = ({
  imageData,
  imageLoading,
  userDetail,
  visitor,
  setNickName,
  friends,
}) => {
  return (
    <>
      <div className="w-full shadow-md rounded-sm p-3 mt-5">
        <UserInfoDetails
          visitor={visitor}
          userDetail={userDetail}
          setNickName={setNickName}
        />
      </div>
      <div className="w-full shadow-md rounded-sm p-3 mt-5">
        <Photos imageLoading={imageLoading} imageData={imageData} />
      </div>
      <div className="w-full shadow-md rounded-sm p-3 mt-5">
        <FriendList friends={friends} />
      </div>
    </>
  );
};

export default ProfileLeft;
