import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import { HashLink } from "react-router-hash-link";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/reducers/rootSlice";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import jwt_decode from "jwt-decode";

const Navbar = () => {
  const [iconActive, setIconActive] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(
    localStorage.getItem("token")
      ? jwt_decode(localStorage.getItem("token"))
      : ""
  );

  const logoutFunc = () => {
    dispatch(setUserInfo({}));
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header>
      <nav className={iconActive ? "nav-active" : ""}>
        <img
          src="https://www.animatedimages.org/data/media/506/animated-health-image-0011.gif"
          alt=""
          style={{
            width: "3%",
            borderRadius: "40%",
            border: "1px solid #00B4CC",
          }}
        />
        <h2 className="nav-logo text-cyan-500 ">
          <NavLink to={"/"}>MODERN MEDICARE</NavLink>
        </h2>
        <ul className="nav-links">
          <li>
            <NavLink to={"/"}>HOME</NavLink>
          </li>
          <li>
            <NavLink to={"/doctors"}>DOCTORS</NavLink>
          </li>
          <li>
            <NavLink to={"/searchDoctors"}>SEARCH DOCTOR</NavLink>
          </li>
          <li>
            <NavLink to={"/blogs"}>DOCTOR BLOG</NavLink>
          </li>
          <li>
            <NavLink to={"/locations"}>LOCATION</NavLink>
          </li>
          {token && user.isAdmin && (
            <li>
              <NavLink to={"/dashboard/users"}>DASHBOARD</NavLink>
            </li>
          )}
          {token && !user.isAdmin && (
            <>
              <li>
                <NavLink to={"/appointments"}>APPOINTMENTS</NavLink>
              </li>
              <li>
                <NavLink to={"/notifications"}>NOTIFICATION</NavLink>
              </li>
              <li>
                <NavLink to={"/applyfordoctor"}> APPLY FOR DOCTOR</NavLink>
              </li>
              <li>
                <HashLink to={"/#contact"}>CONTACT US</HashLink>
              </li>
              <li>
                <NavLink to={"/profile"}>PROFILE</NavLink>
              </li>
            </>
          )}
          {!token ? (
            <>
              <li>
                <NavLink className="btn" to={"/login"}>
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink className="btn" to={"/register"}>
                  Register
                </NavLink>
              </li>
            </>
          ) : (
            <li>
              <span className="btn" onClick={logoutFunc}>
                Logout
              </span>
            </li>
          )}
        </ul>
      </nav>
      <div className="menu-icons">
        {!iconActive && (
          <FiMenu
            className="menu-open"
            onClick={() => {
              setIconActive(true);
            }}
          />
        )}
        {iconActive && (
          <RxCross1
            className="menu-close"
            onClick={() => {
              setIconActive(false);
            }}
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
