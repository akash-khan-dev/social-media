import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import SettingOption from "./SettingOption/SettingOption";
import OutSideClick from "../../../../utils/Click";

/* eslint-disable react/prop-types */
const LeftData = ({ data }) => {
  const [show, setShow] = useState(false);
  const ItemIcon = data.icon;
  const outsideRef = useRef(null);
  OutSideClick(outsideRef, () => {
    return setShow(false);
  });
  return (
    <>
      {data.link == "settings" ? (
        <div
          onClick={() => setShow(true)}
          className=" group flex gap-x-7 ml-3 mt-3 hover:bg-black py-3 px-7 rounded-[40px] transition duration-300 cursor-pointer"
        >
          <div className="group-hover:text-white">{<ItemIcon />}</div>
          <h3 className="group-hover:text-white font-gilroyMedium text-lg text-black">
            {data.title}
          </h3>
        </div>
      ) : (
        <NavLink
          to={data.link}
          className="group flex gap-x-7 ml-3 mt-3 hover:bg-black py-3 px-7 rounded-[40px] transition duration-300"
        >
          <div className="group-hover:text-white">{<ItemIcon />}</div>
          <h3 className="group-hover:text-white font-gilroyMedium text-lg text-black">
            {data.title}
          </h3>
        </NavLink>
      )}
      {show && (
        <div ref={outsideRef}>
          <SettingOption setShow={setShow} />
        </div>
      )}
    </>
  );
};

export default LeftData;
