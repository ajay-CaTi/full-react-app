import React, { useState } from "react";
import logo from "../images/food.png";

const Navbar = () => {
  const [first, setfirst] = useState("Logout");
  return (
    <nav className="nav">
      <img src={logo} alt="siteLogo" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Services</li>
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
