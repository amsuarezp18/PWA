import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Marvel from "./components/Marvel";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Marvel />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
