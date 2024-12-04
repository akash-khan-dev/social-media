/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import avatar from "../../../../../public/postBackgrounds/man.jpg";
import { MdOutlineEmojiEmotions, MdOutlinePermMedia } from "react-icons/md";
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
  const [emojiPicker, setEmojiPicker] = useState(false);
  const [cursorPosition, setCursorPosition] = useState();
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
                  size={25}
                  className="text-secondary_color cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default CreateComments;
