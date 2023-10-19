// let h1 = document.createElement("h1");
// h1.textContent = "Hello";
// h1.classList.add("heading");
// const root = document.getElementById("root");
// root.appendChild(h1);
// console.log(document.getElementById("root"));

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", { id: "heading1" }, "Hello Bro!"),
  React.createElement("h2", { id: "heading2" }, "Hello Bro!"),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
