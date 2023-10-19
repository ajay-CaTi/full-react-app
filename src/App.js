// let h1 = document.createElement("h1");
// h1.textContent = "Hello";
// h1.classList.add("heading");
// const root = document.getElementById("root");
// root.appendChild(h1);
// console.log(document.getElementById("root"));

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "../components/Navbar";
import Body from "../components/Body";

const App = () => {
  return (
    <div>
      <Navbar />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
