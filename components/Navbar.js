import React, { useState, useContext } from "react";
import logo from "../images/food.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [first, setfirst] = useState("Logout");
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);

  let { loggedUser } = data;

  return (
    <nav className="flex items-center justify-between m-4  sm:bg-pink-200 border rounded-lg pe-3 lg:bg-blue-200 xl:bg-green-200">
      <Link>
        <img className="w-24" src={logo} alt="siteLogo" />
      </Link>
      <ul className="flex gap-2">
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
        <li className="font-bold">
          <Link to={"/cart"}>Cart ({cartItems.length})</Link>
        </li>
        <li>
          status: {onlineStatus ? "🟢" : "🔴"} {loggedUser}
        </li>
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
