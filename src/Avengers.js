import React, { Component } from "react";

class Avengers extends Component {
  render() {
    const { name, age } = this.props;
    return (
      <div className="avenger">
        {/* <div>Name: {this.props.name}</div>
        <div>Age: {this.props.age}</div> */}
        <div>Name: {name}</div>
        <div>Age: {age}</div>
      </div>
    );
  }
}

export default Avengers;
