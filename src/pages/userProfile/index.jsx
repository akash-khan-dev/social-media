import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useGetUserProfileQuery } from "../../StateFeature/api/authApi";
import { Helmet } from "react-helmet-async";
import Cover from "../../components/pageComponents/ProfileComponent/Cover";
import ProfilePictureInfo from "../../components/pageComponents/ProfileComponent/ProfilePictureInfo";

const Profile = () => {
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
      <div>
        <Cover coverImg={profile.user.cover} />
      </div>
      <div>
        <ProfilePictureInfo profile={profile} />
      </div>
    </div>
  );
};

export default Profile;
