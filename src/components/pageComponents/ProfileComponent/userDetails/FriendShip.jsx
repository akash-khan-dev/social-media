/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { RiUserFollowFill } from "react-icons/ri";
import { RiUserUnfollowFill } from "react-icons/ri";
import OutSideClick from "../../../../utils/Click";
import { IoIosCheckmarkCircleOutline, IoMdPersonAdd } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { useAddFriendMutation } from "../../../../StateFeature/api/authApi";
export const FriendShip = ({ profileId, friendShips }) => {
  const [friendShip, setFriendShip] = useState(friendShips);
  const [friendMenu, setFriendMenu] = useState(false);
  const [responseMenu, setResponseMenu] = useState(false);
  const friendRef = useRef(null);
  const responseRef = useRef(null);

  const [addFriend] = useAddFriendMutation();

  OutSideClick(friendRef, () => {
    setFriendMenu(false);
  });
  OutSideClick(responseRef, () => {
    setResponseMenu(false);
  });
  const handleAddRequest = async () => {
    try {
      await addFriend(profileId).unwrap();
      setFriendShip({ ...friendShip, following: true, request: true });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    setFriendShip(friendShips);
  }, [friendShips]);
  return (
    <>
      {friendShip?.friend ? (
        <div className="relative">
          <div
            onClick={() => setFriendMenu(!friendMenu)}
            className="cursor-pointer font-gilroyMedium flex bg-white shadow-sm text-black px-3 py-2 items-center gap-x-2 rounded-md"
          >
            <RiUserFollowFill />
            <button className="">Friends</button>
          </div>
          <div>
            {friendMenu && (
              <div
                ref={friendRef}
                className="absolute top-10 right-0 bg-white rounded-md shadow-md"
              >
                <div className="flex items-center px-5 py-2 cursor-pointer gap-x-2 hover:bg-white_100 transition duration-300">
                  <RiUserUnfollowFill />
                  <span className="font-gilroyMedium text-black text-base">
                    Unfriend
                  </span>
                </div>
                <div className="flex items-center  px-5 py-2 cursor-pointer gap-x-2 hover:bg-white_100 transition duration-300">
                  <RiUserUnfollowFill />
                  <span className="font-gilroyMedium text-black text-base">
                    Unfollow
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        !friendShip?.request &&
        !friendShip?.requestReceived && (
          <div
            onClick={handleAddRequest}
            className="cursor-pointer font-gilroyMedium flex bg-blue text-white px-3 py-2 items-center gap-x-2 rounded-md"
          >
            <IoMdPersonAdd />
            <button className="">Add Friend</button>
          </div>
        )
      )}
      {/* request part start */}
      {friendShip?.request ? (
        <div className="cursor-pointer font-gilroyMedium flex bg-white text-black px-3 py-2 items-center gap-x-2 rounded-md">
          <RiUserUnfollowFill />
          <button className="">Cancel Request</button>
        </div>
      ) : (
        friendShip?.requestReceived && (
          <div className="relative">
            <div
              onClick={() => setResponseMenu(!responseMenu)}
              className="cursor-pointer font-gilroyMedium flex bg-white text-black px-3 py-2 items-center gap-x-2 rounded-md"
            >
              <RiUserFollowFill />
              <button className="">Response</button>
            </div>
            {responseMenu && (
              <div
                ref={responseRef}
                className="absolute top-10 right-0 bg-white rounded-md shadow-md"
              >
                <div className="flex items-center px-5 py-2 cursor-pointer gap-x-2 hover:bg-white_100 transition duration-300">
                  <IoIosCheckmarkCircleOutline />
                  <span className="font-gilroyMedium text-black text-base">
                    Confirm
                  </span>
                </div>
                <div className="flex items-center  px-5 py-2 cursor-pointer gap-x-2 hover:bg-white_100 transition duration-300">
                  <MdOutlineCancel />
                  <span className="font-gilroyMedium text-black text-base">
                    Cancel
                  </span>
                </div>
              </div>
            )}
          </div>
        )
      )}
      {friendShip?.following ? (
        <div className="cursor-pointer font-gilroyMedium flex bg-white text-black px-3 py-2 items-center gap-x-2 rounded-md">
          <RiUserFollowFill />
          <button className="">Following</button>
        </div>
      ) : (
        <div className="cursor-pointer font-gilroyMedium flex bg-blue text-white px-3 py-2 items-center gap-x-2 rounded-md">
          <RiUserFollowFill />
          <button className="">Follow</button>
        </div>
      )}
    </>
  );
};
