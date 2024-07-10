/* eslint-disable react/prop-types */
const LeftData = ({ data }) => {
  const ItemIcon = data.icon;
  return (
    <>
      <div className="group flex gap-x-7 ml-3 mt-5 hover:bg-black py-3 px-7 rounded-[40px] transition duration-300">
        <div className="group-hover:text-white">{<ItemIcon />}</div>
        <h3 className="group-hover:text-white font-gilroyMedium text-lg text-black">
          {data.title}
        </h3>
      </div>
    </>
  );
};

export default LeftData;
