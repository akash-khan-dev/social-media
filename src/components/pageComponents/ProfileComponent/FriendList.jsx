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
        <div className=" grid grid-cols-5 md:grid-cols-5 2xl:grid-cols-3 gap-2 min-h-7">
          {friends?.length &&
            friends
              .slice(0, 6)
              .map((friend) => (
                <img
                  key={friend._id}
                  src={friend?.profilePicture || avatar}
                  alt="img"
                  className="w-full h-full object-cover"
                />
              ))}
        </div>
      </div>
    </>
  );
};

export default FriendList;
