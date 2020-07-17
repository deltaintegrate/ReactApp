import React from "react";

export default function Saludar(props) {
  const { userinfo, saludarfn } = props;
  const { nombre = "anonimo", edad } = userinfo;
  console.log(props);
  console.log(userinfo);

  return (
    <div>
      <button onClick={() => saludarfn(nombre, edad)}>Saludar</button>
    </div>
  );
}
