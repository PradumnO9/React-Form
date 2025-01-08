import { useEffect, useState } from "react";
import useValidation from "../constants/useValidation";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import RegisterNext from "./RegisterNext";

const imgUrl =
  "https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?semt=ais_hybrid";

const Register = () => {
  const { validateEmail, validatePassword, validateAddress, validatePinCode } = useValidation();

  const [eyeToggle, setEyeToggle] = useState(false);
  const [valid, setValid] = useState(false);
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    confirm_password: "",
    address: "",
    city: "",
    pin_code: ""
  });
  const [formErrors, setFromErrors] = useState({
    email_error: "",
    password_error: "",
    confirm_password_error: "",
    address_error: "",
    pin_code_error: ""
  });
  const [MESSAGE] = useState({
    EMAILID_ERROR: "Please enter a valid email",
    PASSWORD_ERROR: "Please enter a valid Password",
    CONFIRM_PASSWORD_ERROR: "Password didn't match",
    MANDATORY: "Please fill all the fields",
    ADDRESS_ERROR: "Address cann't be empty",
    PIN_CODE_ERROR: "Pin Code must be 6 digit"
  });

  const handelChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
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

      case "confirm_password":
        if (value !== registerData.password) {
          setFromErrors({
            confirm_password_error: MESSAGE.CONFIRM_PASSWORD_ERROR,
          });
          setValid(true);
        } else {
          setFromErrors({ confirm_password_error: "" });
          setValid(false);
        }
        break;

        case "address":
        if (!validateAddress(value)) {
          setFromErrors({
            address_error: MESSAGE.ADDRESS_ERROR,
          });
          setValid(true);
        } else {
          setFromErrors({ address_error: "" });
          setValid(false);
        }
        break;

        case "pin_code":
        if (!validatePinCode(value)) {
          setFromErrors({
            pin_code_error: MESSAGE.PIN_CODE_ERROR,
          });
          setValid(true);
        } else {
          setFromErrors({ pin_code_error: "" });
          setValid(false);
        }
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    const userData = localStorage.getItem("register");
    if (userData) {
      setRegisterData(JSON.parse(userData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("register", JSON.stringify(registerData));
  }, [registerData]);

  const [nextState, setNextState] = useState(false);
  const handleNext = (e) => {
    setNextState(true);
  };

  const handelEyeToggle = () => {
    setEyeToggle(!eyeToggle);
  };

  return (
    <div className="md:flex mt-28 border-2 w-[95%] md:w-1/2 h-[300px] md:h-96 mx-auto left-0 right-0 rounded-lg shadow-md">
      <div className="w-full md:w-[45%]">
        {!nextState ? (
          <form className="py-1 px-4 mt-[30px] md:mt-[70px] md:ml-6">
            <h1 className="text-3xl font-bold p-2 text-center mb-2">
              Register
            </h1>
            <div>
              <input
                className="w-full p-2 mb-1 border rounded-sm"
                type="text"
                name="email"
                value={registerData?.email}
                placeholder="Email"
                onChange={handelChange}
              />
              <div className="mt-1">
                {formErrors.email_error && (
                  <span className="text-red-500">{formErrors.email_error}</span>
                )}
              </div>
            </div>
            <div>
              <div className="flex justify-end items-center relative mb-1">
                <input
                  className="w-full p-2 border rounded-sm"
                  type={eyeToggle ? "text" : "password"}
                  name="password"
                  value={registerData?.password}
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
                  <span className="text-red-500">
                    {formErrors.password_error}
                  </span>
                )}
              </div>
            </div>
            <div>
              <input
                className="w-full p-2 border rounded-sm"
                type="password"
                name="confirm_password"
                value={registerData?.confirm_password}
                placeholder="Confirm Password"
                onChange={handelChange}
              />
              <div className="mt-1">
                {formErrors.confirm_password_error && (
                  <span className="text-red-500">
                    {formErrors.confirm_password_error}
                  </span>
                )}
              </div>
            </div>
            <div className="flex justify-end">
              <button className="text-blue-500 underline" onClick={handleNext}>
                next -{">"}
              </button>
            </div>
          </form>
        ) : (
          <RegisterNext
            setNextState={setNextState}
            valid={valid}
            setValid={setValid}
            MESSAGE={MESSAGE}
            registerData={registerData}
            handelChange={handelChange}
            formErrors={formErrors}
          />
        )}
      </div>
      <div className="hidden md:w-[60%] md:block">
        <img className="h-full" src={imgUrl} alt="Login" />
      </div>
    </div>
  );
};

export default Register;
