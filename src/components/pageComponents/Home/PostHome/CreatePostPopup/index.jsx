import { useState } from "react";
import { Crose } from "../../../../../svg/crose";
import AddPost from "./AddPost";
import EmojiPickers from "./EmojiPickers";
import ImagesVIewer from "./ImagesVIewer";

const CreatePostPopup = () => {
  const [showImageViewer, setShowImageViewer] = useState(true);
  const [textState, setTextState] = useState("");
  return (
    <>
      <div className="absolute top-0 left-0 w-full bg-blur h-screen flex items-center justify-center z-20">
        <div className="w-[30%] shadow-md bg-white relative">
          <div className="absolute top-2 right-3 text-purple-100 cursor-pointer">
            <Crose />
          </div>
          <div className="border-b border-line_color p-2">
            <h3 className="font-gilroyBold text-lg text-black text-center">
              Create Post
            </h3>
          </div>
          <div className="p-4">
            <div className=" flex items-center gap-3">
              <div className="w-[50px] h-[50px] bg-black rounded-full"></div>
              <div>
                <h2 className="font-gilroySemibold text-xl">MD Akash khan</h2>
              </div>
            </div>
            {showImageViewer ? (
              <>
                <ImagesVIewer
                  textState={textState}
                  setTextState={setTextState}
                  changePart={showImageViewer}
                />
                <div>
                  <AddPost />
                </div>
              </>
            ) : (
              <>
                <EmojiPickers
                  textState={textState}
                  setTextState={setTextState}
                />
                <div>
                  <AddPost />
                </div>
              </>
            )}

            <div className="mt-2">
              <button className="py-2 w-full bg-white_100 hover:bg-black font-gilroySemibold text-lg text-black hover:text-white rounded-md transition-all duration-300">
                Post Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePostPopup;
