/* eslint-disable react/prop-types */
import avatar from "../../../../public/postBackgrounds/man.jpg";
const FriendList = ({ friends }) => {
  const friendsCount = () => {
    const totalCount = friends?.length || 0;
    return totalCount === 0 ? "0 friends" : `${friends?.length} friends`;
  };
  return (
    <>
      <div>
        <h3 className="font-gilroySemibold text-base text-black">Friends</h3>
        <div className="flex justify-between items-center mb-2">
          <span className="font-gilroyMedium text-sm text-secondary_color">
            {friendsCount()}
          </span>
          {friends?.length > 6 && (
            <button className="py-1 px-3 font-gilroyMedium text-white text-base bg-blue rounded-md"></button>
          )}
        </div>
        <div className=" grid grid-cols-3 md:grid-cols-4 2xl:grid-cols-2 gap-2 min-h-7 pb-4">
          {friends?.length &&
            friends.slice(0, 6).map((friend) => (
              <div key={friend._id}>
                <img
                  src={friend?.profilePicture || avatar}
                  alt="img"
                  className="w-full object-cover rounded-md"
                />
                <p className="font-gilroyMedium text-md mt-1 text-black">
                  {friend.firstName + " " + friend.lastName}
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default FriendList;
