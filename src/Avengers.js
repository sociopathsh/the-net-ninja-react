import React from "react";

// const Avengers = ({ avengers }) => {
//   const avengerList = avengers.map(avenger => {
//     if (avenger.age >= 30) {
//       return (
//         <div className="avenger" key={avenger.id}>
//           <div>Name: {avenger.name}</div>
//           <div>Age: {avenger.age}</div>
//         </div>
//       );
//     } else {
//       return null;
//     }
//   });

const Avengers = ({ avengers }) => {
  const avengerList = avengers.map(avenger => {
    return avenger.age >= 30 ? (
      <div className="avenger" key={avenger.id}>
        <div>Name: {avenger.name}</div>
        <div>Age: {avenger.age}</div>
      </div>
    ) : null;
  });
  return <div className="avenger-list">{avengerList}</div>;
};

export default Avengers;
