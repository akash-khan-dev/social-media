import { ProfileData } from "./Data";
import LeftData from "./LeftData";

const Profile = () => {
  return (
    <>
      <div className="w-[80px] h-[80px] xl:w-[110px] xl:h-[110px] bg-black rounded-full mx-auto"></div>
      <div className="text-center mt-4">
        <h2 className="font-gilroySemibold hidden xl:block text-2xl text-black">
          Akash khan
        </h2>
        <p className="hidden xl-block font-gilroyNormal text-sm text-text_color">
          akash@gmail.com
        </p>
      </div>
      <div>
        {ProfileData.map((data, i) => (
          <LeftData key={i} data={data} />
        ))}
      </div>
    </>
  );
};

export default Profile;
