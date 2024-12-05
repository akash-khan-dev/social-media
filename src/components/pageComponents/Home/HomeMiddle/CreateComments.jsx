/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
import avatar from "../../../../../public/postBackgrounds/man.jpg";
import {
  MdOutlineCancel,
  MdOutlineEmojiEmotions,
  MdOutlinePermMedia,
} from "react-icons/md";
import EmojiPicker from "emoji-picker-react";

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
  const imgRef = useRef(null);
  const [emojiPicker, setEmojiPicker] = useState(false);
  const [cursorPosition, setCursorPosition] = useState();

  //   ============for emoji picker===========
  const handleEmojiClick = ({ emoji }, e) => {
    const ref = inputRef.current;
    ref.focus();
    const textStart = commentText.substring(0, ref.selectionStart);
    const textEnd = commentText.substring(ref.selectionEnd);
    const newText = textStart + emoji + textEnd;
    setCommentText(newText);
    setCursorPosition(textStart.length + emoji.length);
  };
  useEffect(() => {
    inputRef.current.selectionEnd = cursorPosition;
  }, [cursorPosition, inputRef]);

  //   ==============for comment img upload=====
  const handleCommentImgUpload = (e) => {
    const files = e.target.files[0];
    if (
      files.type !== "image/png" &&
      files.type !== "image/jpeg" &&
      files.type !== "image/jpg" &&
      files.type !== "image/webp" &&
      files.type !== "image/gif"
    ) {
      setCommentError(
        `${files.name} unsupported file only jpeg, png, gif,jpg and webp`
      );
      return;
    } else if (files.size > 1024 * 1024 * 5) {
      setCommentError(`${files.name} is to larger ! please atleast 5MB file `);
    }
    const readFiles = new FileReader();
    readFiles.readAsDataURL(files);
    readFiles.onload = (finishRead) => {
      setCommentImage(finishRead.target.result);
    };
  };

  return (
    <div className="relative">
      <div className="mt-2 ">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full overflow-hidden object-cover">
            <img src={userInfo.profilePicture || avatar} alt="profile" />
          </div>
          <div className="w-[92%] bg-white_100 py-2 px-3 rounded-full flex items-start ">
            <input
              ref={imgRef}
              type="file"
              hidden
              accept="image/jpeg,image/png,image/webp,image/gif"
              onChange={handleCommentImgUpload}
            />
            <input
              ref={inputRef}
              type="text"
              placeholder={`Comment ${userInfo.username}`}
              className="bg-transparent outline-none w-full"
              onChange={(e) => setCommentText(e.target.value)}
              value={commentText}
            />
            <div className="flex gap-2 relative">
              <div>
                <MdOutlineEmojiEmotions
                  size={28}
                  className="text-secondary_color cursor-pointer"
                  onClick={() => setEmojiPicker((prev) => !prev)}
                />
                {emojiPicker && (
                  <div className="absolute -top-[380px] -left-[300px]">
                    <EmojiPicker
                      onEmojiClick={handleEmojiClick}
                      height={370}
                      width={350}
                    />
                  </div>
                )}
              </div>
              <div>
                <MdOutlinePermMedia
                  onClick={() => imgRef.current.click()}
                  size={25}
                  className="text-secondary_color cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
        {commentImage && (
          <div className="mt-2">
            <div className="w-24 h-24 overflow-hidden rounded-sm relative">
              <img
                src={commentImage}
                alt="comment"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1 right-1 w-5 h-5 bg-white_100 flex items-center justify-center rounded-full cursor-pointer ">
                <MdOutlineCancel onClick={() => setCommentImage("")} />
              </div>
            </div>
          </div>
        )}
      </div>
      {commentError && (
        <div className="h-full w-full bg-blur absolute top-0 left-2/4 -translate-x-2/4 z-10 flex items-center justify-center gap-x-4">
          <p className="text-red font-gilroySemibold text-sm mb-0">
            {commentError}
          </p>
          <button
            onClick={() => setCommentError("")}
            className="px-4 py-1 rounded-md font-gilroyNormal text-base text-white mt-2 bg-blue"
          >
            Try again
          </button>
        </div>
      )}
    </div>
  );
};

export default CreateComments;
