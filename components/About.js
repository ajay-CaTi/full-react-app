import React, { Component } from "react";
import UserClass from "./UserClass";
import User from "./User";

class About extends Component {
  constructor() {
    super();
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    // this.timer = setInterval(() => {
    //   console.log("first");
    // }, 1000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timer); // clear
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>About</h1>
        {/* <UserClass name={"Ajay"} /> */}
        <User name={"Ajay"} />
      </div>
    );
  }
}

export default About;
