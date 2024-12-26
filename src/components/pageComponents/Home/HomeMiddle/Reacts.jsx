/* eslint-disable react/prop-types */

import { reactEmoji } from "./reactEmoji";

const Reacts = ({ setShowReactEmoji, handleReacts }) => {
  const emojis = reactEmoji();

  return (
    <>
      <div
        className="flex gap-1"
        onMouseOver={() =>
          setTimeout(() => {
            setShowReactEmoji(true);
          }, 600)
        }
        onMouseLeave={() =>
          setTimeout(() => {
            setShowReactEmoji(false);
          }, 600)
        }
      >
        {emojis.map((react, i) => (
          <img
            onClick={() => handleReacts(react.name)}
            key={i}
            src={react.image}
            alt="react"
            className="w-11 h-11 cursor-pointer scale-[1] hover:scale-[1.2] transition duration-300"
          />
        ))}
      </div>
    </>
  );
};

export default Reacts;
