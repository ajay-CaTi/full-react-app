// let h1 = document.createElement("h1");
// h1.textContent = "Hello";
// h1.classList.add("heading");
// const root = document.getElementById("root");
// root.appendChild(h1);
// console.log(document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div>
      <h1>Hello Bro 💯</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
