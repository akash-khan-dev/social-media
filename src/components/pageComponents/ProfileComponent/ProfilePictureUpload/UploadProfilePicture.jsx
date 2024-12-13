/* eslint-disable react/prop-types */
import React, { useCallback, useState, useRef } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import Cropper from "react-easy-crop";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import getCroppedImage from "../../../../utils/GetCroppedImg";
import { useDispatch, useSelector } from "react-redux";
import { loggedInUser } from "../../../../StateFeature/Slice/authSlice";
import { BeatLoader } from "react-spinners";
import {
  useCreatePostMutation,
  useUploadImageMutation,
  useUploadProfileImageMutation,
} from "../../../../StateFeature/api/authApi";
const UploadProfilePicture = ({
  uploadProfileRef,
  setShowUploadProfile,
  image,
  setImage,
}) => {
  const [captionText, setCaptionText] = useState("");
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [loading, setLoading] = useState(false);
  const [croppedArePixels, setCroppedArePixels] = useState(null);
  const [uploadImage] = useUploadImageMutation();
  const [uploadProfileImage] = useUploadProfileImageMutation();
  const [createPost] = useCreatePostMutation();
  const zoomRef = useRef(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userInformation.userInfo);

  const zoomOut = () => {
    zoomRef.current.stepDown();
    setZoom(zoomRef.current.value);
  };
  const zoomIn = () => {
    zoomRef.current.stepUp();
    setZoom(zoomRef.current.value);
  };
  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedArePixels(croppedAreaPixels);
  };

  //   ========this function cropped img
  const getCroppingImage = useCallback(async () => {
    try {
      const croppedImg = await getCroppedImage(image, croppedArePixels);
      setCrop({ x: 0, y: 0 });
      setZoom(1);
      setImage(croppedImg);
      return croppedImg;
    } catch (e) {
      console.log(e.message);
    }
  }, [croppedArePixels, image, setImage]);
  // ===========this function for img uploading
  const handleUploadProfilePicture = async () => {
    try {
      setLoading(true);
      const img = await getCroppingImage();
      const blob = await fetch(img).then((b) => b.blob());
      const path = `${user.username.replace(/\s+/g, "_")}/profile_picture`;
      const formData = new FormData();
      formData.append("path", path);
      formData.append("file", blob);

      // ======this api call for img upload in cloudinary
      const resProfilePicture = await uploadImage({
        formData,
        path,
        token: user.token,
      });
      const url = resProfilePicture.data.data[0].url;
      const uploadProfile = await uploadProfileImage({
        url: url,
        id: user.id,
      }).unwrap();
      if (uploadProfile.status === "done") {
        setLoading(false);
        // this api call or crate posts a profile
        const profilePicPost = await createPost({
          type: "profilePicture",
          images: resProfilePicture.data.data[0],
          text: captionText,
          background: null,
          user: user.id,
          token: user.token,
        }).unwrap();
        if (profilePicPost.status === "done") {
          setLoading(false);
          uploadProfileRef.current.style.backgroundImage = `url(${url})`;
          localStorage.setItem(
            "userInfo",
            JSON.stringify({ ...user, profilePicture: url })
          );
          dispatch(loggedInUser({ ...user, profilePicture: url }));
          setImage("");
          setShowUploadProfile(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <div className="w-[35%] h-[700px] box-border shadow-md top-[52%] bg-white -translate-y-[50%] fixed z-20">
        <div>
          <div
            onClick={() => setImage("")}
            className="fixed top-2 right-3 text-purple-100 cursor-pointer"
          >
            <IoCloseCircleOutline className="text-black" size={27} />
          </div>
          <div className="border-b border-line_color p-2">
            <h3 className="font-gilroyBold text-lg text-black text-center">
              Upload Profile Picture
            </h3>
          </div>
        </div>
        <div className="p-5">
          <textarea
            onChange={(e) => setCaptionText(e.target.value)}
            placeholder="Caption"
            className="w-full h-20 text-black text-base font-gilroyMedium px-2 bg-transparent py-2 resize-none rounded-md border border-line_color outline-none"
          ></textarea>
        </div>
        <div className="profile_cropper w-[80%] mx-auto relative flex justify-center items-center mt-5 h-[280px]">
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={1 / 1}
            cropShape="rounded"
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
        </div>
        <div className="flex items-center w-[70%] justify-between mx-auto my-4">
          <div
            onClick={zoomOut}
            className="w-10 h-10 bg-white_100 rounded-full hover:shadow-md flex items-center justify-center transition duration-300 cursor-pointer"
          >
            <FaMinus />
          </div>
          <div>
            <input
              ref={zoomRef}
              value={zoom}
              min={1}
              max={3}
              step={0.1}
              onChange={(e) => setZoom(e.target.value)}
              type="range"
              className="w-[250px] customize_range"
            />
          </div>
          <div
            onClick={zoomIn}
            className="w-10 h-10 bg-white_100 rounded-full hover:shadow-md flex items-center justify-center transition duration-300 cursor-pointer"
          >
            <FaPlus />
          </div>
        </div>
        <div className="flex items-center justify-end gap-x-4 px-12 ">
          <button
            onClick={getCroppingImage}
            disabled={loading}
            className="bg-white_100 rounded-md px-5 py-2 font-gilroyMedium text-base text-black"
          >
            Save Crop Image
          </button>
          {loading ? (
            <button
              disabled
              className="bg-blue rounded-md px-5 py-2 font-gilroyMedium text-base text-white"
            >
              <BeatLoader />
            </button>
          ) : (
            <button
              onClick={handleUploadProfilePicture}
              className="bg-blue rounded-md px-5 py-2 font-gilroyMedium text-base text-white"
            >
              Upload
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadProfilePicture;
