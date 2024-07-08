import { Link } from "react-router-dom";

const RegistrationForm = () => {
  return (
    <>
      <div className="w-full">
        <div className="rounded-md shadow-md px-10 py-7">
          <div>
            <form action="">
              <input
                className="w-full border-2 border-line_color px-2 py-2 rounded-md focus:outline-none mb-3"
                type="text"
                placeholder="Firs Name"
              />
              <input
                className="w-full border-2 border-line_color px-2 py-2 rounded-md focus:outline-none mb-3"
                type="text"
                placeholder="Last Name"
              />
              <input
                className="w-full border-2 border-line_color px-2 py-2 rounded-md focus:outline-none mb-3"
                type="text"
                placeholder="example@gmail.com"
              />
              <input
                className="w-full border-2 border-line_color px-2 py-2 rounded-md focus:outline-none mb-3"
                type="text"
                placeholder="password"
              />

              <div className=" flex gap-x-7 mb-2">
                <select
                  name=""
                  id=""
                  className="w-[33%] p-1 border border-line_color rounded-md focus:outline-none font-gilroyNormal "
                >
                  <option value="">Birthday Year</option>
                  <option value="">2000</option>
                  <option value="">2001</option>
                  <option value="">2001</option>
                </select>
                <select
                  name=""
                  id=""
                  className="w-[33%] p-1 border border-line_color rounded-md focus:outline-none font-gilroyNormal "
                >
                  <option value="">Birthday Month</option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                </select>
                <select
                  name=""
                  id=""
                  className="w-[33%] p-1 border border-line_color rounded-md focus:outline-none font-gilroyNormal "
                >
                  <option value="">Birthday day</option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                </select>
              </div>
              <div className="flex gap-3">
                <div>
                  <input
                    className="mr-1"
                    id="male"
                    type="radio"
                    name="gender"
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
