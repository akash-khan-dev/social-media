/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { TiShoppingBag } from "react-icons/ti";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineHome } from "react-icons/ai";
import { IoSchoolOutline } from "react-icons/io5";
import { GiLoveMystery } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa";
import { useUpdateDetailsMutation } from "../../../../StateFeature/api/authApi";
import { useDispatch, useSelector } from "react-redux";
import EditDetails from "./EditDetails";
import { loggedInUser } from "../../../../StateFeature/Slice/authSlice";
import EditInfoField from "./EditInfoField";

const ProfileInfosOption = ({ userDetail, visitor, setNickName }) => {
  const [details, setDetails] = useState(userDetail);
  const initialState = {
    bio: details?.bio ? details?.bio : "",
    nickname: details?.nickname ? details?.nickname : "",
    job: details?.job ? details?.job : "",
    workPlace: details?.workPlace ? details?.workPlace : "",
    currentCity: details?.currentCity ? details?.currentCity : "",
    homeTown: details?.homeTown ? details?.homeTown : "dhaka",
    highSchool: details?.highSchool ? details?.highSchool : "",
    collage: details?.collage ? details?.collage : " ",
    varsity: details?.varsity ? details?.varsity : " ",
    relationship: details?.relationship ? details?.relationship : "",
    instagram: details?.instagram ? details?.instagram : "",
  };
  const [showEditBio, setShowEditBio] = useState(false);
  const [infos, setInfos] = useState(initialState);
  const [maxChar, setMaxChar] = useState(100);
  const [loading, setLoading] = useState(false);
  const [editInfoVisible, setEditInfoVisible] = useState(false);
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.userInformation.userInfo);
  const [updateDetails] = useUpdateDetailsMutation();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfos({ ...infos, [name]: value });
    setMaxChar(100 - e.target.value.length);
  };

  useEffect(() => {
    setDetails(userDetail);
    setInfos(userDetail);
  }, [userDetail]);

  const handleUpdateDetail = async () => {
    try {
      setLoading(true);
      const result = await updateDetails({ id: userInfo.id, infos: infos });
      setNickName(result?.data?.nickname);
      setDetails(result.data);
      dispatch(loggedInUser({ ...userInfo, nickname: result?.data?.nickname }));
      localStorage.setItem(
        "userInfo",
        JSON.stringify({ ...userInfo, nickname: result?.data?.nickname })
      );
      setShowEditBio(false);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <div>
          {!showEditBio && (
            <div>
              <div className="text-center">
                <span className="text-sm font-gilroyMedium text-black pb-3 inline-block">
                  {details?.bio && details?.bio}
                </span>
              </div>
              {visitor && !details?.bio && (
                <button
                  onClick={() => setShowEditBio(true)}
                  className="py-2 w-full mb-4 bg-white_100 shadow-md rounded-md font-gilroyMedium"
                >
                  add bio
                </button>
              )}
              {visitor && details?.bio && (
                <button
                  onClick={() => setShowEditBio(true)}
                  className="py-2 w-full mb-4 bg-white_100 shadow-md rounded-md font-gilroyMedium"
                >
                  Edit Bio
                </button>
              )}
            </div>
          )}
          {showEditBio && (
            <EditInfoField
              loading={loading}
              handleUpdateDetails={handleUpdateDetail}
              maxChar={maxChar}
              name={"bio"}
              value={infos?.bio}
              handleChange={handleChange}
              setShowEditBio={setShowEditBio}
              placeholder={"Edit Bio"}
            />
          )}
        </div>
        <div className="flex items-center gap-x-2 mb-3">
          <div className="text-secondary_color">
            <TiShoppingBag size={25} />
          </div>
          <div className="text-sm font-gilroyNormal text-black">
            {details?.job && details?.workPlace ? (
              <span>
                Works as a <b>{details?.job}</b> at <b>{details?.workPlace}</b>
              </span>
            ) : details?.job && !details?.workPlace ? (
              <span> works as a{details?.job}</span>
            ) : !details?.job && details?.workPlace ? (
              <span> works at a{details?.workPlace}</span>
            ) : (
              "work place and job"
            )}
          </div>
        </div>
        <div className="flex items-center gap-x-2 mb-3">
          <div className="text-secondary_color">
            <CiLocationOn size={25} />
          </div>
          <div className="text-sm font-gilroyNormal text-black">
            {details?.currentCity ? (
              <span>
                Lives in <b>{details?.currentCity}</b>
              </span>
            ) : (
              " Current City"
            )}
          </div>
        </div>
        <div className="flex items-center gap-x-2 mb-3">
          <div className="text-secondary_color">
            <AiOutlineHome size={22} />
          </div>
          <div className="text-sm font-gilroyNormal text-black">
            {details?.homeTown ? (
              <span>
                From <b>{details?.homeTown}</b>
              </span>
            ) : (
              " Home Town"
            )}
          </div>
        </div>
        <div className="flex items-center gap-x-2 mb-3">
          <div className="text-secondary_color">
            <IoSchoolOutline size={22} />
          </div>
          <div className="text-sm font-gilroyNormal text-black">
            {details?.highSchool ? (
              <span>
                Studied at <b>{details?.highSchool}</b>
              </span>
            ) : (
              " School "
            )}
          </div>
        </div>
        <div className="flex items-center gap-x-2 mb-3">
          <div className="text-secondary_color">
            <IoSchoolOutline size={22} />
          </div>
          <div className="text-sm font-gilroyNormal text-black">
            {details?.collage ? (
              <span>
                Studied at <b>{details?.collage}</b>
              </span>
            ) : (
              "Collage "
            )}
          </div>
        </div>
        <div className="flex items-center gap-x-2 mb-3">
          <div className="text-secondary_color">
            <IoSchoolOutline size={22} />
          </div>
          <div className="text-sm font-gilroyNormal text-black">
            {details?.varsity ? (
              <span>
                Studied at <b>{details?.varsity}</b>
              </span>
            ) : (
              "Varsity "
            )}
          </div>
        </div>
        <div className="flex items-center gap-x-2 mb-3">
          <div className="text-secondary_color">
            <GiLoveMystery size={22} />
          </div>
          <div className="text-sm font-gilroyNormal text-black">
            {details?.relationship ? (
              <span>
                <b>{details?.relationship}</b>
              </span>
            ) : (
              "Relationship Status "
            )}
          </div>
        </div>
        <div className="flex items-center gap-x-2 mb-3">
          <div className="text-secondary_color">
            <FaInstagram size={22} />
          </div>
          <div className="text-sm font-gilroyNormal text-black">
            {details?.instagram ? (
              <span>
                <b>{details?.instagram}</b>
              </span>
            ) : (
              "Add instagram "
            )}
          </div>
        </div>
        {visitor &&
        !details?.job &&
        !details?.workPlace &&
        !details?.currentCity &&
        !details?.homeTown &&
        !details?.highSchool &&
        !details?.collage &&
        !details?.varsity &&
        !details?.relationship &&
        !details?.nickname &&
        !details?.instagram ? (
          <>
            <button
              onClick={() => setEditInfoVisible(true)}
              className="py-2 w-full mb-4 bg-white_100 shadow-md rounded-md font-gilroyMedium"
            >
              Add Details
            </button>
          </>
        ) : (
          visitor && (
            <button
              onClick={() => setEditInfoVisible(true)}
              className="py-2 w-full mb-4 bg-white_100 shadow-md rounded-md font-gilroyMedium"
            >
              Edit Details
            </button>
          )
        )}
        {editInfoVisible && (
          <EditDetails
            loading={loading}
            handleUpdateDetails={handleUpdateDetail}
            handleChange={handleChange}
            details={infos}
            editInfoVisible={editInfoVisible}
            setEditInfoVisible={setEditInfoVisible}
          />
        )}
      </div>
    </>
  );
};

export default ProfileInfosOption;
