import React, { Component } from "react";

class Avengers extends Component {
  render() {
    const { avengers } = this.props;
    const avengerList = avengers.map(avenger => {
      return (
        <div className="avenger" key={avenger.id}>
          <div>Name: {avenger.name}</div>
          <div>Age: {avenger.age}</div>
        </div>
      );
    });
    return <div className="avenger-list">{avengerList}</div>;
  }
}

export default Avengers;
