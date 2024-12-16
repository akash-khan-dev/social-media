/* eslint-disable react/prop-types */

import { BeatLoader } from "react-spinners";

const EditInfoField = ({
  detail,
  rel,
  loading,
  maxChar,
  name,
  value,
  setShowEditBio,
  handleChange,
  handleUpdateDetails,
  placeholder,
  setShowEdit,
}) => {
  return (
    <>
      {rel ? (
        <select
          name={name}
          onChange={handleChange}
          value={value}
          className="w-full border border-line_color bg-white_100 p-2 rounded-md"
          id="options"
        >
          <option value="Select Relation Ship Status">
            Select Relation Ship Status
          </option>
          <option value="Single">Single</option>
          <option value="In a Relationship">In a Relationship</option>
          <option value="Married">Married</option>
          <option value="it's Complicated">it's Complicated</option>
          <option value="option4">Divorce</option>
        </select>
      ) : (
        <textarea
          className="resize-none h-24 border border-line_color outline-none w-full px-3 py-1 rounded-md font-gilroyMedium text-secondary_color text-sm"
          placeholder={placeholder}
          value={value}
          maxLength={"100"}
          name={name}
          onChange={handleChange}
        />
      )}
      {!detail && (
        <div className=" text-right">
          <p className="font-gilroyNormal text-sm text-secondary_color ">
            {maxChar} characters remaining
          </p>
        </div>
      )}
      <div className="flex gap-x-2 justify-end my-2">
        <button
          onClick={() => (!detail ? setShowEditBio(false) : setShowEdit(false))}
          className="font-gilroyMedium  text-base  text-black py-1 px-3 bg-white_100 rounded-md shadow-md"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            handleUpdateDetails();
            if (detail) {
              setShowEdit(false);
            }
          }}
          className="font-gilroyMedium text-white text-base py-1 bg-blue px-3  rounded-md shadow-md"
        >
          {loading ? <BeatLoader /> : "Save"}
        </button>
      </div>
    </>
  );
};

export default EditInfoField;
