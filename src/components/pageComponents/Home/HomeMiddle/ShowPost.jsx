/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import avatar from "../../../../../public/postBackgrounds/man.jpg";
import { formatDistance } from "date-fns";
import { BsThreeDots } from "react-icons/bs";
// eslint-disable-next-line react/prop-types
const ShowPost = ({ data }) => {
  if (!data) return <div>Error: No data provided!</div>; // Handle missing data gracefully

  const createDate =
    data?.createdAt &&
    formatDistance(new Date(data.createdAt), new Date(), {
      addSuffix: true,
    }).replace("about ", "");

  return (
    <div className="w-full p-4 shadow-md rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex w-1/2 items-center">
          <div className="w-14">
            <div className="w-11 h-11 rounded-full overflow-hidden">
              <Link to={`/profile${data.user?.username || ""}`}>
                <img
                  src={data.user?.profilePicture || avatar}
                  alt="profile"
                  className="w-full h-full bg-cover"
                />
              </Link>
            </div>
          </div>
          <div>
            <Link
              to={`/profile${data.user?.username || ""}`}
              className="font-gilroyBold font-[18px] text-black "
            >
              {`${data.user?.firstName || ""} ${data.user?.lastName || ""}`}
            </Link>
            <p className="font-gilroySemibold text-sm text-secondary_color">
              {createDate || ""}
            </p>
          </div>
        </div>
        <div className="cursor-pointer w-7 h-7 rounded-full flex justify-center items-center hover:bg-white_100 transition-all duration-300">
          <BsThreeDots size={25} />
        </div>
      </div>
      {data.background ? (
        <div
          className="w-full h-[380px] mt-4 flex items-center justify-center"
          style={{
            backgroundImage: `url(${data.background})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h4 className="font-gilroySemibold text-3xl text-white">
            {data.text}
          </h4>
        </div>
      ) : (
        <>
          <div>
            <h4 className="font-gilroyMedium text-lg text-black mt-2">
              {data.text || ""}
            </h4>
          </div>
          <div className="relative">
            {Array.isArray(data.images) &&
              data.images[0] &&
              Array.isArray(data.images[0].data) &&
              data.images[0].data.length > 0 && (
                <div
                  className={`${
                    data.images[0].data.length === 1
                      ? "w-full h-full overflow-hidden"
                      : "overflow-hidden w-full h-full grid grid-cols-2 gap-2"
                  }`}
                >
                  {data.images[0].data.slice(0, 4).map((img, i) => (
                    <img
                      key={i}
                      className={`${
                        data.images[0].data.length === 3
                          ? "[&:nth-of-type(1)]:row-start-1 [&:nth-of-type(1)]:row-end-3"
                          : ""
                      } w-full h-full object-cover`}
                      src={img.url}
                      alt="image"
                    />
                  ))}
                  {data.images[0].data.length > 4 && (
                    <div className="absolute bottom-32 right-28 w-[55px] h-[55px] bg-blur rounded-full flex items-center justify-center">
                      <span className="font-gilroySemibold text-xl">
                        +{data.images[0].data.length - 4}
                      </span>
                    </div>
                  )}
                </div>
              )}
          </div>
        </>
      )}
    </div>
  );
};

export default ShowPost;
