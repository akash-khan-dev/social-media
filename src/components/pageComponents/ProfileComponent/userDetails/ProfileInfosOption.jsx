/* eslint-disable react/prop-types */
import { useState } from "react";
import { TiShoppingBag } from "react-icons/ti";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineHome } from "react-icons/ai";
import { IoSchoolOutline } from "react-icons/io5";
import { GiLoveMystery } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa";

const ProfileInfosOption = ({ userDetail }) => {
  const initialState = {
    bio: userDetail?.bio ? userDetail?.bio : "",
    nickname: userDetail?.nickname ? userDetail?.nickname : "",
    job: userDetail?.job ? userDetail?.job : "computer ",
    workPlace: userDetail?.workPlace ? userDetail?.workPlace : " moula & co",
    currentCity: userDetail?.currentCity ? userDetail?.currentCity : "Dhaka",
    homeTown: userDetail?.homeTown ? userDetail?.homeTown : "Shewrapara",
    highSchool: userDetail?.highSchool
      ? userDetail?.highSchool
      : "Shahazad pur Model pilot high school",
    collage: userDetail?.collage
      ? userDetail?.collage
      : "PABNA Polytechnic Institute ",
    varsity: userDetail?.varsity ? userDetail?.varsity : " The pipools ",
    relationship: userDetail?.relationship
      ? userDetail?.relationship
      : "single",
    instagram: userDetail?.instagram ? userDetail?.instagram : "akash01",
  };
  const [infos, setInfos] = useState(initialState);
  return (
    <>
      <div>
        <div className="flex items-center gap-x-2 mb-3">
          <div className="text-secondary_color">
            <TiShoppingBag size={25} />
          </div>
          <div className="text-sm font-gilroyNormal text-black">
            {infos?.job && infos?.workPlace ? (
              <span>
                Works as a <b>{infos?.job}</b> at <b>{infos?.workPlace}</b>
              </span>
            ) : infos?.job && !infos?.workPlace ? (
              <span> works as a{infos.job}</span>
            ) : !infos?.job && infos?.workPlace ? (
              <span> works at a{infos?.workPlace}</span>
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
            {infos?.currentCity ? (
              <span>
                Lives in <b>{infos.currentCity}</b>
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
            {infos?.homeTown ? (
              <span>
                From <b>{infos.homeTown}</b>
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
            {infos?.highSchool ? (
              <span>
                Studied at <b>{infos.highSchool}</b>
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
            {infos?.collage ? (
              <span>
                Studied at <b>{infos.collage}</b>
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
            {infos?.varsity ? (
              <span>
                Studied at <b>{infos.varsity}</b>
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
            {infos?.relationship ? (
              <span>
                <b>{infos.relationship}</b>
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
            {infos?.instagram ? (
              <span>
                <b>{infos.instagram}</b>
              </span>
            ) : (
              "Add instagram "
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileInfosOption;
