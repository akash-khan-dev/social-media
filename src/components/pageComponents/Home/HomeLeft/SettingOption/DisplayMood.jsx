import { FaRegMoon } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";

const DisplayMood = () => {
  return (
    <>
      <div className="shadow-md p-5 ml-5">
        <div className="mb-3 flex gap-3 items-center">
          <IoMdArrowBack size={22} />

          <p className="cursor-pointer font-gilroyBold text-md text-black group-hover:text-secondary_color transition-all duration-300">
            Display & Accessability
          </p>
        </div>
        <div className="flex gap-3 mb-3">
          <div className="w-[17%]">
            <div className="w-[35px] h-[35px] bg-white_100 rounded-full flex items-center justify-center">
              <FaRegMoon />
            </div>
          </div>
          <div className="w-[85%]">
            <h4 className="cursor-pointer font-gilroyBold text-md text-black ">
              Dark Mood
            </h4>
            <p className="font-gilroyNormal text-secondary_color text-sm">
              Lorem ipsum dolor sit amet sit amet sit amet.
            </p>
            <div className="mt-1">
              <div className="flex justify-between mb-1">
                <label
                  htmlFor="dark"
                  className="font-gilroySemibold text-md text-black"
                >
                  On
                </label>
                <input id="dark" type="radio" name="darkmood" />
              </div>
              <div className="flex flex justify-between">
                <label
                  htmlFor="white"
                  className="font-gilroySemibold text-md text-black"
                >
                  Off
                </label>
                <input id="white" type="radio" name="darkmood" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayMood;
