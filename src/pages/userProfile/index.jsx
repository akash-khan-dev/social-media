import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useGetUserProfileQuery } from "../../StateFeature/api/authApi";

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
      <h1>Profile</h1>
      <p>Username: {profile?.user?.username}</p>
      <p>Email: {profile?.user?.email}</p>
    </div>
  );
};

export default Profile;
