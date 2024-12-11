/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import OutSideClick from "../../../../utils/Click";
import { FaPlus } from "react-icons/fa6";
import UploadProfilePicture from "./UploadProfilePicture";

const ProfilePictureUpload = ({ showUploadProfile, setShowUploadProfile }) => {
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const chooseRef = useRef(null);
  const chooseFile = useRef(null);
  OutSideClick(chooseRef, () => {
    setShowUploadProfile(false);
  });

  const handleCommentImgUpload = (e) => {
    const files = e.target.files[0];
    if (
      files.type !== "image/png" &&
      files.type !== "image/jpeg" &&
      files.type !== "image/jpg" &&
      files.type !== "image/webp" &&
      files.type !== "image/gif"
    ) {
      setError(
        `${files.name} unsupported file only jpeg, png, gif,jpg and webp`
      );
      return;
    } else if (files.size > 1024 * 1024 * 5) {
      setError(`${files.name} is to larger ! please atleast 5MB file `);
    }
    const readFiles = new FileReader();
    readFiles.readAsDataURL(files);
    readFiles.onload = (finishRead) => {
      setImage(finishRead.target.result);
    };
  };
  useEffect(() => {
    const body = document.body;

    if (showUploadProfile) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }

    return () => {
      body.classList.remove("no-scroll");
    };
  }, [showUploadProfile]);
  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-blur h-screen flex items-center justify-center z-20">
        <div ref={chooseRef} className="w-[35%] shadow-md bg-white relative">
          <div
            onClick={() => setShowUploadProfile(false)}
            className="absolute top-2 right-3 text-purple-100 cursor-pointer"
          >
            <IoCloseCircleOutline className="text-black" size={27} />
          </div>
          <div className="border-b border-line_color p-2">
            <h3 className="font-gilroyBold text-lg text-black text-center">
              Upload Profile
            </h3>
          </div>
          <div
            onClick={() => chooseFile.current.click()}
            className="w-1/2 py-2 mx-auto bg-blue rounded-md flex gap-x-2 items-center justify-center my-4 hover:shadow-md transition duration-300 text-white cursor-pointer"
          >
            <FaPlus />
            <span>Upload Photo</span>
            <input
              ref={chooseFile}
              type="file"
              hidden
              accept="image/jpeg,image/png,image/webp,image/gif"
              onChange={handleCommentImgUpload}
            />
          </div>
          <div className="w-full h-[300px]">for old profile</div>
          {image && (
            <div>
              <UploadProfilePicture image={image} setImage={setImage} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfilePictureUpload;