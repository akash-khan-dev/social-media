/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import EmojiPicker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";
import { BsEmojiFrown } from "react-icons/bs";

const EmojiPickers = ({ textState, setTextState, changePart }) => {
  const textRef = useRef(null);
  const [showPicker, setShowPicker] = useState(false);
  const [cursorPosition, setCursorPosition] = useState();

  const handleEmojiClick = ({ emoji }, e) => {
    const ref = textRef.current;
    ref.focus();
    const textStart = textState.substring(0, ref.selectionStart);
    const textEnd = textState.substring(ref.selectionEnd);
    const newText = textStart + emoji + textEnd;
    setTextState(newText);
    setCursorPosition(textStart.length + emoji.length);
  };

  useEffect(() => {
    textRef.current.selectionEnd = cursorPosition;
  }, [cursorPosition, textRef]);
  return (
    <>
      <div className={`${changePart ? "flex justify-between mt-3" : "mt-3"}`}>
        <textarea
          ref={textRef}
          value={textState}
          onChange={(e) => setTextState(e.target.value)}
          className={`${
            changePart
              ? "w-11/12 min-h-14 focus:outline-none font-gilroyNormal text-lg text-black"
              : "w-full min-h-20 focus:outline-none font-gilroyNormal text-lg text-black"
          }`}
          name=""
          placeholder="What's your mind ?"
          id=""
        ></textarea>
        {changePart && (
          <div className="relative cursor-pointer">
            <BsEmojiFrown
              onClick={() => setShowPicker((prev) => !prev)}
              size={24}
            />
            {showPicker && (
              <div className="absolute -top-[400px] -left-[100px] z-20">
                <EmojiPicker
                  onEmojiClick={handleEmojiClick}
                  height={390}
                  width={350}
                />
              </div>
            )}
          </div>
        )}
      </div>
      {!changePart && (
        <div className="flex items-center justify-between mb-2">
          <div className="w-[40px] h-[40px] bg-gradient-to-r to-cyan-100 from-purple-100 rounded-md"></div>
          <div className="relative cursor-pointer">
            <BsEmojiFrown
              onClick={() => setShowPicker((prev) => !prev)}
              size={24}
            />
            {showPicker && (
              <div className="absolute -top-[400px] -left-[100px] z-20">
                <EmojiPicker
                  onEmojiClick={handleEmojiClick}
                  height={390}
                  width={350}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default EmojiPickers;
