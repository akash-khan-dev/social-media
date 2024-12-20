/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import EmojiPicker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";
import { BsEmojiFrown } from "react-icons/bs";
import { postBackgrounds } from "./postBackgorund";

const EmojiPickers = ({
  textState,
  setTextState,
  changePart,
  setBackground,
  background,
}) => {
  const textRef = useRef(null);
  const bgRef = useRef(null);
  const [showPicker, setShowPicker] = useState(false);
  const [cursorPosition, setCursorPosition] = useState();
  const [showBg, setShowBg] = useState(false);

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

  // for post background
  const handleBackground = (index) => {
    bgRef.current.style.background = `url(${postBackgrounds[index]})`;
    bgRef.current.classList.add("bgPost");
    setBackground(postBackgrounds[index]);
    textRef.current.focus();
  };
  // for remove background
  const handleRemoveBackground = () => {
    bgRef.current.style.background = "";
    setBackground("");
    bgRef.current.classList.remove("bgPost");
    textRef.current.focus();
  };
  return (
    <>
      <div className={`${changePart ? "flex justify-between mt-3" : "mt-3"}`}>
        <div
          ref={bgRef}
          className={`${changePart ? "w-11/12 min-h-14" : "min-h-14"}`}
        >
          <textarea
            ref={textRef}
            value={textState}
            onChange={(e) => setTextState(e.target.value)}
            className={`${
              changePart
                ? "w-full focus:outline-none font-gilroyNormal text-lg text-black"
                : "w-full focus:outline-none font-gilroyNormal text-lg text-black bg-transparent p-2 "
            }`}
            style={{
              paddingTop: `${
                background
                  ? Math.abs(textRef.current.value.length * 0.1 - 25)
                  : "0"
              }%`,
            }}
            name=""
            placeholder="What's your mind ?"
            id=""
          ></textarea>
        </div>
        {changePart && (
          <div className="relative cursor-pointer">
            <BsEmojiFrown
              onClick={() => setShowPicker((prev) => !prev)}
              size={24}
            />
            {showPicker && (
              <div
                className={`${
                  changePart
                    ? "absolute top-[10px] -left-[350px] z-20"
                    : "absolute -top-[400px] -left-[100px] z-20"
                }`}
              >
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
        <div className="flex items-center justify-between my-2">
          <div className="flex items-center gap-x-1">
            <div
              onClick={() => setShowBg((prev) => !prev)}
              className="cursor-pointer w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] bg-gradient-to-r to-cyan-100 from-purple-100 rounded-md"
            ></div>
            <div className="flex items-center gap-x-1">
              {showBg && (
                <>
                  <div
                    onClick={handleRemoveBackground}
                    className="cursor-pointer w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] bg-white rounded-md border border-line_color"
                  ></div>
                  {postBackgrounds.map((item, index) => (
                    <img
                      onClick={() => handleBackground(index)}
                      key={index}
                      src={item}
                      alt="background"
                      className="w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] rounded-md cursor-pointer"
                    />
                  ))}
                </>
              )}
            </div>
          </div>
          <div className="relative cursor-pointer">
            <BsEmojiFrown
              onClick={() => setShowPicker((prev) => !prev)}
              size={24}
            />
            {showPicker && (
              <div className="absolute -left-[300px] -top-[400px] lg:-left-[100px] z-20">
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
