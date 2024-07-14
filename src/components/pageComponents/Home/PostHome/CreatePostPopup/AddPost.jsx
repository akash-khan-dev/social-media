import { MdOutlinePermMedia } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";

const AddPost = () => {
  return (
    <>
      <div>
        <div className="flex items-center justify-between border border-line_color px-3 py-1 rounded-md">
          <p className="font-gilroyMedium text-lg text-black">
            Add to your post
          </p>
          <div className="flex gap-x-2">
            <div className="w-[40px] h-[40px] hover:bg-white_100 rounded-full flex justify-center items-center transition-all duration-200 cursor-pointer">
              <MdOutlinePermMedia size={24} />
            </div>
            <div className="w-[40px] h-[40px] hover:bg-white_100 rounded-full flex justify-center items-center transition-all duration-200 cursor-pointer">
              <CiVideoOn size={24} />
            </div>
            <div className="w-[40px] h-[40px] hover:bg-white_100 rounded-full flex justify-center items-center transition-all duration-200 cursor-pointer">
              <FaRegUserCircle size={24} />
            </div>
          </div>
        </div>
        <div className="mt-2">
          <button className="py-2 w-full bg-white_100 hover:bg-black font-gilroySemibold text-lg text-black hover:text-white rounded-md transition-all duration-300">
            Post Now
          </button>
        </div>
      </div>
    </>
  );
};

export default AddPost;
