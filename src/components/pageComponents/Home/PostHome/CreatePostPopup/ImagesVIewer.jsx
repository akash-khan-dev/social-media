/* eslint-disable react/prop-types */
import { useRef } from "react";
import EmojiPickers from "./EmojiPickers";
import { FaRegTimesCircle } from "react-icons/fa";
import { FaRegImage } from "react-icons/fa";

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

      <div className="border border-line_color p-2 mb-2 mt-5 rounded-md">
        <div className="w-full h-[250px] bg-white_100 rounded-md relative">
          <input
            type="file"
            ref={chooseFile}
            onChange={handleImageUpload}
            multiple
            accept="image/jpeg,image/png,image/webp,image/gif"
            className="hidden"
          />
          {postImage && postImage.length ? (
            postImage.map((img, i) => (
              <div key={i} className="w-full h-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={img}
                  alt="image"
                />
              </div>
            ))
          ) : (
            <div>
              <div className="absolute top-2 right-2">
                <FaRegTimesCircle
                  size={25}
                  className="text-secondary_color cursor-pointer "
                />
              </div>
              <div
                onClick={() => chooseFile.current.click()}
                className="flex items-center justify-center h-[250px] cursor-pointer"
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
