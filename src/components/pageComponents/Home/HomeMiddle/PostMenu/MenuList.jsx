/* eslint-disable react/prop-types */
import React from "react";

const MenuList = ({ icon, text }) => {
  const MenuIcon = icon;
  return (
    <div>
      <div className="flex items-center gap-x-2 mt-1 hover:text-title_color transition duration-300 cursor-pointer  text-secondary_color">
        <MenuIcon size={20} />
        <span className="font-gilroySemibold text-base">{text}</span>
      </div>
    </div>
  );
};

export default MenuList;
