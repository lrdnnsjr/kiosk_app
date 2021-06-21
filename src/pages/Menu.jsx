import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  ButtonGroup,
  Button,
  Modal,
} from "react-bootstrap";
import { FiShoppingCart, FiCheckCircle } from "react-icons/fi";

import logo from "./../assets/images/sisig-barn-logo.png";
import sisigImage from "./../assets/images/foods/sisig.jpg";
import FoodMenuSelection from "components/food-menu/FoodMenuSelection";
import FoodPreview from "components/food-menu/FoodPreview";
import OrderTable from "components/order/CartTable";

function Menu() {
  const [preview, setPreview] = useState(null);
  const [orderModal, setOrderModal] = useState({ show: false });

  const handleClickFood = (food) => {
    setPreview(food);
  };

  return (
    <>
      <Container fluid>
        <Row className="menu_container">
          <Col md={4} className="left_container position-fixed">
            <div className="d-flex">
              <div className="p-2">
                <img src={logo} alt="Brand logo" />
              </div>

              <div className="ml-auto"></div>
            </div>

            <div className="food_preview_container">
              <div className="food_preview">
                {preview && <FoodPreview food={preview} type="preview" />}
                {!preview && (
                  <h6 className="text-muted font-weight-bold">
                    &mdash; Please select a meal to preview
                  </h6>
                )}
              </div>
            </div>
          </Col>

          <Col md={{ span: 8, offset: 4 }} className="right_container">
            <Container fluid className="food_selection_container">
              <Container fluid className="d-flex">
                <h4 className="font-weight-bold">FOOD SELECTION</h4>

                <ButtonGroup className="ml-auto">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => setOrderModal({ ...orderModal, show: true })}
                  >
                    <FiShoppingCart className="mr-2" />
                    <small>View Order</small>
                  </Button>
                  <Button variant="primary" size="sm">
                    <FiCheckCircle className="mr-2" />
                    <small>Checkout Order</small>
                  </Button>
                </ButtonGroup>
              </Container>

              <Container fluid className="mb-3">
                <h3 className="food_selection_category_title">BEST SELLERS</h3>
                <Container fluid className="food_selection_grid">
                  <FoodMenuSelection
                    type="meals"
                    onClickFood={handleClickFood}
                  />
                </Container>
              </Container>

              <Container fluid className="mb-3">
                <h3 className="food_selection_category_title">BUSOG MEALS</h3>
                <Container fluid className="food_selection_grid">
                  <FoodMenuSelection
                    type="meals"
                    onClickFood={handleClickFood}
                  />
                </Container>
              </Container>

              <Container fluid className="mb-3">
                <h3 className="food_selection_category_title">COMBOMEALS</h3>
                <Container fluid className="food_selection_grid">
                  <FoodMenuSelection
                    type="meals"
                    onClickFood={handleClickFood}
                  />
                </Container>
              </Container>

              <Container fluid className="mb-3">
                <h3 className="food_selection_category_title">NOODLES</h3>
                <Container fluid className="food_selection_grid">
                  <FoodMenuSelection
                    type="meals"
                    onClickFood={handleClickFood}
                  />
                </Container>
              </Container>
            </Container>
          </Col>
        </Row>
      </Container>

      {/* View order modal */}
      <Modal
        show={orderModal.show}
        size="lg"
        onHide={() => setOrderModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h6>View Order</h6>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <OrderTable />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Menu;
