// eslint-disable-next-line no-unused-vars
import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { ForgotPasswordValidations } from "../../validations/FormValidation";
import InputError from "../../components/common/InputError";
import Input from "../common/Input";

const FindAccount = () => {
  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: ForgotPasswordValidations,
    onSubmit: (data) => {
      console.log(data);
    },
  });
  return (
    <div className="bg-white min-w-[320px] w-[530px] px-8 py-4 rounded-md">
      <h2 className="font-gilroyBold text-xl text-black border-b border-line_color pb-3 text-center">
        Find your account
      </h2>
      <p className="font-gilroyMedium text-base text-title_color my-2">
        please enter your email address or mobile number to find your account
      </p>
      <form onSubmit={formik.handleSubmit} action="">
        <Input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Email address or mobile number"
        />

        <InputError
          error={formik.errors.email}
          touched={formik.touched.email}
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
          Search
        </button>
      </form>
    </div>
  );
};

export default FindAccount;
