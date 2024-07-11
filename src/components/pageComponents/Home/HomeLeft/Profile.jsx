import { ProfileData } from "./Data";
import LeftData from "./LeftData";

const Profile = () => {
  return (
    <>
      <div className="w-[120px] h-[120px] bg-black rounded-full mx-auto"></div>
      <div className="text-center mt-4">
        <h2 className="font-gilroySemibold text-2xl text-black">Akash khan</h2>
        <p className="font-gilroyNormal text-sm text-text_color">
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
