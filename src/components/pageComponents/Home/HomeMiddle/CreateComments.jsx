/* eslint-disable react/prop-types */
import React from "react";
import avatar from "../../../../../public/postBackgrounds/man.jpg";
import { MdOutlineEmojiEmotions, MdOutlinePermMedia } from "react-icons/md";

const CreateComments = ({
  userInfo,
  commentText,
  setCommentText,
  commentImage,
  setCommentImage,
  commentError,
  setCommentError,
  inputRef,
}) => {
  return (
    <>
      <div className="mt-2 ">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 rounded-full overflow-hidden object-cover">
            <img src={userInfo.profilePicture || avatar} alt="profile" />
          </div>
          <div className="w-[92%] bg-white_100 py-2 px-3 rounded-full flex items-start ">
            <input
              ref={inputRef}
              type="text"
              placeholder={`Comment ${userInfo.username}`}
              className="bg-transparent outline-none w-full"
              onChange={(e) => setCommentText(e.target.value)}
              value={commentText}
            />
            <div className="flex gap-2">
              <MdOutlineEmojiEmotions
                size={28}
                className="text-secondary_color cursor-pointer"
              />
              <MdOutlinePermMedia
                size={25}
                className="text-secondary_color cursor-pointer"
              />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default CreateComments;
