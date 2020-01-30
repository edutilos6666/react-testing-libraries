import React, { useState, SyntheticEvent } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faChartBar,
  faUserAlt,
  faUserAltSlash,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { DropdownItemProps } from "react-bootstrap/DropdownItem";

const Header = props => {
  const [selectionMap] = useState([false]);

  const handleLinkOnSelect = index => {
    selectionMap.forEach(one => (one = false));
    selectionMap[index] = true;
  };

  const faHomeIcon = <FontAwesomeIcon icon={faHome} />;
  const faSearchIcon = <FontAwesomeIcon icon={faSearch} />;
  const faChartBarIcon = <FontAwesomeIcon icon={faChartBar} />;
  const faUserAltIcon = <FontAwesomeIcon icon={faUserAlt} />;
  const faUserAltSlashIcon = <FontAwesomeIcon icon={faUserAltSlash} />;
  const faSignOutAltIcon = <FontAwesomeIcon icon={faSignOutAlt} />;

  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand as="span">CC2</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* Home */}
          <Nav.Link as={Link} to="/" className="text-light">
            {faHomeIcon}
          </Nav.Link>

          {/* HelloWorld */}
          <NavDropdown title="HelloWorld" id="hw">
            <NavDropdown.Item eventKey={"hello"} as="span">
              <Nav.Link
                as={Link}
                to="/hello"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                HelloWorld
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey={"bye"} as="span">
              <Nav.Link
                as={Link}
                to="/bye"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                ByeWorld
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item eventKey={"fancy-input"} as="span">
              <Nav.Link
                as={Link}
                to="/fancy-input"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                FancyInputExample
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item eventKey={"client-rect"} as="span">
              <Nav.Link
                as={Link}
                to="/client-rect"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                ClientRectExample
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item eventKey={"reducer"} as="span">
              <Nav.Link
                as={Link}
                to="/reducer"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                ReducerExample
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>

          {/* PrimeReact */}
          <NavDropdown title="PrimeReact" id="pr">
            <NavDropdown.Item eventKey={"pr-button"} as="span">
              <Nav.Link
                as={Link}
                to="/pr-button"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                Button Example
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item eventKey={"pr-chips"} as="span">
              <Nav.Link
                as={Link}
                to="/pr-chips"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                Chips Example
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item eventKey={"pr-dropdown"} as="span">
              <Nav.Link
                as={Link}
                to="/pr-dropdown"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                Dropdown Example
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item eventKey={"pr-editor"} as="span">
              <Nav.Link
                as={Link}
                to="/pr-editor"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                Editor Example
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item eventKey={"pr-input-mask"} as="span">
              <Nav.Link
                as={Link}
                to="/pr-input-mask"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                InputMask Example
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item eventKey={"pr-chart"} as="span">
              <Nav.Link
                as={Link}
                to="/pr-chart"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                PieChart Example
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item eventKey={"pr-bar-chart"} as="span">
              <Nav.Link
                as={Link}
                to="/pr-bar-chart"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                BarChart Example
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item eventKey={"pr-line-chart"} as="span">
              <Nav.Link
                as={Link}
                to="/pr-line-chart"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                LineChart Example
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>

          {/* react-table */}
          <NavDropdown title="react-table" id="hw">
            <NavDropdown.Item eventKey={"rt-example-1"} as="span">
              <Nav.Link
                as={Link}
                to="/rt-example-1"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                ReactTableExample1
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item eventKey={"rt-example-2"} as="span">
              <Nav.Link
                as={Link}
                to="/rt-example-2"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                ReactTableExample2
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item eventKey={"rt-row-selection-example"} as="span">
              <Nav.Link
                as={Link}
                to="/rt-row-selection-example"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                ReactTableRowSelectionExample
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item eventKey={"rt-pagination-example"} as="span">
              <Nav.Link
                as={Link}
                to="/rt-pagination-example"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                ReactTablePaginationExample
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>

          {/* ReactVirtualizedExamples */}
          <NavDropdown title="ReactVirtualizedExamples" id="rv">
            <NavDropdown.Item eventKey={"rv-infinity-loader"} as="span">
              <Nav.Link
                as={Link}
                to="/rv-infinity-loader"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                ReactVirtualizedInfinityLoaderExample
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>

          {/* ReactSelectExamples */}
          <NavDropdown title="ReactSelectExamples" id="rv">
            <NavDropdown.Item eventKey={"rs-single-select"} as="span">
              <Nav.Link
                as={Link}
                to="/rs-single-select"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                ReactSingleSelectExample
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item eventKey={"rs-multi-select"} as="span">
              <Nav.Link
                as={Link}
                to="/rs-multi-select"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                ReactMultiSelectExample
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>

          {/* ReactPhoneNumberInputExamples */}
          <NavDropdown title="ReactPhoneNumberInputExamples" id="rv">
            <NavDropdown.Item eventKey={"rpni-example-1"} as="span">
              <Nav.Link
                as={Link}
                to="/rpni-example-1"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                ReactPhoneNumberInputExample 1
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>

          {/* ReactSortableHOCExamples */}
          <NavDropdown title="ReactSortableHOCExamples" id="rv">
            <NavDropdown.Item eventKey={"rsh-example-1"} as="span">
              <Nav.Link
                as={Link}
                to="/rsh-example-1"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                ReactSortableHOCExample 1
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item eventKey={"rsh-inifinite-example"} as="span">
              <Nav.Link
                as={Link}
                to="/rsh-inifinite-example"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                ReactInfiniteExample
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>

          {/* ReactDnDExamples */}
          <NavDropdown title="ReactDnDExamples" id="rdnd">
            <NavDropdown.Item eventKey={"rdnd-example-1"} as="span">
              <Nav.Link
                as={Link}
                to="/rdnd-example-1"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                ReactDnDExample1
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item eventKey={"rdnd-example-2"} as="span">
              <Nav.Link
                as={Link}
                to="/rdnd-example-2"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                ReactDnDExample2
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>

          {/* MaterialUIExamples */}
          <NavDropdown title="MaterialUIExamples" id="rdnd">
            <NavDropdown.Item eventKey={"material-dense-table"} as="span">
              <Nav.Link
                as={Link}
                to="/material-dense-table"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                MaterialUIDenseTable
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item
              eventKey={"material-sortable-and-selectable-table"}
              as="span"
            >
              <Nav.Link
                as={Link}
                to="/material-sortable-and-selectable-table"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                MaterialUISortableAndSelectableTable
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item eventKey={"material-simple-table"} as="span">
              <Nav.Link
                as={Link}
                to="/material-simple-table"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                MaterialUISimpleTableExample
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item eventKey={"material-snackbar"} as="span">
              <Nav.Link
                as={Link}
                to="/material-snackbar"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                MaterialUISnackbarExample
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item eventKey={"material-stepper"} as="span">
              <Nav.Link
                as={Link}
                to="/material-stepper"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                MaterialUIStepperExample
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>

          {/* ChartistExamples */}
          <NavDropdown title="ChartistExamples" id="rdnd">
            <NavDropdown.Item eventKey={"chartist-bar-chart-example"} as="span">
              <Nav.Link
                as={Link}
                to="/chartist-bar-chart-example"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                ChartistBarChartExample
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>

          {/* MenuExamples */}
          <NavDropdown title="MenuExamples" id="rdnd">
            <NavDropdown.Item eventKey={"offcanvas-example"} as="span">
              <Nav.Link
                as={Link}
                to="/offcanvas-example"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                ReactOffcanvasExample
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />

            {/* <NavDropdown.Item eventKey={"burger-menu-example"} as="span">
              <Nav.Link
                as={Link}
                to="/burger-menu-example"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                ReactBurgerMenuExample
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider /> */}

            <NavDropdown.Item eventKey={"context-menu-example"} as="span">
              <Nav.Link
                as={Link}
                to="/context-menu-example"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                ReactContextMenuExample
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item eventKey={"sticky-node-example"} as="span">
              <Nav.Link
                as={Link}
                to="/sticky-node-example"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                ReactStickyNodeExample
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item eventKey={"tabs-example"} as="span">
              <Nav.Link
                as={Link}
                to="/tabs-example"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                ReactTabsExample
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item eventKey={"tabtab-example"} as="span">
              <Nav.Link
                as={Link}
                to="/tabtab-example"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                ReactTabTabExample
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item
              eventKey={"accessible-accordion-example"}
              as="span"
            >
              <Nav.Link
                as={Link}
                to="/accessible-accordion-example"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                ReactAccessibleAccordionExample
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>

          {/* LoaderExamples */}
          <NavDropdown title="LoaderExamples" id="rdnd">
            <NavDropdown.Item eventKey={"block-ui-example"} as="span">
              <Nav.Link
                as={Link}
                to="/block-ui-example"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                BlockUIExample
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item eventKey={"loader-example"} as="span">
              <Nav.Link
                as={Link}
                to="/loader-example"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                ReactLoaderExample
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item eventKey={"loaders-example"} as="span">
              <Nav.Link
                as={Link}
                to="/loaders-example"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                ReactLoadersExample
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item eventKey={"md-spinner-example"} as="span">
              <Nav.Link
                as={Link}
                to="/md-spinner-example"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                ReactMDSpinnerExample
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item eventKey={"progress-button-example"} as="span">
              <Nav.Link
                as={Link}
                to="/progress-button-example"
                onSelect={() => handleLinkOnSelect(0)}
                className={selectionMap[0] ? "text-light" : "text-dark"}
              >
                ReactProgressButtonExample
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
        </Nav>

        <Nav>
          <Nav.Link as={Link} to="/userhome" className="text-light">
            {faUserAltSlashIcon}
          </Nav.Link>
          <Nav.Link as={Link} to="/logOut" className="text-light">
            Sign Out
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
