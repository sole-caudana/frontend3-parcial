

import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <h2> Bienvenid@ {props.name}</h2>
      <p> Nos enconta que se sume un: {props.description}</p>
    </div>
  );
};

export default Card;