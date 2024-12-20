import { Link, useNavigate } from "react-router-dom";
import { ProfileData } from "./Data";
import LeftData from "./LeftData";
import { useSelector } from "react-redux";
import profile from "../../../../../public/postBackgrounds/man.jpg";

const Profile = () => {
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.userInformation.userInfo);
  return (
    <>
      <div
        onClick={() => navigate("/profile")}
        className="cursor-pointer w-[80px] h-[80px] xl:w-[110px] xl:h-[110px] rounded-full overflow-hidden mx-auto "
      >
        <img src={userInfo.profilePicture || profile} alt="profile" />
      </div>
      <div className="text-center mt-4">
        <Link
          to={"/profile"}
          className="font-gilroySemibold hidden xl:block text-2xl text-black"
        >
          {userInfo.firstName + " " + userInfo.lastName}
        </Link>
        <p className="hidden xl:block font-gilroyNormal text-sm text-text_color">
          {userInfo.email}
        </p>
      </div>
      <div>
        {ProfileData.map((data, i) => (
          <LeftData key={i} data={data} />
        ))}
      </div>
    </>
  );
};

export default Profile;
