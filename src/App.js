import logo from "./logo.svg";
import React from "react";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import "./App.css";
import Header from "./components/Header/index.js";
import Navigation from "./components/Navigation/index.js";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Header />
          <Navigation />
        </header>
      </div>
    </>
  );
}

export default App;
