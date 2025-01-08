import { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import useValidation from "../constants/useValidation";

const imgUrl =
  "https://static.vecteezy.com/system/resources/previews/003/689/228/non_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg";

const Login = () => {
  const { validateEmail, validatePassword } = useValidation();

  const [eyeToggle, setEyeToggle] = useState(false);
  const [mandatory, setMandatory] = useState(false);
  const [valid, setValid] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFromErrors] = useState({
    email_error: "",
    password_error: "",
  });
  const [MESSAGE] = useState({
    EMAILID_ERROR: "Please enter a valid email",
    PASSWORD_ERROR: "Please enter a valid Password",
    MANDATORY: "Please fill all the fields",
  });

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateFields(name, value);
  };

  const validateFields = (name, value) => {
    switch (name) {
      case "email":
        if (!validateEmail(value)) {
          setFromErrors({ email_error: MESSAGE.EMAILID_ERROR });
          setValid(true);
        } else {
          setFromErrors({ email_error: "" });
          setValid(false);
        }

        break;

      case "password":
        if (!validatePassword(value)) {
          setFromErrors({ password_error: MESSAGE.PASSWORD_ERROR });
          setValid(true);
        } else {
          setFromErrors({ password_error: "" });
          setValid(false);
        }
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    const userData = localStorage.getItem("login");
    if (userData) {
      setFormData(JSON.parse(userData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("login", JSON.stringify(formData));
  }, [formData]);

  const handleSubmitButton = (e) => {
    e.preventDefault();
    if(!formData.email || !formData.password) {
      setMandatory(MESSAGE.MANDATORY);
      setValid(true);
    } else {
      console.log(formData);
    }
  };

  const handelEyeToggle = () => {
    setEyeToggle(!eyeToggle);
    console.log(formData);
  };

  return (
    <div className="md:flex mt-28 border-2 w-[95%] md:w-1/2 h-[300px] md:h-96 mx-auto left-0 right-0 rounded-lg shadow-md">
      <div className="w-full md:w-[45%]">
        <form className="py-1 px-4 mt-[30px] md:mt-[70px] md:ml-6">
          <h1 className="text-3xl font-bold p-2 text-center mb-2">Login</h1>
          <input
            className="w-full p-2 mb-1 border rounded-sm"
            type="text"
            name="email"
            value={formData?.email}
            placeholder="Email"
            onChange={handelChange}
          />
          <div className="mt-1">
            {formErrors.email_error && (
              <span className="text-red-500">{formErrors.email_error}</span>
            )}
          </div>
          <div className="flex justify-end items-center relative">
            <input
              className="w-full p-2 border rounded-sm"
              type={eyeToggle ? "text" : "password"}
              name="password"
              value={formData?.password}
              placeholder="Password"
              onChange={handelChange}
            />
            {eyeToggle ? (
              <FaRegEye
                className="absolute mr-2 cursor-pointer"
                size={20}
                onClick={handelEyeToggle}
              />
            ) : (
              <FaRegEyeSlash
                className="absolute mr-2 cursor-pointer"
                size={20}
                onClick={handelEyeToggle}
              />
            )}
          </div>
          <div className="mt-1">
            {formErrors.password_error && (
              <span className="text-red-500">{formErrors.password_error}</span>
            )}
          </div>
          <div className="mt-2">{mandatory && <span className="text-red-500">{mandatory}</span>}</div>
          {valid ? (
            <button
              disabled
              className="w-full bg-blue-400 rounded-lg p-2 my-2 text-lg text-white"
              onClick={handleSubmitButton}
            >
              Submit
            </button>
          ) : (
            <button
              className="w-full bg-blue-400 hover:bg-opacity-85 rounded-lg p-2 my-2 text-lg text-white"
              onClick={handleSubmitButton}
            >
              Submit
            </button>
          )}
        </form>
      </div>
      <div className="hidden md:w-[60%] md:block">
        <img className="h-full" src={imgUrl} alt="Login" />
      </div>
    </div>
  );
};

export default Login;
