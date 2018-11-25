import React, { Component } from "react";
import Avengers from "./Avengers";

class App extends Component {
  state = {
    avengers: [
      { name: "Thor", age: 30, id: 1 },
      { name: "Hulk", age: 20, id: 2 },
      { name: "Thanos", age: 50, id: 3 }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <Avengers avengers={this.state.avengers} />
      </div>
    );
  }
}

export default App;
