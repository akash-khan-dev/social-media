/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../StateFeature/api/authApi";
import { ToastError } from "../../utils/ToastError";
import { SignInValidations } from "../../validations/SingUp";
import { ToastContainer } from "react-toastify";
import { ToastSuccess } from "../../utils/ToastSuccess";
import { BeatLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { loggedInUser } from "../../StateFeature/Slice/authSlice";
import Input from "../common/Input";
import InputError from "../common/InputError";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const loginFunc = async (data) => {
    const loginMutation = await loginUser({
      email: data.email,
      password: data.password,
    });
    if (loginMutation.error) {
      return ToastError(loginMutation?.error?.data?.message);
    } else {
      ToastSuccess(loginMutation?.data?.message);
      const { message, ...rest } = loginMutation.data;
      dispatch(loggedInUser(rest));
      localStorage.setItem("userInfo", JSON.stringify(rest));

      setTimeout(() => {
        navigate("/");
      }, 2500);
      return;
    }
  };
  const initialState = {
    email: "",
    password: "",
  };
  const formik = useFormik({
    initialValues: initialState,
    validationSchema: SignInValidations,
    onSubmit: (data) => {
      loginFunc(data);
    },
  });
  return (
    <>
      <ToastContainer />
      <div className="w-full">
        <div className="rounded-md shadow-md px-10 py-7">
          <div>
            <form onSubmit={formik.handleSubmit} action="">
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
              <Input
                type="password"
                name="password"
                autoComplete="off"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="password"
              />
              <InputError
                error={formik.errors.password}
                touched={formik.touched.password}
              />
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
                  Login
                </button>
              )}
              <p className="mt-5 text-sm lg:text-md font-gilroyMedium text-text_color">
                Already have an account?{" "}
                <Link className="text-red" to={"/registration"}>
                  Sing In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
