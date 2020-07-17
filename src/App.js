import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Saludar from "./components/Saludar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar name="Leonardo CAstrillon wololo" anos="26" />
        <Saludar name="paco del mazo" anos="36" />
      </header>
    </div>
  );
}

export default App;
