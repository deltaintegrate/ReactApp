import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Saludar from "./components/Saludar";

function App() {
  const [stateCar, setStateCar] = useState(false);
  const user = {
    nombre: "leo",
    edad: "99",
    color: "azul"
  };

  const saludarfn = (name, edad) => {
    console.log("hola " + name + " tiene " + edad + " años.");

    console.log(`hola ${name}, tiene ${edad} años.`);
  };

  const encenderApagar = () => {
    //setStateCar(!stateCar);
    setStateCar(prevValue => !prevValue);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar userinfo={user} saludarfn={saludarfn} />
        <h3>EL coche esta: {stateCar ? "Encendido" : "apagado"}</h3>
        <button onClick={encenderApagar}> Encender/Apagar</button>
      </header>
    </div>
  );
}

export default App;
