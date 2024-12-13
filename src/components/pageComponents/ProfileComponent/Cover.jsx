/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
import { BsCamera } from "react-icons/bs";
import cover from "../../../../public/postBackgrounds/cover.png";
import { MdModeEditOutline } from "react-icons/md";
import { AiOutlineCloudUpload } from "react-icons/ai";
import OutSideClick from "../../../utils/Click";
import { ToastError } from "../../../utils/ToastError";
import { ToastContainer } from "react-toastify";
import Cropper from "react-easy-crop";
const Cover = ({ coverImg, visitor }) => {
  const [showOption, setShowOption] = useState(false);
  const [error, setError] = useState("");
  const [coverPhoto, setCoverPhoto] = useState("");
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [width, setWidth] = useState(null);
  const [croppedArePixels, setCroppedArePixels] = useState(null);
  const choseFile = useRef(null);
  const chooseInput = useRef(null);
  const coverWith = useRef(null);

  OutSideClick(choseFile, () => {
    setShowOption(false);
  });
  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedArePixels(croppedAreaPixels);
  };
  useEffect(() => {
    setWidth(coverWith.current.clientWidth);
  }, [window.innerWidth]);
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
      return ToastError(
        `${files.name} is to larger ! please atleast 5MB file `
      );
    }
    const readFiles = new FileReader();
    readFiles.readAsDataURL(files);
    readFiles.onload = (finishRead) => {
      setCoverPhoto(finishRead.target.result);
    };
  };
  return (
    <div>
      <ToastContainer />
      <div
        ref={coverWith}
        className="w-full h-[350px] bg-line_color rounded-tl-md rounded-tr-md overflow-hidden relative "
      >
        <img
          src={coverImg || cover}
          alt="cover"
          className="w-full h-full object-cover"
        />
        {coverPhoto && (
          <div className="cover_cropper">
            <Cropper
              image={coverPhoto}
              crop={crop}
              zoom={zoom}
              aspect={width / 350}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
              objectFit="horizontal-cover"
            />
          </div>
        )}
      </div>
      {visitor && (
        <div
          onClick={() => setShowOption(!showOption)}
          className="absolute top-2 right-2 px-3 rounded-lg py-2 flex items-center gap-2 bg-white text-secondary_color cursor-pointer"
        >
          <BsCamera />
          <span className="font-gilroyMedium text-base">Edit Photo</span>
        </div>
      )}
      {showOption && (
        <div
          ref={choseFile}
          className="absolute top-12 right-5 bg-white shadow-md rounded-md overflow-hidden"
        >
          <div className="px-6 py-1 flex items-center gap-2 cursor-pointer text-secondary_color hover:bg-black hover:text-white transition duration-300">
            <MdModeEditOutline />
            <span className="font-gilroySemibold text-base">Edit Cover</span>
          </div>
          <input
            type="file"
            onChange={handleCommentImgUpload}
            accept="image/jpeg,image/png,image/webp,image/gif"
            ref={chooseInput}
            hidden
          />
          <div
            onClick={() => chooseInput.current.click()}
            className="px-6 py-1 flex items-center gap-2 cursor-pointer text-secondary_color hover:bg-black hover:text-white transition duration-300"
          >
            <AiOutlineCloudUpload />
            <span className="font-gilroySemibold text-base">Upload</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cover;
