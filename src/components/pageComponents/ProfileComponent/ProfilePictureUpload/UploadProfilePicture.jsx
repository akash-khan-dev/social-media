/* eslint-disable react/prop-types */
import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
const UploadProfilePicture = ({ image, setImage }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const onCropComplete = useCallback(() => {
    (croppedArea, croppedAreaPixels) => {
      console.log(croppedArea, croppedAreaPixels);
    };
  }, []);
  return (
    <div>
      <div className="w-[35%] h-[600px] shadow-md top-[55%] bg-white -translate-y-[50%] fixed z-20">
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
            placeholder="Caption"
            className="w-full h-24 text-black text-base font-gilroyMedium px-2 bg-transparent py-2 resize-none rounded-md border border-line_color outline-none"
          ></textarea>
        </div>
        <div className="profile_cropper w-[80%] mx-auto relative flex justify-center items-center mt-5 h-[300px]">
          <Cropper
            image={image}
            cropShape="round"
            crop={crop}
            zoom={zoom}
            aspect={1 / 1}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
        </div>
      </div>
    </div>
  );
};

export default UploadProfilePicture;
