// eslint-disable-next-line react/prop-types
const Input = ({ type, name, value, onChange, onBlur, placeholder }) => {
  return (
    <>
      <input
        className="w-full border-2 border-line_color px-2 py-2 rounded-md focus:outline-none mb-3"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="off"
        onBlur={onBlur}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
