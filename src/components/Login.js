import { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const imgUrl =
  "https://static.vecteezy.com/system/resources/previews/003/689/228/non_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [eyeToggle, setEyeToggle] = useState(false);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setFormData(JSON.parse(userData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(formData));
  }, [formData]);

  const handleSubmitButton = (e) => {
    e.preventDefault();
  };

  const handelEyeToggle = () => {
    setEyeToggle(!eyeToggle);
    console.log(formData);
  };

  return (
    <div className="flex mt-28 border-2 w-1/2 h-96 mx-auto left-0 right-0 rounded-lg shadow-md">
      <div className="w-[45%]">
        <form className="py-1 px-4 mt-[70px] ml-6">
          <h1 className="text-3xl font-bold p-2 text-center mb-2">Login</h1>
          <input
            className="w-full p-2 mb-1 border rounded-sm"
            type="text"
            name="email"
            value={formData?.email}
            placeholder="Email"
            onChange={handelChange}
          />
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
          <button
            className="w-full bg-blue-400 hover:opacity-85 rounded-lg p-2 my-2 text-lg text-white"
            onClick={handleSubmitButton}
          >
            Submit
          </button>
        </form>
      </div>
      <div className="w-[60%]">
        <img className="h-full" src={imgUrl} alt="Login" />
      </div>
    </div>
  );
};

export default Login;
