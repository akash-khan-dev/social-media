/* eslint-disable react/prop-types */
const InputError = ({error,touched}) => {
  return (
    <>
      {error && touched && (
        <p className="font-gilroyNormal text-base mb-3 -mt-2 text-red ml-2">
          {error}
        </p>
      )}
    </>
  );
};

export default InputError;
