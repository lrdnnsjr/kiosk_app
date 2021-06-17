import React from "react";
import { Container, Card, Row, Col, Image } from "react-bootstrap";

import logo from "./../assets/images/sisig-barn-logo.png";

function Menu() {
  return (
    <Container fluid>
      <Row className="menu_container">
        <Col md={4} className="left_container">
          <div className="p-2">
            <img src={logo} alt="Brand logo" />
          </div>

          <div className="food_preview_container">
            <div className="food_preview">--Food Preview--</div>
          </div>
        </Col>
        <Col md={8} className="right_container"></Col>
      </Row>
    </Container>
  );
}

export default Menu;
