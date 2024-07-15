/* eslint-disable react/prop-types */
import { useRef } from "react";
import EmojiPickers from "./EmojiPickers";
import { FaRegTimesCircle } from "react-icons/fa";
import { FaRegImage } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const ImagesVIewer = ({
  textState,
  setTextState,
  changePart,
  postImage,
  setPostImage,
}) => {
  const chooseFile = useRef(null);

  const handleImageUpload = (e) => {
    const file = Array.from(e.target.files);
    file.forEach((img) => {
      if (
        img.type !== "image/png" &&
        img.type !== "image/jpeg" &&
        img.type !== "image/webp" &&
        img.type !== "image/gif"
      ) {
        console.log("image not supported");
      }

      const readerFile = new FileReader();
      readerFile.readAsDataURL(img);
      readerFile.onload = (readerImg) => {
        setPostImage((prevImg) => [...prevImg, readerImg.target.result]);
      };
    });
  };

  return (
    <>
      <EmojiPickers
        textState={textState}
        setTextState={setTextState}
        changePart={changePart}
      />

      <div className="border border-line_color p-2 mb-2 mt-5 rounded-md overflow-hidden">
        <div className="w-full min-h-[200px] max-h-[350px] bg-white_100 rounded-md relative">
          <input
            type="file"
            ref={chooseFile}
            onChange={handleImageUpload}
            multiple
            accept="image/jpeg,image/png,image/webp,image/gif"
            className="hidden"
          />
          {postImage && postImage.length ? (
            <div className="relative">
              <div
                onClick={() => chooseFile.current.click()}
                className="flex items-center gap-3 bg-white cursor-pointer w-48 absolute top-2 left-2 px-2 py-1 rounded-md "
              >
                <FaRegImage size={25} className="text-black" />
                <p className="font-gilroyMedium text-base text-black">
                  Add photo/video
                </p>
              </div>
              <div className="absolute top-3 right-3 w-[30px] h-[30px] bg-blur cursor-pointer rounded-full flex items-center justify-center">
                <RxCross2 />
              </div>
              <div
                className={` ${
                  postImage.length === 1
                    ? "w-full h-full overflow-hidden"
                    : postImage.length === 2
                    ? "overflow-hidden w-full h-full grid grid-cols-2 gap-2"
                    : postImage.length === 3
                    ? " overflow-hidden w-full h-full grid grid-cols-2 gap-2"
                    : postImage.length === 4
                    ? "overflow-hidden w-full h-full grid grid-cols-2 gap-2"
                    : postImage.length >= 5
                    ? "overflow-hidden w-full h-full grid grid-cols-2 gap-2"
                    : "overflow-hidden"
                }`}
              >
                {postImage.slice(0, 4).map((img, i) => (
                  <img
                    key={i}
                    className={`${
                      postImage.length === 3
                        ? "[&:nth-of-type(1)]:row-start-1 [&:nth-of-type(1)]:row-end-3"
                        : postImage.length === 4 &&
                          "[&:nth-of-type(1)]:row-start-2 [&:nth-of-type(1)]:row-end-3"
                    } w-full h-full object-cover`}
                    src={img}
                    alt="image"
                  />
                ))}
                {postImage.length > 4 && (
                  <div className="absolute bottom-14 right-24 w-[45px] h-[45px] bg-blur rounded-full flex items-center justify-center">
                    <span className="font-gilroyMedium text-lg">
                      +{postImage.length - 4}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div>
              <div className="absolute top-2 right-2 z-30">
                <FaRegTimesCircle
                  size={25}
                  className="text-secondary_color cursor-pointer "
                />
              </div>
              <div
                onClick={() => chooseFile.current.click()}
                className="flex items-center justify-center h-[350px] cursor-pointer"
              >
                <div className="flex flex-col items-center">
                  <div className="w-[50px] h-[50px] bg-black rounded-full flex items-center justify-center">
                    <FaRegImage size={25} className="text-white" />
                  </div>
                  <div>
                    <p className="text-center font-gilroyMedium text-base text-black mt-2">
                      Add photos / videos
                    </p>
                    <p className="text-center font-gilroyMedium text-base text-black">
                      or drag and drop
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ImagesVIewer;
