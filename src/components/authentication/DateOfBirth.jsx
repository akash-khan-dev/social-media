/* eslint-disable react/prop-types */

const DateOfBirth = ({ years, month, getDates, formik, ageError }) => {
  return (
    <>
      <div className=" flex gap-x-2 lg:gap-x-7 mb-2">
        <select
          name="bYear"
          value={formik.values.bYear}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="off"
          id=""
          className="w-[33%] p-1 border border-line_color rounded-md focus:outline-none font-gilroyNormal "
        >
          <option>Birth Year</option>
          {years.map((year, i) => (
            <option key={i}>{year}</option>
          ))}
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
          <option>Birth Month</option>
          {month.map((item, i) => (
            <option key={i}>{item}</option>
          ))}
        </select>
        <select
          name="bDay"
          autoComplete="off"
          value={formik.values.bDay}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-[33%] p-1 border border-line_color rounded-md focus:outline-none font-gilroyNormal "
        >
          <option>Birth day</option>
          {getDates.map((date, i) => (
            <option key={i}>{date}</option>
          ))}
        </select>
      </div>
      {ageError && (
        <p className="font-gilroyNormal text-base mb-3 -mt-2 text-red ml-2">
          {ageError}
        </p>
      )}
      {formik.errors.bYear && formik.touched.bYear && (
        <p className="font-gilroyNormal text-base mb-3 -mt-2 text-red ml-2">
          {formik.errors.bYear}
        </p>
      )}
      {formik.errors.bMonth && formik.touched.bMonth && (
        <p className="font-gilroyNormal text-base mb-3 -mt-2 text-red ml-2">
          {formik.errors.bMonth}
        </p>
      )}
      {formik.errors.bDay && formik.touched.bDay && (
        <p className="font-gilroyNormal text-base mb-3 -mt-2 text-red ml-2">
          {formik.errors.bDay}
        </p>
      )}
    </>
  );
};

export default DateOfBirth;
