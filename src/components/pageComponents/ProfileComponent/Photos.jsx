/* eslint-disable react/prop-types */
import React from "react";

const Photos = ({ imageData }) => {
  return (
    <>
      <div>
        <h3 className="font-gilroySemibold text-base text-black">Photos</h3>
        <span className="font-gilroyMedium text-sm text-secondary_color">
          {imageData?.total_count === 0
            ? "0 Photos"
            : `${imageData?.total_count} Photos`}
        </span>
        <div className=" grid grid-cols-2 gap-x-3">
          {imageData?.resources &&
            imageData?.resources?.length &&
            imageData?.resources?.map((resource, i) => (
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
