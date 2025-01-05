import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex justify-between bg-slate-100 shadow-md">
      <h1 className="text-center text-3xl font-bold underline m-2">
        React Forms
      </h1>
      <div className="flex justify-center items-center text-white">
        <Link className="px-4 py-2 m-2 bg-green-500 rounded-lg text-xl hover:opacity-85" to="/login">
          Login
        </Link>
        <Link className="px-4 py-2 m-2 bg-orange-500 rounded-lg text-xl hover:opacity-85" to="/register">
          I'm New
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
