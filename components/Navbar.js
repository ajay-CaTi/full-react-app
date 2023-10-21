import React, { useState } from "react";
import logo from "../images/food.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";

const Navbar = () => {
  const [first, setfirst] = useState("Logout");
  const onlineStatus = useOnlineStatus();
  return (
    <nav className="nav">
      <Link>
        <img src={logo} alt="siteLogo" />
      </Link>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link to={"/grocery"}>Grocery</Link>
        </li>
        <li>Services</li>
        <li>status: {onlineStatus ? "🟢" : "🔴"}</li>
        <li>
          <button
            onClick={() => {
              first === "Logout" ? setfirst("Login") : setfirst("Logout");
            }}
            className="login"
          >
            {first}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
