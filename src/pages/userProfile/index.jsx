/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
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
  const profileTopRef = useRef(null);
  const profileLeftReft = useRef(null);
  const [height, setHeight] = useState();
  const [nickName, setNickName] = useState();
  const [profileLeftHeight, setProfileLeftHeight] = useState();
  const [scrollHeight, setScrollHeight] = useState();
  const userInfo = useSelector((state) => state.userInformation.userInfo);
  const userName = username === undefined ? userInfo.username : username;
  const { data: profile } = useGetUserProfileQuery(userName);

  // eslint-disable-next-line no-unused-vars
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
    setNickName(profile?.details?.nickname);
  }, [navigate, profile, listImg, path]);
  const visitor = userName === userInfo.username ? true : false;

  // ==== this for generate profile height
  useEffect(() => {
    setHeight(profileTopRef.current.clientHeight + 80);
    setProfileLeftHeight(profileLeftReft.current.clientHeight);
    window.addEventListener("scroll", getScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", getScroll, { passive: true });
    };
  }, [scrollHeight]);
  const getScroll = () => {
    setScrollHeight(window.scrollY);
  };

  // ===== for responsive scrolling
  const check = useMediaQuery({
    query: "(min-width: 1500px)",
  });
  return (
    <div>
      <Helmet>
        <title>profile</title>
      </Helmet>
      <div className="relative ">
        <div ref={profileTopRef}>
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
              userInfo={userInfo}
              visitor={visitor}
              nickName={nickName}
            />
          </div>
          <div className="w-full pb-2 lg:pb-6 bg-white_100">
            <ProfileMenus profile={profile} imageData={imageData} />
          </div>
        </div>
        <div
          className={`2xl:grid grid-cols-[2fr,3fr] gap-x-3 ${
            check && scrollHeight >= height && profileLeftHeight > 100
              ? "scrollFixed showLess"
              : check &&
                scrollHeight >= height &&
                profileLeftHeight < 100 &&
                "scrollFixed showMore"
          }`}
        >
          <div ref={profileLeftReft} className="profileLeft w-full">
            <ProfileLeft
              userDetail={profile?.details}
              imageLoading={imageLoading}
              imageData={imageData}
              visitor={visitor}
              setNickName={setNickName}
            />
          </div>
          <div className="w-full profileRight">
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
