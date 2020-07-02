import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";

function App() {
  return (
    <Router>
      <div>g      
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={Home} />
          <Route exact path="/Project" component={Project} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
