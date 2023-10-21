import React, { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    let sa = setInterval(() => {
      console.log("User");
    }, 1000);
    return () => {
      // unmmounting phase
      clearInterval(sa);
    };
  }, []);
  return (
    <div style={{ border: "1px solid black" }}>
      <h1>User</h1>
      <h2>Count Function : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <h2>Name: {name}</h2>
      <h2>Email: email@gmail.com</h2>
    </div>
  );
};

export default User;
