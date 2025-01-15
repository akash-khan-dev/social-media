/* eslint-disable react/prop-types */

import profile from "../../../public/postBackgrounds/man.jpg";
import { Link, useNavigate } from "react-router-dom";
const FriendsContact = ({ friendsData }) => {
  const navigate = useNavigate();

  const navigateProfile = (username) => {
    navigate(`/profile/${username}`);
  };
  return (
    <div className=" pr-4 mt-4">
      <div className="flex items-center justify-between py-2 border-b border-line_color pb-3">
        <div>
          <h3 className="font-gilroySemibold text-lg text-black">
            Friends Request
          </h3>
        </div>
        <div>
          <Link
            to={"/friends"}
            className="block font-gilroySemibold text-md border border-black py-1 px-2 rounded-full hover:bg-black hover:text-white transition-all duration-300"
          >
            See All
          </Link>
        </div>
      </div>
      <div>
        {friendsData?.length > 0 ? (
          friendsData?.slice(0, 10).map((friend) => (
            <div key={friend._id} className="flex items-center mt-4">
              <div className="w-[25%]">
                <div className="w-[50px] h-[50px] overflow-hidden rounded-full">
                  <img src={friend.profilePicture || profile} alt="profile" />
                </div>
              </div>
              <div className="w-[75%]">
                <h4
                  onClick={() => navigateProfile(friend.username)}
                  className="font-gilroySemibold text-md cursor-pointer"
                >
                  {friend.firstName + " " + friend.lastName}
                </h4>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">
            <span className="font-bold text-lg text-red">
              No Friends available
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendsContact;
