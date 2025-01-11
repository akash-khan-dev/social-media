import { useGetAllFriendsListQuery } from "../../../../StateFeature/api/authApi";
import { ReduceText } from "../../../../utils/ReduceText";

const RightFriends = () => {
  const { data: friendsData, refetch } = useGetAllFriendsListQuery();
  const originalName = " md akash khan ahemd atikur";
  const reduceText = ReduceText(originalName, 15);

  return (
    <>
      <div className=" pr-4">
        <div className="flex items-center justify-between py-2 border-b border-line_color pb-3">
          <div>
            <h3 className="font-gilroySemibold text-lg text-black">
              Friends Request
            </h3>
          </div>
          <div>
            <button className="font-gilroySemibold text-md border border-black py-1 px-2 rounded-full hover:bg-black hover:text-white transition-all duration-300">
              See All
            </button>
          </div>
        </div>
        <div>
          <div className="flex mt-4">
            <div className="w-[25%]">
              <div className="w-[50px] h-[50px] bg-black rounded-full"></div>
            </div>
            <div className="w-[75%]">
              <h4 className="font-gilroySemibold text-md">{reduceText}</h4>
              <p className="font-gilroyNormal text-xs text-secondary_color">
                1 hour ago
              </p>
              <div className="mt-3 flex gap-4">
                <button className="bg-black py-1 px-4 rounded-lg font-gilroyMedium text-white">
                  Accept
                </button>
                <button className="bg-red py-1 px-4 rounded-lg font-gilroyMedium text-white">
                  Reject
                </button>
              </div>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="w-[25%]">
              <div className="w-[50px] h-[50px] bg-black rounded-full"></div>
            </div>
            <div className="w-[75%]">
              <h4 className="font-gilroySemibold text-md"> Md Akash Khan</h4>
              <p className="font-gilroyNormal text-xs text-secondary_color">
                1 hour ago
              </p>
              <div className="mt-3 flex gap-4">
                <button className="bg-black py-1 px-4 rounded-lg font-gilroyMedium text-white">
                  Accept
                </button>
                <button className="bg-red py-1 px-4 rounded-lg font-gilroyMedium text-white">
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightFriends;
