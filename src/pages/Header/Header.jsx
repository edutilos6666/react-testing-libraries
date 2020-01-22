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
