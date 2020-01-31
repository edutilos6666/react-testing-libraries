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
import ReactVirtualizedInfinityLoaderClassExample from "../ReactVirtualizedExamples/ReactVirtualizedInfinityLoaderClassExample";
import ReactSingleSelectExample from "../ReactSelectExamples/ReactSingleSelectExample";
import ReactMultiSelectExample from "../ReactSelectExamples/ReactMultiSelectExample";
import ReactPhoneNumberInputExample from "../ReactPhoneNumberInputExample/ReactPhoneNumberInputExample";
import ReactSortableHOCExample1 from "../ReactSortableHOCExamples/ReactSortableHOCExample1";
import ReactInfiniteExample from "../ReactSortableHOCExamples/ReactInfiniteExample";
import ReactDnDExample1 from "../ReactDnDExamples/ReactDnDExample1/ReactDnDExample1";
import ReactDnDExample2 from "../ReactDnDExamples/ReactDnDExample2/ReactDnDExample2";
import MaterialUIDenseTable from "../MaterialUIExamples/MaterialUIDenseTable";
import MaterialUISortableAndSelectableTable from "../MaterialUIExamples/MaterialUISortableAndSelectableTable";
import MaterialUISimpleTableExample from "../MaterialUIExamples/MaterialUISimpleTableExample";
import MaterialUISnackbarExample from "../MaterialUIExamples/MaterialUISnackbarExample";
import MaterialUIStepperExample from "../MaterialUIExamples/MaterialUIStepperExample";
import ChartistBarChartExample from "../ChartistExamples/ChartistBarChartExample";
import ReactOffcanvasExample from "../MenuExamples/ReactOffcanvasExample";
import ReactBurgerMenuExample from "../MenuExamples/ReactBurgerMenuExample";
import ReactContextMenuExample from "../MenuExamples/ReactContextMenuExample";
import ReactStickyNodeExample from "../MenuExamples/ReactStickyNodeExample";
import ReactTabsExample from "../MenuExamples/ReactTabsExample";
import ReactTabTabExample from "../MenuExamples/ReactTabTabExample";
import BlockUIExample from "../LoaderExamples/BlockUIExample";
import ReactLoaderExample from "../LoaderExamples/ReactLoaderExample";
import ReactLoadersExample from "../LoaderExamples/ReactLoadersExample";
import ReactMDSpinnerExample from "../LoaderExamples/ReactMDSpinnerExample";
import ReactProgressButtonExample from "../LoaderExamples/ReactProgressButtonExample";
import ReactAccessibleAccordionExample from "../MenuExamples/ReactAccessibleAccordionExample";
import FlatCarouselExample from "../CarouselExamples/FlatCarouselExample";
import ReactAwesomeSliderExample from "../CarouselExamples/ReactAwesomeSliderExample";
import PureReactCarouselExample from "../CarouselExamples/PureReactCarouselExample";
import ReactIDSwiperExample from "../CarouselExamples/ReactIDSwiperExample";
import ReactResponsiveCarouselExample from "../CarouselExamples/ReactResponsiveCarouselExample";
import ReactSlickExample from "../CarouselExamples/ReactSlickExample";
import AGGridExample from "../GridAndTableExamples/AGGridExample";
import GigaTablesExample from "../GridAndTableExamples/GigaTablesExample";
import ReactDataGridExample from "../GridAndTableExamples/ReactDataGridExample";
import AutoresponsiveExample from "../GridAndTableExamples/AutoresponsiveExample";
import GriddleExample from "../GridAndTableExamples/GriddleExample";
import KATableExample from "../GridAndTableExamples/KATableExample";
import TreeBeardExample from "../GridAndTableExamples/TreeBeardExample";
import ReactYoutubeExample from "../MediaExamples/ReactYoutubeExample";

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
      {/* react-virtualized */}
      <Route
        path="/rv-infinity-loader"
        component={ReactVirtualizedInfinityLoaderClassExample}
      />
      {/* react-select */}
      <Route path="/rs-single-select" component={ReactSingleSelectExample} />
      <Route path="/rs-multi-select" component={ReactMultiSelectExample} />
      {/* react-phone-number-input */}
      <Route path="/rpni-example-1" component={ReactPhoneNumberInputExample} />
      {/* react-sortable-hoc */}
      <Route path="/rsh-example-1" component={ReactSortableHOCExample1} />
      <Route path="/rsh-inifinite-example" component={ReactInfiniteExample} />
      {/* react-dnd */}
      <Route path="/rdnd-example-1" component={ReactDnDExample1} />
      <Route path="/rdnd-example-2" component={ReactDnDExample2} />
      {/* material-ui */}
      <Route path="/material-dense-table" component={MaterialUIDenseTable} />
      <Route
        path="/material-sortable-and-selectable-table"
        component={MaterialUISortableAndSelectableTable}
      />

      <Route
        path="/material-simple-table"
        component={MaterialUISimpleTableExample}
      />

      <Route path="/material-snackbar" component={MaterialUISnackbarExample} />
      <Route path="/material-stepper" component={MaterialUIStepperExample} />

      {/* react-chartist */}
      <Route
        path="/chartist-bar-chart-example"
        component={ChartistBarChartExample}
      />
      {/* menu examples */}
      <Route path="/offcanvas-example" component={ReactOffcanvasExample} />
      <Route path="/burger-menu-example" component={ReactBurgerMenuExample} />
      <Route path="/context-menu-example" component={ReactContextMenuExample} />
      <Route path="/sticky-node-example" component={ReactStickyNodeExample} />
      <Route path="/tabs-example" component={ReactTabsExample} />
      <Route path="/tabtab-example" component={ReactTabTabExample} />
      <Route
        path="/accessible-accordion-example"
        component={ReactAccessibleAccordionExample}
      />

      {/* loader examples */}
      <Route path="/block-ui-example" component={BlockUIExample} />
      <Route path="/loader-example" component={ReactLoaderExample} />
      <Route path="/loaders-example" component={ReactLoadersExample} />
      <Route path="/md-spinner-example" component={ReactMDSpinnerExample} />
      <Route
        path="/progress-button-example"
        component={ReactProgressButtonExample}
      />

      {/* carousel examples */}
      <Route path="/flat-carousel-example" component={FlatCarouselExample} />
      <Route
        path="/awesome-slider-example"
        component={ReactAwesomeSliderExample}
      />

      <Route
        path="/pure-carousel-example"
        component={PureReactCarouselExample}
      />

      <Route path="/id-swiper-example" component={ReactIDSwiperExample} />
      <Route
        path="/responsive-carousel-example"
        component={ReactResponsiveCarouselExample}
      />

      <Route path="/slick-example" component={ReactSlickExample} />

      {/* grid and table examples */}
      <Route path="/ag-grid-example" component={AGGridExample} />
      <Route path="/giga-tables-example" component={GigaTablesExample} />
      <Route path="/data-grid-example" component={ReactDataGridExample} />
      <Route path="/autoresponsive-example" component={AutoresponsiveExample} />
      <Route path="/griddle-example" component={GriddleExample} />
      <Route path="/ka-table-example" component={KATableExample} />
      <Route path="/tree-beard-example" component={TreeBeardExample} />

      {/* media examples */}
      <Route path="/youtube-example" component={ReactYoutubeExample} />
    </Router>
  );
};

export default AppRouter;
