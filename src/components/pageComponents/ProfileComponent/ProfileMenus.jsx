/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const ProfileMenus = ({ profile, imageData }) => {
  return (
    <div className="  xl:w-2/4 lg:w-3/4 ml-auto flex lg:justify-between justify-around md:px-14 lg:px-0 lg:pr-2">
      <div className="text-center">
        <h4 className="font-gilroySemibold text-sm text-black">Friends</h4>
        <span className="font-gilroyBold text-base xl:text-lg text-black">
          {profile?.friends?.length.toString().padStart(2, 0)}
        </span>
      </div>
      <div className="text-center">
        <h4 className="font-gilroySemibold text-base text-black">Post</h4>
        <span className="font-gilroyBold text-base xl:text-lg text-black">
          {profile?.post?.length
            ? profile?.post?.length.toString().padStart(2, 0)
            : 0}
        </span>
      </div>
      <div className="text-center">
        <h4 className="font-gilroySemibold text-sm text-black">Followers</h4>
        <span className="font-gilroyBold text-base xl:text-lg text-black">
          {"10K"}
        </span>
      </div>
      <div className="text-center">
        <h4 className="font-gilroySemibold text-sm text-black">Following</h4>
        <span className="font-gilroyBold text-base xl:text-lg text-black">
          {"10k"}
        </span>
      </div>
      <div className="text-center">
        <h4 className="font-gilroySemibold text-sm text-black">Photos</h4>
        <span className="font-gilroyBold text-base xl:text-lg text-black">
          {imageData?.resources?.length
            ? imageData?.resources?.length.toString().padStart(2, 0)
            : 0}
        </span>
      </div>
    </div>
  );
};

export default ProfileMenus;
