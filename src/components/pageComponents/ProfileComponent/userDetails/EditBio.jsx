/* eslint-disable react/prop-types */

import { BeatLoader } from "react-spinners";

const EditBio = ({
  loading,
  maxChar,
  name,
  value,
  setShowEditBio,
  handleChange,
  handleUpdateBio,
}) => {
  return (
    <>
      <textarea
        className="resize-none h-24 border border-line_color outline-none w-full px-3 py-1 rounded-md font-gilroyMedium text-secondary_color text-sm"
        placeholder="add Bio"
        value={value}
        maxLength={"100"}
        name={name}
        onChange={handleChange}
      />
      <div className="my-2 text-right">
        <p className="font-gilroyNormal text-sm text-secondary_color ">
          {maxChar} characters remaining
        </p>
      </div>
      <div className="flex gap-x-2 justify-end my-2">
        <button
          onClick={() => setShowEditBio(false)}
          className="font-gilroyMedium  text-base  text-black py-1 px-3 bg-white_100 rounded-md shadow-md"
        >
          Cancel
        </button>
        <button
          onClick={handleUpdateBio}
          className="font-gilroyMedium text-white text-base py-1 bg-blue px-3  rounded-md shadow-md"
        >
          {loading ? <BeatLoader /> : "Save"}
        </button>
      </div>
    </>
  );
};

export default EditBio;
