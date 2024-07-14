/* eslint-disable react/prop-types */
import EmojiPicker from "emoji-picker-react";
import { useEffect, useState } from "react";
import { BsEmojiFrown } from "react-icons/bs";

const EmojiPick = ({ textRef, setTextState, textState }) => {
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
    </>
  );
};

export default EmojiPick;
