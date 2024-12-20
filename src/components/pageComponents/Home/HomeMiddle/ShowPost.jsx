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
import cover from "../../../../../public/postBackgrounds/cover.png";
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
        <div className="flex w-full items-center">
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
            <div className="flex gap-x-1 items-center ">
              <Link
                to={`/profile/${data.user?.username || ""}`}
                className="font-gilroyBold text-[15px] lg:font-[18px] text-black "
              >
                {`${data.user?.firstName || ""} ${data.user?.lastName || ""}`}
              </Link>
              {data.type == "profilePicture" && (
                <span className="font-gilroyMedium text-sm lg:text-base text-secondary_color">
                  {`Update ${
                    data?.user?.gender === "Male" ? "his" : "her"
                  } Picture`}
                </span>
              )}
              {data.type == "cover" && (
                <span className="font-gilroyMedium text-sm lg:text-base text-secondary_color">
                  {`Update ${
                    data?.user?.gender === "Male" ? "his" : "her"
                  } Cover Photo`}
                </span>
              )}
            </div>
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
          <div className="relative mt-2">
            {data?.images && data?.images?.length > 0 && (
              <>
                <div>
                  <h4 className="font-gilroyMedium text-lg text-black mt-2">
                    {data.text || ""}
                  </h4>
                </div>
                {data.type === "profilePicture" ? (
                  <div className="relative mt-2">
                    <div className={`${"overflow-hidden w-full h-full"}`}>
                      {data?.images?.map((img, i) => (
                        <div key={i}>
                          <img
                            className={`w-full h-[250px] object-cover`}
                            src={cover}
                            alt="image"
                          />
                          <div className="w-[280px] h-[280px] rounded-full overflow-hidden mx-auto -mt-40">
                            <img
                              className={`w-full h-full object-cover`}
                              src={img.url || avatar}
                              alt="image"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div
                    className={`${
                      data?.images?.length === 1
                        ? "w-full h-full overflow-hidden"
                        : "overflow-hidden w-full h-full grid grid-cols-2 gap-2"
                    }`}
                  >
                    {data?.images?.slice(0, 4).map((img, i) => (
                      <div key={i}>
                        <img
                          className={`${
                            data.images.length === 3
                              ? "[&:nth-of-type(1)]:row-start-1 [&:nth-of-type(1)]:row-end-3"
                              : ""
                          } w-full h-full object-cover`}
                          src={img.url}
                          alt="image"
                        />
                      </div>
                    ))}
                    {data.images.length > 4 && (
                      <div className="absolute bottom-32 right-28 w-[55px] h-[55px] bg-blur rounded-full flex items-center justify-center">
                        <span className="font-gilroySemibold text-xl">
                          +{data.images.length - 4}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </>
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
