import React from "react";
import { FaList } from "react-icons/fa";
import { CiGrid41 } from "react-icons/ci";
const ProfilePostView = ({ setPostView, postView }) => {
  return (
    <>
      <div className="w-full rounded-md shadow-md">
        <div className="border-b border-line_color">
          <h4 className="font-gilroySemibold text-lg text-black pl-3">Post</h4>
        </div>
        <div className="flex px-20 mt-2 ">
          <div
            onClick={() => setPostView("list")}
            className={`${
              postView === "list" && "border-b-2 border-blue"
            } w-1/2 flex justify-center items-center gap-x-2 text-secondary_color cursor-pointer pb-2 border-b-2 border-white`}
          >
            <FaList className={`${postView === "grid" && "text-blue"} `} />
            <span
              className={`${
                postView === "grid" && "text-blue"
              } font-gilroyMedium text-base `}
            >
              List View
            </span>
          </div>
          <div
            onClick={() => setPostView("grid")}
            className={`${
              postView === "grid" && "border-b-2 border-blue "
            } w-1/2 flex items-center gap-x-2 text-secondary_color justify-center cursor-pointer  pb-2 border-b-2 border-white`}
          >
            <CiGrid41 className={`${postView === "grid" && "text-blue"} `} />
            <span
              className={`${
                postView === "grid" && "text-blue"
              } font-gilroyMedium text-base `}
            >
              Grid View
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePostView;
