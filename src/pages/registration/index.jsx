import AuthLeft from "../../components/authentication/AuthLeft";
import RegistrationForm from "../../components/authentication/RegistrationForm";
import RegistrationIcon from "../../svg/RegistrationIcon";

const Registration = () => {
  return (
    <div className="relative">
      <div className="w-[400px] h-[400px] bg-purple-100 rounded-full absolute -top-40 -left-40"></div>
      <div className="flex gap-x-6 items-center justify-center h-screen">
        <div className="w-[50%] mt-20">
          <AuthLeft
            icon={<RegistrationIcon />}
            title={"Start Your Journey"}
            description={` Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          distinctio asperiores saepe natus id earum. Nesciunt ut voluptate
          ratione modi, natus commodi temporibus, nisi dignissimos iusto,
          obcaecati delectus cumque vitae consectetur fuga accusantium veniam
          quas numquam ea consequatur! Voluptatibus velit facilis, labore ad
          nisi veniam quisquam molestias. Earum, ea? Fugit commodi suscipit
          dignissimos recusandae magni repellat a assumenda minus nobis error`}
          />
        </div>
        <div className="w-[40%]">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default Registration;
