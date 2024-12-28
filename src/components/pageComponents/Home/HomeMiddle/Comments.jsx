/* eslint-disable react/prop-types */
import { formatDistance } from "date-fns";
import profile from "../../../../../public/postBackgrounds/man.jpg";
const Comments = ({ comment }) => {
  console.log(comment);
  const { profilePicture, username, firstName, lastName } = comment.commentedBy;
  const createDate =
    comment?.commentedAt &&
    formatDistance(new Date(comment.commentedAt), new Date(), {
      addSuffix: true,
    }).replace("about ", "");

  return (
    <>
      <div className="my-3">
        <div className="flex gap-x-2">
          <div className="w-9 h-9 overflow-hidden rounded-full">
            <img src={profilePicture || profile} alt="profile" />
          </div>
          <div>
            <h4 className="text-sm font-gilroyNormal text-black">
              {firstName + " " + lastName}
            </h4>
            <p className="text-base font-gilroyNormal py-1 bg-white_100 px-3 box-border rounded-md ">
              {comment.text}
            </p>
            <div className="bg-white_100">
              {comment.image && (
                <img src={comment.image} className=" h-24 w-fu" alt="img" />
              )}
            </div>
            <div>
              <span className="font-gilroyNormal text-[12px] text-black">
                {createDate}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
