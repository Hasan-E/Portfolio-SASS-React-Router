import { FaHome, FaInfo } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { IoMdContact } from "react-icons/io";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navContainer">
      <ul>
        <li>
          <NavLink to="/" className={({isActive})=> isActive ? "linkActive" : "navLink"}>
            <i>
              <FaHome />
            </i>{" "}
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({isActive})=> isActive ? "linkActive" : "navLink"}>
            <i>
              <FaInfo />
            </i>{" "}
            ABOUT ME
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({isActive})=> isActive ? "linkActive" : "navLink"}>
            <i>
              <GoProjectRoadmap />
            </i>{" "}
            MY PROJECTS
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({isActive})=> isActive ? "linkActive" : "navLink"}>
            <i>
              <IoMdContact />
            </i>{" "}
            CONTACT
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
