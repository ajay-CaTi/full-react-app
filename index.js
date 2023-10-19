let h1 = document.createElement("h1");
h1.textContent = "Hello";
h1.classList.add("heading");
const root = document.getElementById("root");
root.appendChild(h1);
console.log(document.getElementById("root"));
