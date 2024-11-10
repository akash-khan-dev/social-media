/* eslint-disable react/prop-types */
import { CiVideoOn, CiLight } from "react-icons/ci";
import { PiImagesThin } from "react-icons/pi";
const HomeMiddle = ({ setPostPopupVisible }) => {
  return (
    <>
      <div className="w-full h-60 mt-3">
        <div className="py-5 px-3 bg-white_100 rounded-md mt-6">
          <div className="flex items-center justify-center py-2 bg-white rounded-full">
            <div className="w-[7%]">
              <div className="w-12 h-12 bg-black rounded-full"></div>
            </div>

            <div onClick={() => setPostPopupVisible(true)} className="w-[90%]">
              <input
                type="text"
                placeholder="What's on your mind ?"
                className="w-[70%] focus:outline-none"
              />
            </div>
          </div>
          <div className=" border-t border-white mt-6">
            <div className="flex justify-around mt-6">
              <div className="flex items-center gap-2">
                <CiVideoOn size={25} />
                <p className="font-gilroyMedium text-lg text-black">
                  Live Video
                </p>
              </div>
              <div className="flex items-center gap-2">
                <PiImagesThin size={25} />
                <p className="font-gilroyMedium text-lg text-black">
                  Image/Gallery
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CiLight size={25} />
                <p className="font-gilroyMedium text-lg text-black">
                  Activities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMiddle;
