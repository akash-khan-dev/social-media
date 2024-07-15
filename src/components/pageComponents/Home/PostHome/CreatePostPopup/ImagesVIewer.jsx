/* eslint-disable react/prop-types */
import EmojiPickers from "./EmojiPickers";

const ImagesVIewer = ({ textState, setTextState, changePart }) => {
  return (
    <>
      <EmojiPickers
        textState={textState}
        setTextState={setTextState}
        changePart={changePart}
      />
    </>
  );
};

export default ImagesVIewer;
