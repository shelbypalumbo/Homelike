import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/index.js";
import Navigation from "./components/Navigation/index.js";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import HowTo from "./pages/HowTo";
import Shop from "./pages/Shop";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
          <Navigation />
          <Switch>
            <Route exact path="/About" component={About} />
            <Route exact path="/Gallery" component={Gallery} />
            <Route exact path="/HowTo" component={HowTo} />
            <Route exact path="/Shop" component={Shop} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
