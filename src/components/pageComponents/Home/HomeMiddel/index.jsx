import CreatePost from "./CreatePost";
import ShowPost from "./ShowPost";

const HomeMiddle = () => {
  return (
    <>
      <div>
        <CreatePost />
      </div>
      <div>
        <ShowPost />
      </div>
    </>
  );
};

export default HomeMiddle;
