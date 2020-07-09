import React from "react";
import Header from "./header/Header";
import Searcher from "./searcher/Searcher";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import Board from "./lists/Board";

const App = () => (
  <div className="Page">
    <div className="top-of-the-site">
      <Header />
      <Searcher />
    </div>

    <Switch>
      <Route path="/:direction">
        <Board />
      </Route>
      <Redirect to="/arrivals" />
    </Switch>
  </div>
);

export default App;
