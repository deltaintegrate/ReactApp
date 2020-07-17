import React from "react";

export default function Saludar(props) {
  console.log(props.userinfo);
  return (
    <div>
      <p>
        hola {props.userinfo.nombre}, tiene {props.userinfo.edad} años, su color
        favorito es {props.userinfo.color}.
      </p>
    </div>
  );
}
