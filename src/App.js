import React, { Component } from "react";
import Avengers from "./Avengers";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <Avengers name="Thor" age="35" />
        <Avengers name="Loki" age="30" />
      </div>
    );
  }
}

export default App;
