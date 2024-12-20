import ProfileInfosOption from "./ProfileInfosOption";

// eslint-disable-next-line react/prop-types
const UserInfoDetails = ({ userDetail, visitor, setNickName }) => {
  return (
    <>
      <div>
        <h3 className="font-gilroySemibold text-base text-black">Infos</h3>
        <div className="mt-3">
          <ProfileInfosOption
            visitor={visitor}
            userDetail={userDetail}
            setNickName={setNickName}
          />
        </div>
      </div>
    </>
  );
};

export default UserInfoDetails;
