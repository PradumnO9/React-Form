import { Link } from "react-router-dom";

const Navigation = () => {

  const buttonCSS = "px-2 md:px-4 py-2 m-2 rounded-lg text-xl hover:opacity-85";

  return (
    <div className="flex justify-between bg-slate-100 shadow-md">
      <Link className="text-center text-3xl font-bold underline m-2" to="/">
        React Forms
      </Link>
      <div className="flex justify-center items-center text-white">
        <Link className={"bg-green-500  " + buttonCSS} to="/login">
          Login
        </Link>
        <Link className={"bg-orange-500 " + buttonCSS} to="/register">
          I'm New
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
