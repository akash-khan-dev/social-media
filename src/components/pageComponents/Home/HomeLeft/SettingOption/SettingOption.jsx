import { FaRegMoon } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { useState } from "react";
import DisplayMood from "./DisplayMood";
const SettingOption = () => {
  const [showMood, setShowMood] = useState(false);

  if (showMood) {
    return <DisplayMood setShowMood={setShowMood} />;
  }
  return (
    <>
      <div className="shadow-md p-5 ml-5">
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
          <p className="cursor-pointer font-gilroySemibold text-base text-black group-hover:text-secondary_color transition-all duration-300">
            Log Out
          </p>
        </div>
      </div>
    </>
  );
};

export default SettingOption;
