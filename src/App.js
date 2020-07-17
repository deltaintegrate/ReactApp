import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Saludar from "./components/Saludar";

function App() {
  const user = {
    nombre: "leo",
    edad: "99",
    color: "azul"
  };

  const saludarfn = (name, edad) => {
    console.log("hola " + name + " tiene " + edad + " años.");

    console.log(`hola ${name}, tiene ${edad} años.`);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar userinfo={user} saludarfn={saludarfn} />
      </header>
    </div>
  );
}

export default App;
