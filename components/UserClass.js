import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      count: 0,
      count1: 1,
      userInfo: { name: "dummy", login: "dummy-dummy" },
    };
    console.log(props);
  }
  async componentDidMount() {
    // Api call
    const data = await fetch("https://api.github.com/users/ajay-CaTi");
    const json = await data.json();
    console.log(json);

    this.setState({ userInfo: json });

    console.log("componentDidMount");
  }
  render() {
    console.log("render");
    const { count } = this.state;
    const { name, login, avatar_url } = this.state.userInfo;
    return (
      <div style={{ border: "1px solid black" }}>
        <h2>Count Class: {count}</h2>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Click
        </button>
        <img width={"300px"} src={avatar_url} alt="" />
        <h2>Name: {name}</h2>
        <h2>Email: {login}</h2>
      </div>
    );
  }
}
// by batching the componentDid mount hase eract optimize the performance

export default UserClass;
