/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import profilePic from "../../../../public/postBackgrounds/man.jpg";
import { MdOutlineCameraAlt } from "react-icons/md";
import ProfilePictureUpload from "./ProfilePictureUpload";
import { FriendShip } from "./userDetails/FriendShip";
const ProfilePictureInfo = ({ profile, visitor, imageData, nickName }) => {
  const [showUploadProfile, setShowUploadProfile] = useState(false);
  const uploadProfileRef = useRef(null);

  return (
    <div className="flex justify-between flex-col lg:flex-row items-center bg-white_100 lg:pl-32 2xl:pl-36 lg:pt-3">
      {showUploadProfile && (
        <div>
          <ProfilePictureUpload
            imageData={imageData}
            uploadProfileRef={uploadProfileRef}
            showUploadProfile={showUploadProfile}
            setShowUploadProfile={setShowUploadProfile}
          />
        </div>
      )}
      <div className="-mt-[60px] md:-mt-[80px] relative">
        <div
          ref={uploadProfileRef}
          style={{
            backgroundImage: `url(${profile?.profilePicture || profilePic})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="lg:absolute lg:-top-[70px] lg:-left-[120px] h-32 w-32  lg:w-28 lg:h-28 rounded-full border-2 border-white lg:z-20"
        ></div>
        {visitor && (
          <div
            onClick={() => setShowUploadProfile(true)}
            className="absolute bottom-0 right-0 lg:top-3 cursor-pointer lg:right-3 w-[28px] h-[28px] rounded-full flex items-center justify-center bg-white z-20"
          >
            <MdOutlineCameraAlt className="text-black" />
          </div>
        )}
      </div>
      <div className="w-[50%] lg:w-[40%] text-center lg:text-start">
        <div>
          <h3 className="font-gilroySemibold text-xl text-black">
            {profile?.firstName + " " + profile?.lastName}
          </h3>
          <span className="font-gilroyMedium text-base text-black">
            {nickName || "(Nick Name)"}
          </span>
        </div>
      </div>
      <div className="w-[100%] lg:w-[60%] flex justify-center lg:justify-end gap-x-3 mb-2 mr-3">
        {!visitor && (
          <FriendShip
            profileId={profile?._id}
            friendShips={profile?.friendShip}
          />
        )}
      </div>
    </div>
  );
};

export default ProfilePictureInfo;
