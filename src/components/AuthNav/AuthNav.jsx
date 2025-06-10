import { NavLink } from "react-router-dom";
import clsx from "clsx";
import c from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={c.authNav}>
      <NavLink
        className={({ isActive }) => clsx(c.link, isActive && c.active)}
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className={({ isActive }) => clsx(c.link, isActive && c.active)}
        to="/login"
      >
        LogIn
      </NavLink>
    </div>
  );
};

export default AuthNav;
