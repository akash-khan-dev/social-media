/* eslint-disable react/prop-types */
import React, { useState } from "react";
import EditInfoField from "./EditInfoField";
import { CiCirclePlus } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
const Details = ({
  text,
  value,
  icon,
  placeholder,
  name,
  handleChange,
  handleUpdateDetails,
  rel,
  loading,
}) => {
  const [showEdit, setShowEdit] = useState(false);
  const Icon = () => {
    return icon;
  };

  return (
    <div className="my-2 ">
      {value ? (
        <div className="flex items-center justify-between pr-10">
          <div className="flex gap-3 text-secondary_color items-center cursor-pointer">
            <Icon size={25} />
            <h3 className="font-gilroyMedium text-base text-secondary_color">
              {value}
            </h3>
          </div>
          <div className="cursor-pointer text-secondary_color">
            <FiEdit onClick={() => setShowEdit(true)} />
          </div>
        </div>
      ) : (
        <div
          onClick={() => setShowEdit(true)}
          className="flex gap-3 text-secondary_color items-center cursor-pointer"
        >
          <CiCirclePlus size={25} />
          <h3 className=" font-gilroyMedium text-base text-secondary_color">
            Add {text}
          </h3>
        </div>
      )}

      {showEdit && (
        <EditInfoField
          loading={loading}
          detail
          rel={rel}
          handleUpdateDetails={handleUpdateDetails}
          name={name}
          handleChange={handleChange}
          value={value}
          setShowEdit={setShowEdit}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default Details;
