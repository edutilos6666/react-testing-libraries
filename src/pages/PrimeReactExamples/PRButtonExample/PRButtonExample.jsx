import React from "react";
import { Button as PRButton } from "primereact/button";
import { Container, Row, Col } from "react-bootstrap";

const PRButtonExample = props => {
  return (
    <Container fluid={true}>
      <Col>
        <Row>
          <PRButton
            label="Click me"
            onClick={() => {
              console.log("PRButton was clicked");
            }}
          />
        </Row>
      </Col>
    </Container>
  );
};

export default PRButtonExample;
