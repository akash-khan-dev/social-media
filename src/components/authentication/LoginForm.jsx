/* eslint-disable react/prop-types */

import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../StateFeature/api/authApi";
import { ToastError } from "../../utils/ToastError";
import { SignInValidations } from "../../validations/SingUp";
import { ToastContainer } from "react-toastify";
import { ToastSuccess } from "../../utils/ToastSuccess";

const LoginForm = () => {
  const navigate = useNavigate();
  const [loginUser] = useLoginUserMutation();

  const loginFunc = async (data) => {
    const loginMutation = await loginUser({
      email: data.email,
      password: data.password,
    });
    if (loginMutation.error) {
      return ToastError(loginMutation?.error?.data?.message);
    } else {
      ToastSuccess(loginMutation?.data?.message);
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

              <button
                type="submit"
                className=" font-gilroyMedium px-6 py-2 bg-secondary_bg rounded-md text-white"
              >
                Submit
              </button>
              <p className="mt-5 text-sm lg:text-md font-gilroyMedium text-text_color">
                Already have an account?{" "}
                <Link className="text-red" to={"/registration"}>
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

export default LoginForm;
