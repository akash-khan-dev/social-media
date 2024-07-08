/* eslint-disable react/prop-types */
const AuthLeft = ({ icon, title, description }) => {
  return (
    <>
      <div className="container">
        <div className="flex items-center justify-center">{icon}</div>
        <h1 className="font-gilroyBold text-6xl text-primary_color">{title}</h1>
        <p className="font-gilroyNormal text-lg text-text_color pt-4">
          {description}
        </p>
      </div>
    </>
  );
};

export default AuthLeft;
