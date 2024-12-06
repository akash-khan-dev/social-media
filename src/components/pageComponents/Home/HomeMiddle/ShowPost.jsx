/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import avatar from "../../../../../public/postBackgrounds/man.jpg";
import { formatDistance } from "date-fns";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import { FaRegCommentDots } from "react-icons/fa6";
import Reacts from "./Reacts";
import { useRef, useState } from "react";
import CreateComments from "./CreateComments";
import PostMenu from "./PostMenu/PostMenu";
// eslint-disable-next-line react/prop-types
const ShowPost = ({ data, userInfo }) => {
  const [showReactsEmoji, setShowReactEmoji] = useState(false);
  const inputRef = useRef(null);
  const [showOption, setShowOption] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [commentImage, setCommentImage] = useState("");
  const [commentError, setCommentError] = useState("");

  // ========for how mins ago post created
  const createDate =
    data?.createdAt &&
    formatDistance(new Date(data.createdAt), new Date(), {
      addSuffix: true,
    }).replace("about ", "");

  return (
    <div className="w-full p-4 shadow-md rounded-md mb-5">
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
              to={`/profile/${data.user?.username || ""}`}
              className="font-gilroyBold font-[18px] text-black "
            >
              {`${data.user?.firstName || ""} ${data.user?.lastName || ""}`}
            </Link>
            <p className="font-gilroySemibold text-sm text-secondary_color">
              {createDate || ""}
            </p>
          </div>
        </div>
        <div className="relative">
          <div className=" cursor-pointer w-7 h-7 rounded-full flex justify-center items-center hover:bg-white_100 transition-all duration-300">
            <BsThreeDots onClick={() => setShowOption(!showOption)} size={25} />
          </div>
          <div>
            {showOption && (
              <PostMenu
                setShowOption={setShowOption}
                postInfo={data?.user?._id}
                userInfo={userInfo}
                postImg={data?.images}
              />
            )}
          </div>
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
          <div className="relative mt-2">
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
      <div className="mt-1 relative">
        <div className="flex justify-between items-center border-b border-line_color pb-2">
          <div></div>
          <div>
            <span className="font-gilroyMedium text-sm text-secondary_color">
              13 Comments
            </span>
          </div>
        </div>
        {showReactsEmoji && (
          <div className="w-[320px] absolute -top-3 left-0  bg-white shadow-md px-4 py-1 rounded-full">
            <Reacts setShowReactEmoji={setShowReactEmoji} />
          </div>
        )}
        <div className="flex items-center mt-2 text-secondary_color border-b border-line_color pb-2">
          <div className="flex items-center w-2/4  justify-center">
            <AiOutlineLike
              size={24}
              className="cursor-pointer"
              onMouseOver={() =>
                setTimeout(() => {
                  setShowReactEmoji(true);
                }, 600)
              }
              onMouseLeave={() =>
                setTimeout(() => {
                  setShowReactEmoji(false);
                }, 600)
              }
            />
            <span>Like</span>
          </div>
          <div className="flex items-center w-2/4  justify-center gap-1">
            <FaRegCommentDots
              size={20}
              className="cursor-pointer"
              onClick={() => inputRef.current.focus()}
            />
            <span
              onClick={() => inputRef.current.focus()}
              className="cursor-pointer"
            >
              Comment
            </span>
          </div>

          <div className="flex items-center w-2/4  justify-center">
            <IoMdShareAlt size={23} className="cursor-pointer" />
            <span className="font-gilroySemibold text-sm text-secondary_color">
              Like
            </span>
          </div>
        </div>
        <div>
          <CreateComments
            userInfo={userInfo}
            commentText={commentText}
            setCommentText={setCommentText}
            commentImage={commentImage}
            setCommentImage={setCommentImage}
            commentError={commentError}
            setCommentError={setCommentError}
            inputRef={inputRef}
          />
        </div>
      </div>
    </div>
  );
};

export default ShowPost;
