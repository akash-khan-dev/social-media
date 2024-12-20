import { useEffect, useRef, useState } from "react";
import { Crose } from "../../../../../svg/crose";
import AddPost from "./AddPost";
import EmojiPickers from "./EmojiPickers";
import ImagesVIewer from "./ImagesVIewer";
import OutSideClick from "../../../../../utils/Click";
import {
  useCreatePostMutation,
  useUploadImageMutation,
} from "../../../../../StateFeature/api/authApi";
import { useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import dataURItoBlob from "../../../../../utils/dataURItoBlcb";
import { ToastError } from "../../../../../utils/ToastError";
import profile from "../../../../../../public/postBackgrounds/man.jpg";

// eslint-disable-next-line react/prop-types
const CreatePostPopup = ({ setPostPopupVisible, postPopupVisible }) => {
  const outSideRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [showImageViewer, setShowImageViewer] = useState(false);
  const [textState, setTextState] = useState("");
  const [postImage, setPostImage] = useState([]);
  const [background, setBackground] = useState("");
  const [createPost] = useCreatePostMutation();
  const [uploadImage] = useUploadImageMutation();

  const user = useSelector((state) => state.userInformation.userInfo);

  OutSideClick(outSideRef, () => {
    setPostPopupVisible(false);
  });

  const handleCreatePost = async () => {
    try {
      setLoading(true);
      let response;
      if (background) {
        response = await createPost({
          type: null,
          images: null,
          text: textState,
          background: background,
          user: user.id,
          token: user.token,
        }).unwrap();
      } else if (postImage && postImage.length) {
        const imagesPost = postImage.map((item) => dataURItoBlob(item));
        const path = `${user.username.replace(/\s+/g, "_")}/post_image`;
        let formData = new FormData();
        formData.append("path", path);

        imagesPost.forEach((img) => {
          formData.append("file", img);
        });

        const responseImage = await uploadImage({
          formData,
          path,
          token: user.token,
        }).unwrap();
        response = await createPost({
          type: null,
          images: responseImage.data[0],
          text: textState,
          background: null,
          user: user.id,
          token: user.token,
        }).unwrap();
      } else if (textState) {
        response = await createPost({
          type: null,
          images: null,
          text: textState,
          background: null,
          user: user.id,
          token: user.token,
        }).unwrap();
      }
      if (response.status == "done") {
        setLoading(false);
        setPostPopupVisible(false);
      }
    } catch (err) {
      setLoading(false);
      ToastError(err.message);
    }
  };
  useEffect(() => {
    const body = document.body;

    if (postPopupVisible) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }

    return () => {
      body.classList.remove("no-scroll");
    };
  }, [postPopupVisible]);
  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-blur h-screen flex items-center justify-center z-40">
        <div
          ref={outSideRef}
          className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[35%] shadow-md bg-white relative"
        >
          <div
            onClick={() => setPostPopupVisible(false)}
            className="absolute top-2 right-3 text-purple-100 cursor-pointer"
          >
            <Crose />
          </div>
          <div className="border-b border-line_color p-2">
            <h3 className="font-gilroyBold text-lg text-black text-center">
              Create Post
            </h3>
          </div>
          <div className="p-4">
            <div className=" flex items-center gap-3">
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                <img
                  src={user.profilePicture || profile}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-gilroySemibold text-lg">
                  {user.firstName + " " + user.lastName}
                </h2>
              </div>
            </div>
            {showImageViewer ? (
              <>
                <ImagesVIewer
                  textState={textState}
                  setTextState={setTextState}
                  changePart={showImageViewer}
                  postImage={postImage}
                  setPostImage={setPostImage}
                  setShowImageViewer={setShowImageViewer}
                />
                <div>
                  <AddPost
                    showImageViewer={showImageViewer}
                    setShowImageViewer={setShowImageViewer}
                  />
                </div>
              </>
            ) : (
              <>
                <EmojiPickers
                  background={background}
                  setBackground={setBackground}
                  textState={textState}
                  setTextState={setTextState}
                />
                <div>
                  <AddPost
                    showImageViewer={showImageViewer}
                    setShowImageViewer={setShowImageViewer}
                  />
                </div>
              </>
            )}

            <div className="mt-2">
              {loading ? (
                <button
                  onClick={handleCreatePost}
                  className="py-2 w-full bg-white_100 hover:bg-black font-gilroySemibold text-lg text-black hover:text-white rounded-md transition-all duration-300"
                >
                  <BeatLoader />
                </button>
              ) : textState == "" && postImage.length == 0 ? (
                <button
                  disabled
                  className="py-2 w-full bg-white_100 font-gilroySemibold text-lg text-black rounded-md transition-all duration-300"
                >
                  Post Now
                </button>
              ) : (
                <button
                  onClick={handleCreatePost}
                  className="py-2 w-full bg-white_100 hover:bg-black font-gilroySemibold text-lg text-black hover:text-white rounded-md transition-all duration-300"
                >
                  Post Now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePostPopup;
