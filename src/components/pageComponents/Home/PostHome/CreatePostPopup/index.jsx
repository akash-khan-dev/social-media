import { Crose } from "../../../../../svg/crose";
import AddPost from "./AddPost";
import { useRef, useState } from "react";
import EmojiPick from "./EmojiPick";

const CreatePostPopup = () => {
  const textRef = useRef(null);
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
            <div className="mt-3">
              <textarea
                ref={textRef}
                value={textState}
                onChange={(e) => setTextState(e.target.value)}
                className="w-full min-h-20 focus:outline-none font-gilroyNormal text-lg text-black"
                name=""
                placeholder="What's your mind ?"
                id=""
              ></textarea>
            </div>
            <div className="flex items-center justify-between mb-2">
              <div className="w-[40px] h-[40px] bg-gradient-to-r to-cyan-100 from-purple-100 rounded-md"></div>
              <EmojiPick
                textRef={textRef}
                setTextState={setTextState}
                textState={textState}
              />
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
