/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import Details from "./Details";
import { IoBagCheckOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineHome } from "react-icons/ai";
import { IoSchoolOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GiLoveMystery } from "react-icons/gi";

const EditDetails = ({
  handleUpdateDetails,
  details,
  editInfoVisible,
  setEditInfoVisible,
  handleChange,
}) => {
  useEffect(() => {
    const body = document.body;

    if (editInfoVisible) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }

    return () => {
      body.classList.remove("no-scroll");
    };
  }, [editInfoVisible]);

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-blur h-screen flex items-center justify-center z-50">
        <div className="w-[45%] shadow-md bg-white relative">
          <div className="border-b border-line_color p-2">
            <h3 className="font-gilroyBold text-lg text-black text-center">
              Edit your Information
            </h3>
            <div
              onClick={() => setEditInfoVisible(false)}
              className="absolute top-2 right-3 text-purple-100 cursor-pointer"
            >
              <IoCloseCircleOutline className="text-black" size={27} />
            </div>
          </div>
          <div className="px-4">
            <h2 className=" font-gilroyBold text-base text-black">
              Other Name
            </h2>
            <Details
              handleUpdateDetails={handleUpdateDetails}
              handleChange={handleChange}
              name={"nickname"}
              text={"Other Name"}
              value={details?.nickname}
              icon={<CgProfile />}
              placeholder={"Add Other Name"}
            />
          </div>
          <div className="px-4">
            <h2 className="font-gilroyBold text-base text-black">
              Job And Work Place
            </h2>
            <Details
              handleUpdateDetails={handleUpdateDetails}
              handleChange={handleChange}
              name={"job"}
              text={"Job"}
              icon={<IoBagCheckOutline />}
              value={details?.job}
              placeholder={"Add Job"}
            />
            <Details
              handleUpdateDetails={handleUpdateDetails}
              handleChange={handleChange}
              name={"workPlace"}
              icon={<IoBagCheckOutline />}
              text={"Work Place"}
              value={details?.workPlace}
              placeholder={"Add Work Place"}
            />
          </div>
          <div className="px-4">
            <h2 className=" font-gilroyBold text-base text-black">
              Curren City
            </h2>

            <Details
              handleUpdateDetails={handleUpdateDetails}
              handleChange={handleChange}
              name={"currentCity"}
              icon={<CiLocationOn />}
              text={" Current City"}
              value={details?.currentCity}
              placeholder={"Add Current City"}
            />
          </div>
          <div className="px-4">
            <h2 className="my-1 font-gilroyBold text-base text-black">
              Home Town
            </h2>

            <Details
              handleUpdateDetails={handleUpdateDetails}
              handleChange={handleChange}
              name={"homeTown"}
              icon={<AiOutlineHome />}
              text={" Home Town"}
              value={details?.homeTown}
              placeholder={"Add Home Town"}
            />
          </div>
          <div className="px-4">
            <h2 className=" font-gilroyBold text-base text-black">Education</h2>

            <Details
              handleUpdateDetails={handleUpdateDetails}
              handleChange={handleChange}
              name={"highSchool"}
              icon={<IoSchoolOutline />}
              text={" High School"}
              value={details?.highSchool}
              placeholder={"Add Hight School"}
            />
            <Details
              handleUpdateDetails={handleUpdateDetails}
              handleChange={handleChange}
              name={"collage"}
              icon={<IoSchoolOutline />}
              text={" Collage"}
              value={details?.collage}
              placeholder={"Add Collage"}
            />
            <Details
              handleUpdateDetails={handleUpdateDetails}
              handleChange={handleChange}
              name={"varsity"}
              icon={<IoSchoolOutline />}
              text={"Varsity"}
              value={details?.varsity}
              placeholder={"Add Varsity"}
            />
          </div>

          <div className="px-4">
            <h2 className=" font-gilroyBold text-base text-black">
              Relation Ship
            </h2>
            <Details
              rel={"rel"}
              handleUpdateDetails={handleUpdateDetails}
              handleChange={handleChange}
              name={"relationship"}
              icon={<GiLoveMystery />}
              text={"Relation Ship"}
              value={details?.relationship}
              placeholder={"Add instagram"}
            />
          </div>
          <div className="px-4">
            <h2 className=" font-gilroyBold text-base text-black">Instagram</h2>
            <Details
              handleUpdateDetails={handleUpdateDetails}
              handleChange={handleChange}
              name={"instagram"}
              icon={<FaInstagram />}
              text={"Instagram Account"}
              value={details?.instagram}
              placeholder={"Add instagram"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditDetails;
