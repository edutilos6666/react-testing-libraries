import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HelloWorld from "../HelloWorld/HelloWorld";
import ByeWorld from "../HelloWorld/ByeWorld";
import Header from "../Header/Header";
import PRButtonExample from "../PrimeReactExamples/PRButtonExample/PRButtonExample";
const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Route path="/hello" component={HelloWorld} />
      <Route path="/bye" component={ByeWorld} />
      <Route path="/pr-button" component={PRButtonExample} />
    </Router>
  );
};

export default AppRouter;
