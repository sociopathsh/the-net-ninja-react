import React, { Component } from "react";
import Avengers from "./Avengers";
import AddAvenger from "./AddAvenger";

class App extends Component {
  state = {
    avengers: [
      { name: "Thor", age: 30, id: 1 },
      { name: "Hulk", age: 20, id: 2 },
      { name: "Thanos", age: 50, id: 3 }
    ]
  };
  addAvenger = avenger => {
    // console.log(avenger);
    avenger.id = Math.random();
    let avengers = [...this.state.avengers, avenger];
    this.setState({
      avengers: avengers
    });
  };
  deleteAvenger = id => {
    // console.log(id);
    let avengers = this.state.avengers.filter(avenger => {
      return avenger.id !== id;
    });
    this.setState({
      avengers: avengers
    });
  };
  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <Avengers
          deleteAvenger={this.deleteAvenger}
          avengers={this.state.avengers}
        />
        <AddAvenger addAvenger={this.addAvenger} />
      </div>
    );
  }
}

export default App;
