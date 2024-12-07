import React, { useRef, useState } from "react";
import { BsCamera } from "react-icons/bs";
import cover from "../../../../public/postBackgrounds/cover.png";
import { MdModeEditOutline } from "react-icons/md";
import { AiOutlineCloudUpload } from "react-icons/ai";
import OutSideClick from "../../../utils/Click";
const Cover = ({ coverImg }) => {
  const [showOption, setShowOption] = useState(false);
  const choseFile = useRef(null);

  OutSideClick(choseFile, () => {
    setShowOption(false);
  });
  return (
    <div>
      <div className="w-full h-[350px] bg-line_color rounded-tl-md rounded-tr-md overflow-hidden ">
        <img
          src={coverImg || cover}
          alt="cover"
          className="w-full h-full object-cover"
        />
      </div>
      <div
        onClick={() => setShowOption(!showOption)}
        className="absolute top-2 right-2 px-3 rounded-lg py-2 flex items-center gap-2 bg-white text-secondary_color cursor-pointer"
      >
        <BsCamera />
        <span className="font-gilroyMedium text-base">Edit Photo</span>
      </div>
      {showOption && (
        <div
          ref={choseFile}
          className="absolute top-12 right-5 bg-white shadow-md rounded-md overflow-hidden"
        >
          <div className="px-6 py-1 flex items-center gap-2 cursor-pointer text-secondary_color hover:bg-black hover:text-white transition duration-300">
            <MdModeEditOutline />
            <span className="font-gilroySemibold text-base">Edit Cover</span>
          </div>
          <div className="px-6 py-1 flex items-center gap-2 cursor-pointer text-secondary_color hover:bg-black hover:text-white transition duration-300">
            <AiOutlineCloudUpload />
            <span className="font-gilroySemibold text-base">Upload</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cover;
