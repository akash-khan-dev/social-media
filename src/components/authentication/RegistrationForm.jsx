import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { SignUpValidations } from "../../validations/SingUp";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import DateOfBirth from "./DateOfBirth";
import Gender from "./Gender";
import { useAddUserMutation } from "../../StateFeature/api/authApi";

const RegistrationForm = () => {
  const [ageError, setAgeError] = useState();
  const [addUser, { isLoading, error }] = useAddUserMutation();
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    bYear: new Date().getFullYear(),
    bMonth: new Date().getMonth(),
    bDay: new Date().getDay(),
    gender: "",
  };
  console.log(error);

  const registration = async (data) => {
    const signUpMutation = await addUser({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      bYear: data.bYear,
      bMonth: data.bMonth,
      bDay: data.bDay,
      gender: data.gender,
    });
    console.log(signUpMutation.data);
  };

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: SignUpValidations,
    onSubmit: (data) => {
      const currentDate = new Date();
      const pick_date = new Date(
        formik.values.bYear,
        formik.values.bMonth - 1,
        formik.values.bDay
      );
      const adult = new Date(1970 + 18, 0, 1);
      const toOld = new Date(1970 + 70, 0, 1);
      if (currentDate - pick_date < adult) {
        return setAgeError("Underage you are not 18");
      } else if (currentDate - pick_date > toOld) {
        return setAgeError("you are more then 70");
      }
      setAgeError("");
      registration(data);
    },
  });

  // for years
  const tempYear = new Date().getFullYear();
  const years = Array.from(new Array(105), (val, index) => tempYear - index);
  // for month
  const month = Array.from(new Array(12), (val, index) => 1 + index);
  // for day
  const day = () => {
    return new Date(formik.values.bYear, formik.values.bMonth, 0).getDate();
  };
  const getDates = Array.from(new Array(day()), (val, index) => 1 + index);

  return (
    <>
      <ToastContainer />
      <div className="w-full">
        <div className="rounded-md shadow-md px-10 py-7">
          <div>
            <form onSubmit={formik.handleSubmit} action="">
              <input
                className="w-full border-2 border-line_color px-2 py-2 rounded-md focus:outline-none mb-3"
                type="text"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                autoComplete="off"
                onBlur={formik.handleBlur}
                placeholder="Firs Name"
              />
              {formik.errors.firstName && formik.touched.firstName && (
                <p className="font-gilroyNormal text-base mb-3 -mt-2 text-red ml-2">
                  {formik.errors.firstName}
                </p>
              )}
              <input
                className="w-full border-2 border-line_color px-2 py-2 rounded-md focus:outline-none mb-3"
                type="text"
                name="lastName"
                value={formik.values.lastName}
                autoComplete="off"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Last Name"
              />
              {formik.errors.lastName && formik.touched.firstName && (
                <p className="font-gilroyNormal text-base mb-3 -mt-2 text-red ml-2">
                  {formik.errors.lastName}
                </p>
              )}
              <input
                className="w-full border-2 border-line_color px-2 py-2 rounded-md focus:outline-none mb-3"
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="example@gmail.com"
              />
              {formik.errors.email && formik.touched.email && (
                <p className="font-gilroyNormal text-base mb-3 -mt-2 text-red ml-2">
                  {formik.errors.email}
                </p>
              )}
              <input
                className="w-full border-2 border-line_color px-2 py-2 rounded-md focus:outline-none mb-3"
                type="password"
                name="password"
                autoComplete="off"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="password"
              />
              {formik.errors.password && formik.touched.password && (
                <p className="font-gilroyNormal text-base mb-3 -mt-2 text-red ml-2">
                  {formik.errors.password}
                </p>
              )}
              <div>
                <DateOfBirth
                  years={years}
                  month={month}
                  getDates={getDates}
                  formik={formik}
                  ageError={ageError}
                />
              </div>
              <div>
                <Gender formik={formik} />
              </div>
              <button
                type="submit"
                className=" font-gilroyMedium px-6 py-2 bg-secondary_bg rounded-md text-white"
              >
                Submit
              </button>
              <p className="mt-5 text-sm lg:text-md font-gilroyMedium text-text_color">
                Already have an account?{" "}
                <Link className="text-red" to={"/"}>
                  Sing IN
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
