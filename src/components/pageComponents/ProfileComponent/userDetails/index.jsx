import ProfileInfosOption from "./ProfileInfosOption";

const UserInfoDetails = ({ userDetail }) => {
  return (
    <>
      <div>
        <h3 className="font-gilroySemibold text-base text-black">Infos</h3>
        <div className="mt-3">
          <ProfileInfosOption userDetail={userDetail} />
        </div>
      </div>
    </>
  );
};

export default UserInfoDetails;
