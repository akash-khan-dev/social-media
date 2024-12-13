/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import OutSideClick from "../../../../utils/Click";
import { FaPlus } from "react-icons/fa6";
import UploadProfilePicture from "./UploadProfilePicture";
import { useSelector } from "react-redux";
import { ToastError } from "../../../../utils/ToastError";
import { ToastContainer } from "react-toastify";

const ProfilePictureUpload = ({
  imageData,
  uploadProfileRef,
  showUploadProfile,
  setShowUploadProfile,
}) => {
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const chooseRef = useRef(null);
  const chooseFile = useRef(null);
  const userInfo = useSelector((state) => state.userInformation.userInfo);
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
      return ToastError(
        `${files.name} unsupported file only jpeg, png, gif,jpg and webp`
      );
    } else if (files.size > 1024 * 1024 * 5) {
      ToastError(`${files.name} is to larger ! please atleast 5MB file `);
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
      <ToastContainer />
      <div className="fixed top-0 left-0 w-full bg-blur h-screen flex items-center justify-center z-50">
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
          <div className="w-full h-[250px] px-3 overflow-y-auto">
            <h3 className="font-gilroyNormal font-lg font-black">
              Profile Photos
            </h3>
            <span className="font-gilroyMedium text-base text-secondary_color lining-[20px]">
              Total (
              {
                imageData?.filter(
                  (img) =>
                    img.asset_folder ===
                    `${userInfo.username.replace(/\s+/g, "_")}/profile_picture`
                ).length
              }
              )
            </span>
            <div className="grid grid-cols-5 gap-2 mt-2">
              {imageData
                ?.filter(
                  (img) =>
                    img.asset_folder ===
                    `${userInfo.username.replace(/\s+/g, "_")}/profile_picture`
                )
                .map((file, i) => (
                  <div key={i}>
                    <img
                      onClick={() => setImage(file.secure_url)}
                      src={file.secure_url}
                      alt="profile"
                      className="w-full h-[100px] object-cover cursor-pointer"
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className="w-full h-[300px] mt-3 px-3 overflow-y-auto">
            <h3 className="font-gilroyNormal font-lg font-black">
              Other photos
            </h3>
            <span className="font-gilroyMedium text-base text-secondary_color lining-[20px]">
              Total (
              {
                imageData?.filter(
                  (img) =>
                    img.asset_folder !==
                    `${userInfo.username.replace(/\s+/g, "_")}/profile_picture`
                ).length
              }
              )
            </span>
            <div className="grid grid-cols-5 gap-2 mt-2">
              {imageData
                ?.filter(
                  (img) =>
                    img.asset_folder !==
                    `${userInfo.username.replace(/\s+/g, "_")}/profile_picture`
                )
                .map((file, i) => (
                  <div key={i}>
                    <img
                      onClick={() => setImage(file.secure_url)}
                      src={file.secure_url}
                      alt="profile"
                      className="w-full h-[100px] object-cover cursor-pointer"
                    />
                  </div>
                ))}
            </div>
          </div>
          {image && (
            <div>
              <UploadProfilePicture
                uploadProfileRef={uploadProfileRef}
                setShowUploadProfile={setShowUploadProfile}
                image={image}
                setImage={setImage}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfilePictureUpload;
