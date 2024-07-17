import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import DateOfBirth from "./DateOfBirth";
import Gender from "./Gender";
import { useAddUserMutation } from "../../StateFeature/api/authApi";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { ToastError } from "../../utils/ToastError";
import { ToastSuccess } from "../../utils/ToastSuccess";
import { BeatLoader } from "react-spinners";
import Input from "../common/Input";
import InputError from "../common/InputError";
import { SignUpValidations } from "../../validations/FormValidation";

const RegistrationForm = () => {
  const [ageError, setAgeError] = useState();
  const [showPass, setShowPass] = useState(false);
  const [addUser, { isLoading }] = useAddUserMutation();
  const navigate = useNavigate();
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
    if (signUpMutation.error) {
      ToastError(signUpMutation?.error?.data?.Message);
    } else {
      ToastSuccess(signUpMutation?.data?.message);
      setTimeout(() => {
        navigate("/login");
      }, 2500);
      return;
    }
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

  const handleShowPassword = () => {
    if (showPass) {
      setShowPass(false);
    } else {
      setShowPass(true);
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="w-full">
        <div className="rounded-md shadow-md px-10 py-7">
          <div>
            <form onSubmit={formik.handleSubmit} action="">
              <Input
                type="text"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                autoComplete="off"
                onBlur={formik.handleBlur}
                placeholder="Firs Name"
              />
              <InputError
                error={formik.errors.firstName}
                touched={formik.touched.firstName}
              />
              <Input
                type="text"
                name="lastName"
                value={formik.values.lastName}
                autoComplete="off"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Last Name"
              />
              <InputError
                error={formik.errors.lastName}
                touched={formik.touched.lastName}
              />
              <Input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="example@gmail.com"
              />
              <InputError
                error={formik.errors.email}
                touched={formik.touched.email}
              />
              <div className="relative">
                <Input
                  type={showPass ? "text" : "password"}
                  name="password"
                  autoComplete="off"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Password"
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
              {isLoading ? (
                <button
                  type="submit"
                  disabled
                  className=" font-gilroyMedium px-6 py-2 bg-secondary_bg rounded-md text-white"
                >
                  <BeatLoader />
                </button>
              ) : (
                <button
                  type="submit"
                  className=" font-gilroyMedium px-6 py-2 bg-secondary_bg rounded-md text-white"
                >
                  Submit
                </button>
              )}
              <p className="mt-5 text-sm lg:text-md font-gilroyMedium text-text_color">
                Already have an account?{" "}
                <Link className="text-red" to={"/login"}>
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
