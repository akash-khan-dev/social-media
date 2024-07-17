import * as Yup from "yup";

const authRules = {
  firstName: Yup.string().min(3).max(15).required("please inter your FistName"),
  lastName: Yup.string().min(3).max(15).required("please inter your LastName"),
  email: Yup.string().required("please inter your email"),
  password: Yup.string().min(6).max(30).required("please inter your Password"),
  bYear: Yup.string().required("please inter your BirthYear"),
  bMonth: Yup.string().required("please inter your BirthMonth"),
  bDay: Yup.string().required("please inter your BirthDay"),
  gender: Yup.string().required("please inter your Gender"),
};

export const SignUpValidations = Yup.object({
  firstName: authRules.firstName,
  lastName: authRules.lastName,
  email: authRules.email,
  password: authRules.password,
  bYear: authRules.bYear,
  bMonth: authRules.bMonth,
  bDay: authRules.bDay,
  gender: authRules.gender,
});
export const SignInValidations = Yup.object({
  email: authRules.email,
  password: authRules.password,
});
export const ForgotPasswordValidations = Yup.object({
  email: authRules.email,
});
export const ResetPasswordCodeValidation = Yup.object({
  code: Yup.string()
    .min(5, "Code must be 5 characters")
    .max(5, "Code must be 5 characters")
    .required("Please enter verification code"),
});

export const NewPassword = Yup.object({
  password: authRules.password,
});
