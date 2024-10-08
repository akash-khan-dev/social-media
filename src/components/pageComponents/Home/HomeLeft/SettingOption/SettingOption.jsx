import { FaRegMoon } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { useState } from "react";
import DisplayMood from "./DisplayMood";
import { useDispatch } from "react-redux";
import { loggedOutUser } from "../../../../../StateFeature/Slice/authSlice";
const SettingOption = () => {
  const [showMood, setShowMood] = useState(false);
  const dispatch = useDispatch();

  if (showMood) {
    return <DisplayMood setShowMood={setShowMood} />;
  }

  const handleLogOut = () => {
    localStorage.removeItem("userInfo");
    dispatch(loggedOutUser());
  };
  return (
    <>
      <div className="bg-white shadow-md p-5 ml-5 absolute top-5 right-0 w-[260px] lg:left-0">
        <div
          className="flex items-center gap-7 mb-3 group cursor-pointer"
          onClick={() => setShowMood(true)}
        >
          <div className=" w-[35px] h-[35px] bg-white_100 rounded-full flex items-center justify-center">
            <FaRegMoon size={20} />
          </div>
          <p className="cursor-pointer font-gilroySemibold text-sm text-black group-hover:text-secondary_color transition-all duration-300">
            Display & Accessability
          </p>
        </div>
        <div className="flex gap-8 mt-5 group ">
          <div className="ml-1 ">
            <CiLogout size={25} />
          </div>
          <p
            onClick={handleLogOut}
            className="cursor-pointer font-gilroySemibold text-base text-black group-hover:text-secondary_color transition-all duration-300"
          >
            Log Out
          </p>
        </div>
      </div>
    </>
  );
};

export default SettingOption;
