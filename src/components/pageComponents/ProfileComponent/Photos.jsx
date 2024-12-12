/* eslint-disable react/prop-types */
import React, { useState } from "react";

const Photos = ({ imageData }) => {
  const [showMore, setShowMore] = useState(false);
  const countPhotos = () => {
    const totalPhotos = imageData?.total_count || 0;
    return totalPhotos === 0 ? "0 photos" : `${imageData?.total_count} photos`;
  };
  return (
    <>
      <div>
        <h3 className="font-gilroySemibold text-base text-black">Photos</h3>
        <div className="flex justify-between items-center mb-2">
          <span className="font-gilroyMedium text-sm text-secondary_color">
            {countPhotos()}
          </span>
          {imageData?.resources?.length > 6 && (
            <button
              onClick={() => setShowMore(!showMore)}
              className="py-1 px-3 font-gilroyMedium text-white text-base bg-blue rounded-md"
            >
              {!showMore ? "Show More" : "Show Less"}
            </button>
          )}
        </div>
        <div className=" grid grid-cols-3 gap-2">
          {imageData?.resources &&
            imageData?.resources?.length &&
            imageData?.resources
              ?.slice(0, showMore ? imageData?.resources?.length : 6)
              .map((resource, i) => (
                <img
                  key={i}
                  src={resource.secure_url}
                  alt="img"
                  className="w-full h-full object-cover"
                />
              ))}
        </div>
      </div>
    </>
  );
};

export default Photos;
