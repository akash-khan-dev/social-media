import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { SignUpValidations } from "../../validations/SingUp";

const RegistrationForm = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    bYear: "",
    bMonth: "",
    bDay: "",
    gender: "",
  };
  const formik = useFormik({
    initialValues: initialState,
    validationSchema: SignUpValidations,
    onSubmit: (data) => {
      console.log(data);
    },
  });
  console.log(formik.errors);
  return (
    <>
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
              <input
                className="w-full border-2 border-line_color px-2 py-2 rounded-md focus:outline-none mb-3"
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="example@gmail.com"
              />
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

              <div className=" flex gap-x-7 mb-2">
                <select
                  name="bYear"
                  value={formik.values.bYear}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  autoComplete="off"
                  id=""
                  className="w-[33%] p-1 border border-line_color rounded-md focus:outline-none font-gilroyNormal "
                >
                  <option>Birthday Year</option>
                  <option>2000</option>
                  <option>2001</option>
                  <option>2001</option>
                </select>
                <select
                  name="bMonth"
                  value={formik.values.bMonth}
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id=""
                  className="w-[33%] p-1 border border-line_color rounded-md focus:outline-none font-gilroyNormal "
                >
                  <option>Birthday Month</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
                <select
                  name="bDay"
                  autoComplete="off"
                  value={formik.values.bDay}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-[33%] p-1 border border-line_color rounded-md focus:outline-none font-gilroyNormal "
                >
                  <option>Birthday day</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div className="flex gap-3">
                <div>
                  <input
                    className="mr-1"
                    id="male"
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label
                    htmlFor="male"
                    className="font-gilroyMedium text-md text-text_color"
                  >
                    Male
                  </label>
                </div>
                <div className="mb-3">
                  <input
                    className="mr-1"
                    id="female"
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label
                    htmlFor="female"
                    className="font-gilroyMedium text-md text-text_color"
                  >
                    Female
                  </label>
                </div>
                <div>
                  <input
                    className="mr-1"
                    id="others"
                    type="radio"
                    name="gender"
                    value="others"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label
                    htmlFor="others"
                    className="font-gilroyMedium text-md text-text_color"
                  >
                    Others
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className=" font-gilroyMedium px-6 py-2 bg-secondary_bg rounded-md text-white"
              >
                Submit
              </button>
              <p className="mt-5 text-md font-gilroyMedium text-text_color">
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
