import { useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import SettingOption from "./SettingOption/SettingOption";
import OutSideClick from "../../../../utils/Click";

/* eslint-disable react/prop-types */
const LeftData = ({ data }) => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const path = location.pathname;

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
          className={`${
            show ? "lg:bg-black" : "bg-transparent"
          } group flex lg:ml-3 xl:gap-x-7 lg:mt-3 lg:hover:bg-black lg:py-4 lg:px-4 xl:px-7 rounded-[40px] transition duration-300 cursor-pointer`}
        >
          <div
            className={`${
              show ? "text-white" : "bg-transparent"
            } lg:group-hover:text-white`}
          >
            {<ItemIcon />}
          </div>
          <h3
            className={`${
              show ? "text-white" : "bg-transparent"
            } hidden xl:block lg:group-hover:text-white font-gilroyMedium text-base xl:text-lg text-black`}
          >
            {data.title}
          </h3>
        </div>
      ) : (
        <NavLink
          to={data.link}
          style={
            path === data.link
              ? { backgroundColor: "#29313D", color: "white" }
              : {}
          }
          className={`group  flex  xl:gap-x-7 lg:ml-3 lg:mt-3 lg:hover:bg-black lg:py-3 lg:px-4 xl:px-6 rounded-[40px] transition duration-300`}
        >
          <div className="lg:group-hover:text-white">{<ItemIcon />}</div>
          <h3
            style={path === data.link ? { color: "white" } : {}}
            className="hidden xl:block group-hover:text-white font-gilroyMedium text-base xl:text-lg text-black"
          >
            {data.title}
          </h3>
        </NavLink>
      )}
      {show && (
        <div ref={outsideRef} className="relative">
          <SettingOption setShow={setShow} />
        </div>
      )}
    </>
  );
};

export default LeftData;
