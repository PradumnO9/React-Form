import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default Header;
