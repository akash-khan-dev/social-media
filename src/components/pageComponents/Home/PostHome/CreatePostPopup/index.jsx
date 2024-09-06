import { useRef, useState } from "react";
import { Crose } from "../../../../../svg/crose";
import AddPost from "./AddPost";
import EmojiPickers from "./EmojiPickers";
import ImagesVIewer from "./ImagesVIewer";
import OutSideClick from "../../../../../utils/Click";
import { useCreatePostMutation } from "../../../../../StateFeature/api/authApi";
import { useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";

// eslint-disable-next-line react/prop-types
const CreatePostPopup = ({ setPostPopupVisible }) => {
  const outSideRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [showImageViewer, setShowImageViewer] = useState(false);
  const [textState, setTextState] = useState("");
  const [postImage, setPostImage] = useState([]);
  const [background, setBackground] = useState("");
  const [createPost] = useCreatePostMutation();

  const user = useSelector((state) => state.registration.userInfo);

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
        console.log("hlello");
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
      console.log(err);
    }
  };
  return (
    <>
      <div className="absolute top-0 left-0 w-full bg-blur h-screen flex items-center justify-center z-20">
        <div ref={outSideRef} className="w-[35%] shadow-md bg-white relative">
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
              <div className="w-[50px] h-[50px] bg-black rounded-full"></div>
              <div>
                <h2 className="font-gilroySemibold text-xl">MD Akash khan</h2>
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
              ) : textState == "" ? (
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
