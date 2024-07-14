import { Crose } from "../../../../../svg/crose";
import AddPost from "./AddPost";
import { BsEmojiFrown } from "react-icons/bs";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

const CreatePostPopup = () => {
  const [showPicker, setShowPicker] = useState(false);
  return (
    <>
      <div className="absolute top-0 left-0 w-full bg-blur h-screen flex items-center justify-center">
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
            <div className="mt-3">
              <textarea
                className="w-full min-h-20 focus:outline-none"
                name=""
                placeholder="What's your mind ?"
                id=""
              ></textarea>
            </div>
            <div className="flex items-center justify-between mb-2">
              <div className="w-[40px] h-[40px] bg-gradient-to-r to-cyan-100 from-purple-100 rounded-md"></div>
              <div className="relative cursor-pointer">
                <BsEmojiFrown
                  onClick={() => setShowPicker((prev) => !prev)}
                  size={24}
                />
                {showPicker && (
                  <div className="absolute -top-[400px] -left-[360px] z-20">
                    <EmojiPicker />
                  </div>
                )}
              </div>
            </div>
            <div>
              <AddPost />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePostPopup;
