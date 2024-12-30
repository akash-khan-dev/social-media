/* eslint-disable react/prop-types */
import React, { useRef, useState } from "react";
import OutSideClick from "../../../../../utils/Click";
import MenuList from "./MenuList";
import { TiPin } from "react-icons/ti";
import { HiSave } from "react-icons/hi";
import { MdEdit } from "react-icons/md";
import { IoMdCloudDownload } from "react-icons/io";
import { AiOutlineFullscreen } from "react-icons/ai";
import { FaTrash } from "react-icons/fa6";
import { saveAs } from "file-saver";
import { useSavePostMutation } from "../../../../../StateFeature/api/authApi";
const PostMenu = ({
  setCheckSavePost,
  checkSavePost,
  postId,
  setShowOption,
  postInfo,
  userInfo,
  postImg,
}) => {
  const [checkUser, setCheckUser] = useState(
    postInfo === userInfo.id ? true : false
  );
  const [savePost] = useSavePostMutation();
  const outSide = useRef(null);
  OutSideClick(outSide, () => {
    setShowOption(false);
  });
  const handleSavePost = async () => {
    savePost(postId);
    if (checkSavePost) {
      setCheckSavePost(false);
    } else {
      setCheckSavePost(true);
    }
  };

  const handleDownload = () => {
    postImg.map((img) => {
      saveAs(img.url, "image.jpg");
    });
  };
  return (
    <div
      ref={outSide}
      className="absolute top-10 z-10 bg-white rounded-lg right-3 shadow-md w-[250px]"
    >
      <div>
        {checkUser && <MenuList icon={TiPin} text="Pin Post" />}

        <div onClick={handleSavePost}>
          {checkSavePost ? (
            <MenuList icon={HiSave} text="UnSave Post" />
          ) : (
            <MenuList icon={HiSave} text="Save Post" />
          )}
        </div>
        {checkUser && <MenuList icon={MdEdit} text="Edit Post" />}
        {postImg && postImg.length && (
          <div onClick={handleDownload}>
            <MenuList icon={IoMdCloudDownload} text="Download" />
          </div>
        )}
        {postImg && postImg.length && (
          <MenuList icon={AiOutlineFullscreen} text="Enter Full Screen" />
        )}
        {checkUser && <MenuList icon={FaTrash} text="Delete Post" />}
      </div>
    </div>
  );
};

export default PostMenu;
