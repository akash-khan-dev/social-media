const FriendsCard = () => {
  const friends = [
    {
      name: "John Doe",
      mutualFriends: 2,
      image: "https://via.placeholder.com/50",
    },
  ];
  return (
    <div>
      {friends.map((friend, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md flex flex-col items-center"
        >
          {/* Profile Picture */}
          <img
            src={friend.image}
            alt="Profile"
            className="w-full h-[150px] mb-4 mx-auto"
          />
          {/* Profile Info */}
          <h2 className="font-bold text-gray-800 text-center">{friend.name}</h2>
          <p className="text-sm text-gray-500 text-center">
            {friend.mutualFriends} mutual friends
          </p>
          {/* Buttons */}
          <div className="mt-4 flex flex-col text-center mb-3">
            <button className="bg-blue text-white text-sm py-2 px-4 font-gilroyMedium  rounded-lg hover:bg-blue-600">
              Add Friend
            </button>
            <button className="bg-white_100 mt-2 text-black font-gilroyMedium text-sm py-2 px-4 rounded-lg ">
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendsCard;
