/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { NewPassword } from "../../validations/FormValidation";
import { useFormik } from "formik";
import InputError from "../common/InputError";
import { Link, useNavigate } from "react-router-dom";
import Input from "../common/Input";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { useChangePasswordMutation } from "../../StateFeature/api/authApi";
import { ToastContainer } from "react-toastify";
import { ToastSuccess } from "../../utils/ToastSuccess";
import { ToastError } from "../../utils/ToastError";

const ChangePassword = ({ user }) => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [changePassword] = useChangePasswordMutation();

  const handleShowPassword = () => {
    if (!showPass) {
      setShowPass(true);
    } else {
      setShowPass(false);
    }
  };
  const formik = useFormik({
    initialValues: { password: "" },
    validationSchema: NewPassword,
    onSubmit: async (data) => {
      try {
        const result = await changePassword({
          password: data.password,
          email: user.email,
        }).unwrap();
        ToastSuccess(result.data.message);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } catch (err) {
        ToastError(err.data.message);
      }
    },
  });
  return (
    <>
      <ToastContainer />
      <div className="bg-white min-w-[320px] w-[530px] px-8 py-4 rounded-md">
        <div>
          <h2 className="font-gilroyBold text-xl text-black border-b border-line_color pb-3 text-center">
            Change Your Password
          </h2>
          <p className="font-gilroyMedium text-base text-title_color mt-2">
            Pick a Strong Password
          </p>
        </div>
        <div>
          <form onSubmit={formik.handleSubmit} action="">
            <div className="relative mt-2">
              <Input
                type={showPass ? "text" : "password"}
                name="password"
                autoComplete="off"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="New Password"
              />
              <InputError
                error={formik.errors.password}
                touched={formik.touched.password}
              />
              <div
                onClick={handleShowPassword}
                className="absolute top-3 right-5 cursor-pointer"
              >
                {showPass ? <FaRegEyeSlash /> : <FaEye />}
              </div>
            </div>
            <InputError
              error={formik.errors.code}
              touched={formik.touched.code}
            />
            <div className="w-full h-[1px] bg-line_color mt-2 mb-3"></div>
            <Link to="/login">
              <button className="bg-[#f0f2f5] p-3 md:px-5 md:py-2 rounded-md font-gilroyMedium text-sm md:text-base text-title_color mr-3">
                Cancel
              </button>
            </Link>
            <button
              type="submit"
              className="bg-primary_color md:px-5 md:py-2 rounded-md font-gilroyMedium text-sm md:text-base text-white mr-3"
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
