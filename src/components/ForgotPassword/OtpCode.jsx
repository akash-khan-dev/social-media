// eslint-disable-next-line no-unused-vars
import React from "react";
import { ResetPasswordCodeValidation } from "../../validations/FormValidation";
import { useFormik } from "formik";
import InputError from "../common/InputError";
import { Link } from "react-router-dom";
import Input from "../common/Input";

const OtpCode = () => {
  const formik = useFormik({
    initialValues: { code: "" },
    validationSchema: ResetPasswordCodeValidation,
    onSubmit: (data) => {
      console.log(data);
    },
  });
  return (
    <div className="bg-white min-w-[320px] w-[530px] px-8 py-4 rounded-md">
      <div>
        <h2 className="font-gilroyBold text-xl text-black border-b border-line_color pb-3 text-center">
          Verification Code
        </h2>
        <p className="font-gilroyMedium text-base text-title_color my-2">
          Please enter code that been sent you email
        </p>
      </div>
      <div>
        <form onSubmit={formik.handleSubmit} action="">
          <Input
            type="text"
            name="code"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your verification code"
          />

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
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpCode;
