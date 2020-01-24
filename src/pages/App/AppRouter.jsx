import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HelloWorld from "../HelloWorldExamples/HelloWorld/HelloWorld";
import ByeWorld from "../HelloWorldExamples/HelloWorld/ByeWorld";
import FancyInputExample from "../HelloWorldExamples/FancyInputExample/FancyInputExample";

import Header from "../Header/Header";
import PRButtonExample from "../PrimeReactExamples/PRButtonExample/PRButtonExample";
import ChipsExample from "../PrimeReactExamples/ChipsExample/ChipsExample";
import DropdownExample from "../PrimeReactExamples/DropdownExample/DropdownExample";
import EditorExample from "../PrimeReactExamples/EditorExample/EditorExample";
import InputMaskExample from "../PrimeReactExamples/InputMaskExample/InputMaskExample";
import ChartExamples from "../PrimeReactExamples/ChartExample/ChartExamples";
import BarChartExample from "../PrimeReactExamples/ChartExample/BarChartExample";
import LineChartExample from "../PrimeReactExamples/ChartExample/LineChartExample";
import ReactTableExample1 from "../ReactTableExamples/ReactTableExample1";
import ReactTableExample2 from "../ReactTableExamples/ReactTableExample2";
import ReactTableRowSelectionExample from "../ReactTableExamples/ReactTableRowSelectionExample";
import ReactTablePaginationExample from "../ReactTableExamples/ReactTablePaginationExample";
import ClientRectExample from "../HelloWorldExamples/ClientRectExample/ClientRectExample";
import ReducerExample from "../HelloWorldExamples/ReducerExample/ReducerExample";
const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Route path="/hello" component={HelloWorld} />
      <Route path="/bye" component={ByeWorld} />
      <Route path="/fancy-input" component={FancyInputExample} />
      <Route path="/client-rect" component={ClientRectExample} />
      <Route path="/reducer" component={ReducerExample} />
      {/* PrimeReact */}
      <Route path="/pr-button" component={PRButtonExample} />
      <Route path="/pr-chips" component={ChipsExample} />
      <Route path="/pr-dropdown" component={DropdownExample} />
      <Route path="/pr-editor" component={EditorExample} />
      <Route path="/pr-input-mask" component={InputMaskExample} />
      <Route path="/pr-chart" component={ChartExamples} />
      <Route path="/pr-bar-chart" component={BarChartExample} />
      <Route path="/pr-line-chart" component={LineChartExample} />
      {/* react-table */}
      <Route path="/rt-example-1" component={ReactTableExample1} />
      <Route path="/rt-example-2" component={ReactTableExample2} />
      <Route
        path="/rt-row-selection-example"
        component={ReactTableRowSelectionExample}
      />
      <Route
        path="/rt-pagination-example"
        component={ReactTablePaginationExample}
      />
    </Router>
  );
};

export default AppRouter;
