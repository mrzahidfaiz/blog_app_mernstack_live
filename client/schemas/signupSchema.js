import * as yup from "yup";

const passwordPattren = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,25}$/;

const signupSchema = yup.object().shape({
  name: yup.string().max(30).required("Name is Required!"),
  username: yup.string().min(6).max(25).required("Username is required!"),
  email: yup.string().email().required("Email is Required!"),
  password: yup
    .string()
    .matches(passwordPattren)
    .required("Password is Required!"),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export default signupSchema;
