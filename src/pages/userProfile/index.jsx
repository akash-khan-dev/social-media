import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetUserProfileQuery,
  useImgListMutation,
} from "../../StateFeature/api/authApi";
import { Helmet } from "react-helmet-async";
import Cover from "../../components/pageComponents/ProfileComponent/Cover/CoverPhoto";
import ProfilePictureInfo from "../../components/pageComponents/ProfileComponent/ProfilePictureInfo";
import ProfileMenus from "../../components/pageComponents/ProfileComponent/ProfileMenus";
import ProfileLeft from "../../components/pageComponents/ProfileComponent/ProfileLeft";
import ProfileRight from "../../components/pageComponents/ProfileComponent/ProfileRight";

const Profile = ({ setPostPopupVisible }) => {
  const { username } = useParams();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.userInformation.userInfo);
  const userName = username === undefined ? userInfo.username : username;
  const { data: profile } = useGetUserProfileQuery(userName);

  const [listImg, { data: imageData, imageError, isLoading: imageLoading }] =
    useImgListMutation();
  const path = `${userName.replace(/\s+/g, "_")}/*`;
  const sort = "desc";
  const max = "30";

  useEffect(() => {
    if (profile && profile.ok === false) {
      navigate("/");
      listImg({ path, sort, max });
    } else {
      listImg({ path, sort, max });
    }
  }, [navigate, profile, listImg, path]);

  const visitor = userName === userInfo.username ? true : false;
  return (
    <div>
      <Helmet>
        <title>profile</title>
      </Helmet>
      <div className="relative ">
        <div>
          <Cover
            imageData={imageData?.resources}
            coverImg={profile?.cover}
            visitor={visitor}
          />
        </div>
        <div>
          <ProfilePictureInfo
            imageData={imageData?.resources}
            profile={profile}
            visitor={visitor}
          />
        </div>
        <div className="w-full pb-6 bg-white_100">
          <ProfileMenus profile={profile} imageData={imageData} />
        </div>
        <div className="grid grid-cols-[2fr,3fr] gap-x-3">
          <div className="w-full">
            <ProfileLeft
              userDetail={profile?.details}
              imageLoading={imageLoading}
              imageData={imageData}
            />
          </div>
          <div className="w-full ">
            <ProfileRight
              profile={profile}
              userInfo={userInfo}
              setPostPopupVisible={setPostPopupVisible}
              visitor={visitor}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
