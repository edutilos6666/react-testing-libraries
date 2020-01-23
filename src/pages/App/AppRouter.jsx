import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HelloWorld from "../HelloWorld/HelloWorld";
import ByeWorld from "../HelloWorld/ByeWorld";
import Header from "../Header/Header";
import PRButtonExample from "../PrimeReactExamples/PRButtonExample/PRButtonExample";
import ChipsExample from "../PrimeReactExamples/ChipsExample/ChipsExample";
import DropdownExample from "../PrimeReactExamples/DropdownExample/DropdownExample";
import EditorExample from "../PrimeReactExamples/EditorExample/EditorExample";
import InputMaskExample from "../PrimeReactExamples/InputMaskExample/InputMaskExample";
const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Route path="/hello" component={HelloWorld} />
      <Route path="/bye" component={ByeWorld} />
      <Route path="/pr-button" component={PRButtonExample} />
      <Route path="/pr-chips" component={ChipsExample} />
      <Route path="/pr-dropdown" component={DropdownExample} />
      <Route path="/pr-editor" component={EditorExample} />
      <Route path="/pr-input-mask" component={InputMaskExample} />
    </Router>
  );
};

export default AppRouter;
