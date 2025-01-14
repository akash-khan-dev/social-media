/* eslint-disable react/prop-types */

import profile from "../../../../../public/postBackgrounds/man.jpg";
const RightFriends = ({ friendsData }) => {
  console.log(friendsData);

  return (
    <>
      <div className=" pr-4">
        <div className="flex items-center justify-between py-2 border-b border-line_color pb-3">
          <div>
            <h3 className="font-gilroySemibold text-lg text-black">
              Friends Request
            </h3>
          </div>
          <div>
            <button className="font-gilroySemibold text-md border border-black py-1 px-2 rounded-full hover:bg-black hover:text-white transition-all duration-300">
              See All
            </button>
          </div>
        </div>
        <div>
          {friendsData?.request.slice(0, 4).map((friend) => (
            <div key={friend._id} className="flex mt-4">
              <div className="w-[25%]">
                <div className="w-[50px] h-[50px] overflow-hidden rounded-full">
                  <img src={friend.profilePicture || profile} alt="profile" />
                </div>
              </div>
              <div className="w-[75%]">
                <h4 className="font-gilroySemibold text-md">
                  {friend.firstName + " " + friend.lastName}
                </h4>
                <p className="font-gilroyNormal text-xs text-secondary_color">
                  1 hour ago
                </p>
                <div className="mt-3 flex gap-4">
                  <button className="bg-black py-1 px-4 rounded-lg font-gilroyMedium text-white">
                    Accept
                  </button>
                  <button className="bg-red py-1 px-4 rounded-lg font-gilroyMedium text-white">
                    Reject
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RightFriends;
