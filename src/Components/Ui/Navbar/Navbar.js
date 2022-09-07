import { NavLink, Link, Outlet } from "react-router-dom";
import styles from "../../../App.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <h1>
            <NavLink
              to="/"
              style={(navData) => ({
                color: navData.isActive ? "white" : "black",
              })}
            >
              Home
            </NavLink>
          </h1>
          <li>
            <NavLink
              to="/users"
              style={(navData) => ({
                color: navData.isActive ? "white" : "black",
              })}
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              style={(navData) => ({
                color: navData.isActive ? "white" : "black",
              })}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              style={(navData) => ({
                color: navData.isActive ? "white" : "black",
              })}
            >
              SignUp
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
