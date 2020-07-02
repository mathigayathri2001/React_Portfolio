import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";

function App() {
  return (
    <Router>
      <div>    
        <Switch>
          <Route exact path="/React_Portfolio" component={Home} />
          <Route exact path="/React_Portfolio/About" component={Home} />
          <Route exact path="/React_Portfolio/Project" component={Project} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
