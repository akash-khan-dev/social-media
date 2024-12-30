/* eslint-disable react/prop-types */

const MenuList = ({ icon, text }) => {
  const MenuIcon = icon;
  return (
    <div>
      <div className="flex hover:bg-white_100 px-3 py-2 items-center gap-x-2 mt-2 hover:text-title_color transition duration-300 cursor-pointer  text-secondary_color">
        <MenuIcon size={20} />
        <span className="font-gilroyMedium text-base">{text}</span>
      </div>
    </div>
  );
};

export default MenuList;
