/* eslint-disable react/prop-types */
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Photos = ({ imageData, imageLoading }) => {
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
        {imageLoading ? (
          <div>{<Skeleton height={"100px"} count={imageLoading} />}</div>
        ) : (
          <div className=" grid grid-cols-4 md:grid-cols-5 2xl:grid-cols-3 gap-2 min-h-7">
            {imageData?.resources &&
              imageData?.resources?.length &&
              imageData?.resources
                ?.slice(0, showMore ? imageData?.resources?.length : 6)
                .map((resource, i) => (
                  <img
                    key={i}
                    src={resource.secure_url}
                    alt="img"
                    className="w-full h-full object-cover rounded-md"
                  />
                ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Photos;
