/* eslint-disable react/prop-types */
import React, { useCallback, useEffect, useRef, useState } from "react";
import { BsCamera } from "react-icons/bs";
import cover from "../../../../../public/postBackgrounds/cover.png";
import { MdModeEditOutline } from "react-icons/md";
import { AiOutlineCloudUpload } from "react-icons/ai";
import OutSideClick from "../../../../utils/Click";
import { ToastError } from "../../../../utils/ToastError";
import { ToastContainer } from "react-toastify";
import Cropper from "react-easy-crop";
import OldCoverPhoto from "./OldCoverPhoto";
import { IoCloseCircleOutline } from "react-icons/io5";
import getCroppedImage from "../../../../utils/GetCroppedImg";
import { useDispatch, useSelector } from "react-redux";
import {
  useCreatePostMutation,
  useUploadCoverPictureMutation,
  useUploadImageMutation,
} from "../../../../StateFeature/api/authApi";
import { loggedInUser } from "../../../../StateFeature/Slice/authSlice";
import { PulseLoader } from "react-spinners";

const Cover = ({ coverImg, visitor, imageData }) => {
  const [showOption, setShowOption] = useState(false);
  const [coverPhoto, setCoverPhoto] = useState("");
  const [loading, setLoading] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [width, setWidth] = useState(null);
  const [croppedArePixels, setCroppedArePixels] = useState(null);
  const [showOldCover, setShowOldCover] = useState(false);
  const choseFile = useRef(null);
  const chooseInput = useRef(null);
  const coverWith = useRef(null);
  const dispatch = useDispatch();
  const coverRef = useRef(null);
  const userInfo = useSelector((state) => state.userInformation.userInfo);

  const [uploadCoverImage] = useUploadCoverPictureMutation();
  const [uploadImage] = useUploadImageMutation();
  const [createPost] = useCreatePostMutation();

  OutSideClick(choseFile, () => {
    setShowOption(false);
  });
  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedArePixels(croppedAreaPixels);
  };
  useEffect(() => {
    setWidth(coverWith.current.clientWidth);
  }, [window.innerWidth]);

  // ==========for input change ===
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

  //   ========this function cropped img
  const getCroppingImage = useCallback(async () => {
    try {
      const croppedImg = await getCroppedImage(coverPhoto, croppedArePixels);
      setCrop({ x: 0, y: 0 });
      setZoom(1);
      setCoverPhoto(croppedImg);
      return croppedImg;
    } catch (e) {
      console.log(e.message);
    }
  }, [croppedArePixels, coverPhoto, setCoverPhoto]);
  // ===========for upload img
  const handleUploadCoverPicture = async () => {
    try {
      setLoading(true);
      const img = await getCroppingImage();
      const blob = await fetch(img).then((b) => b.blob());
      const path = `${userInfo.username.replace(/\s+/g, "_")}/cover_picture`;
      const formData = new FormData();
      formData.append("path", path);
      formData.append("file", blob);

      // ======this api call for img upload in cloudinary
      const resCoverPicture = await uploadImage({
        formData,
        path,
        token: userInfo.token,
      });
      const url = resCoverPicture.data.data[0].url;
      const uploadCover = await uploadCoverImage({
        url: url,
        id: userInfo.id,
      }).unwrap();
      if (uploadCover.status === "done") {
        setLoading(false);
        // this api call or crate posts a profile
        const coverPicPost = await createPost({
          type: "cover",
          images: resCoverPicture.data.data[0],
          text: null,
          background: null,
          user: userInfo.id,
          token: userInfo.token,
        }).unwrap();
        if (coverPicPost.status === "done") {
          setLoading(false);
          coverRef.current.src = `${url}`;
          localStorage.setItem(
            "userInfo",
            JSON.stringify({ ...userInfo, cover: url })
          );
          dispatch(loggedInUser({ ...userInfo, cover: url }));
          setCoverPhoto("");
          setShowOldCover(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
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
            ref={coverRef}
          />
          {coverPhoto && (
            <div className="cover_cropper absolute top-0 left-0 w-full h-full z-10">
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
              <div className="absolute top-2 right-3 flex items-center justify-center gap-x-2">
                <button
                  onClick={handleUploadCoverPicture}
                  className="bg-blue rounded-md px-5 py-1 font-gilroyMedium text-base text-white"
                >
                  {loading ? <PulseLoader /> : " Upload"}
                </button>
                <div
                  onClick={() => setCoverPhoto("")}
                  className=" text-purple-100 cursor-pointer w-8 h-8 flex items-center justify-center shadow-md bg-white_100 rounded-full overflow-hidden"
                >
                  <IoCloseCircleOutline className="text-black" size={27} />
                </div>
              </div>
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
              <span
                className="font-gilroySemibold text-base"
                onClick={() => setShowOldCover(!showOldCover)}
              >
                Edit Cover
              </span>
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
      {showOldCover && (
        <OldCoverPhoto
          imageData={imageData}
          setCoverPhoto={setCoverPhoto}
          setShowOldCover={setShowOldCover}
        />
      )}
    </>
  );
};

export default Cover;
