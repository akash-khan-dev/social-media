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
import {
  useGetAllReactQuery,
  useReactPostMutation,
} from "../../../../StateFeature/api/authApi";
// eslint-disable-next-line react/prop-types
const ShowPost = ({ post, userInfo }) => {
  const [showReactsEmoji, setShowReactEmoji] = useState(false);
  const inputRef = useRef(null);
  const [showOption, setShowOption] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [commentImage, setCommentImage] = useState("");
  const [commentError, setCommentError] = useState("");
  const [reactPost] = useReactPostMutation();

  const { data: allReact } = useGetAllReactQuery({ id: post?._id });

  // ========for how mins ago post created

  const createDate =
    post?.createdAt &&
    formatDistance(new Date(post.createdAt), new Date(), {
      addSuffix: true,
    }).replace("about ", "");

  const handleReacts = async (type) => {
    try {
      await reactPost({ postId: post._id, react: type }).unwrap();
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(allReact);

  return (
    <div className="w-full p-4 shadow-md rounded-md mb-5">
      <div className="flex justify-between items-center">
        <div className="flex w-full items-center">
          <div className="w-14">
            <div className="w-11 h-11 rounded-full overflow-hidden">
              <Link to={`/profile${post.user?.username || ""}`}>
                <img
                  src={post.user?.profilePicture || avatar}
                  alt="profile"
                  className="w-full h-full bg-cover"
                />
              </Link>
            </div>
          </div>
          <div>
            <div className="flex gap-x-1 items-center ">
              <Link
                to={`/profile/${post.user?.username || ""}`}
                className="font-gilroyBold text-[15px] lg:font-[18px] text-black "
              >
                {`${post.user?.firstName || ""} ${post.user?.lastName || ""}`}
              </Link>
              {post.type == "profilePicture" && (
                <span className="font-gilroyMedium text-sm lg:text-base text-secondary_color">
                  {`Update ${
                    post?.user?.gender === "Male" ? "his" : "her"
                  } Picture`}
                </span>
              )}
              {post.type == "cover" && (
                <span className="font-gilroyMedium text-sm lg:text-base text-secondary_color">
                  {`Update ${
                    post?.user?.gender === "Male" ? "his" : "her"
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
                postInfo={post?.user?._id}
                userInfo={userInfo}
                postImg={post?.images}
              />
            )}
          </div>
        </div>
      </div>
      {post.background ? (
        <div
          className="w-full h-[380px] mt-4 flex items-center justify-center"
          style={{
            backgroundImage: `url(${post.background})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h4 className="font-gilroySemibold text-3xl text-white">
            {post.text}
          </h4>
        </div>
      ) : (
        <>
          <div className="relative mt-2">
            {post?.images && post?.images?.length > 0 && (
              <>
                <div>
                  <h4 className="font-gilroyMedium text-lg text-black mt-2">
                    {post.text || ""}
                  </h4>
                </div>
                {post.type === "profilePicture" ? (
                  <div className="relative mt-2">
                    <div className={`${"overflow-hidden w-full h-full"}`}>
                      {post?.images?.map((img, i) => (
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
                      post?.images?.length === 1
                        ? "w-full h-full overflow-hidden"
                        : "overflow-hidden w-full h-full grid grid-cols-2 gap-2"
                    }`}
                  >
                    {post?.images?.slice(0, 4).map((img, i) => (
                      <div key={i}>
                        <img
                          className={`${
                            post.images.length === 3
                              ? "[&:nth-of-type(1)]:row-start-1 [&:nth-of-type(1)]:row-end-3"
                              : ""
                          } w-full h-full object-cover`}
                          src={img.url}
                          alt="image"
                        />
                      </div>
                    ))}
                    {post.images.length > 4 && (
                      <div className="absolute bottom-32 right-28 w-[55px] h-[55px] bg-blur rounded-full flex items-center justify-center">
                        <span className="font-gilroySemibold text-xl">
                          +{post.images.length - 4}
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
            <Reacts
              handleReacts={handleReacts}
              setShowReactEmoji={setShowReactEmoji}
            />
          </div>
        )}
        <div className="flex items-center mt-2 text-secondary_color border-b border-line_color pb-2">
          <div
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
            className="cursor-pointer flex items-center w-2/4  justify-center"
          >
            {allReact?.check ? (
              <img
                src={`../../../../../public/reacts/${allReact.check}.svg`}
                className="h-5 mr-1"
                alt="react"
              />
            ) : (
              <AiOutlineLike size={24} />
            )}

            <span
              className={`${
                allReact?.check === "like"
                  ? "text-blue"
                  : allReact?.check === "love"
                  ? "text-red"
                  : allReact?.check === "haha"
                  ? "text-yellow"
                  : allReact?.check === "angry"
                  ? "text-yellow"
                  : allReact?.check === "sad"
                  ? "text-yellow"
                  : allReact?.check === "wow"
                  ? "text-yellow"
                  : "text-black"
              } font-gilroyMedium text-sm`}
            >
              {allReact?.check ? allReact?.check : "Like"}
            </span>
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
              Share
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
