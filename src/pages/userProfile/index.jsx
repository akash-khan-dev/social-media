import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useGetUserProfileQuery } from "../../StateFeature/api/authApi";
import { Helmet } from "react-helmet-async";
import Cover from "../../components/pageComponents/ProfileComponent/Cover";
import ProfilePictureInfo from "../../components/pageComponents/ProfileComponent/ProfilePictureInfo";
import ProfileMenus from "../../components/pageComponents/ProfileComponent/ProfileMenus";
import ProfileLeft from "../../components/pageComponents/ProfileComponent/ProfileLeft";
import ProfileRight from "../../components/pageComponents/ProfileComponent/ProfileRight";

const Profile = ({ setPostPopupVisible }) => {
  const { username } = useParams();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.registration.userInfo);
  const userName = username === undefined ? userInfo.username : username;
  const { data: profile } = useGetUserProfileQuery(userName);

  useEffect(() => {
    if (profile && profile.ok === false) {
      navigate("/");
    }
  }, [navigate, profile]);

  return (
    <div>
      <Helmet>
        <title>profile</title>
      </Helmet>
      <div className="relative ">
        <div>
          <Cover coverImg={profile?.user?.cover} />
        </div>
        <div>
          <ProfilePictureInfo profile={profile?.user} />
        </div>
        <div className="w-full pb-6 bg-white_100">
          <ProfileMenus />
        </div>
        <div className="grid grid-cols-[2fr,3fr] gap-x-3">
          <div className="w-full ">
            <ProfileLeft />
          </div>
          <div className="w-full ">
            <ProfileRight setPostPopupVisible={setPostPopupVisible} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
