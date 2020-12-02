import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { GamePage } from "./components/GamePage";
import { PlayPage } from "./components/PlayPage";

const App = () => (
  <div>
    <Switch>
      <Route
        path="/play/:code"
        render={(props) => <GamePage {...props} />}
      ></Route>
      <Route path="/play">
        <PlayPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  </div>
);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
