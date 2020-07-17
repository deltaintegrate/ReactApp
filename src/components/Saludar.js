import React from "react";

export default function Saludar(props) {
  console.log(props.name);
  return (
    <div>
      <h2>
        Hola {props.name}, tiene {props.anos}
      </h2>
    </div>
  );
}
