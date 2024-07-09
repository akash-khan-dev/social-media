/* eslint-disable react/prop-types */
const Gender = ({ formik }) => {
  return (
    <>
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
      {formik.errors.gender && formik.touched.gender && (
        <p className="font-gilroyNormal text-base mb-3 -mt-2 text-red ml-2">
          {formik.errors.gender}
        </p>
      )}
    </>
  );
};

export default Gender;
