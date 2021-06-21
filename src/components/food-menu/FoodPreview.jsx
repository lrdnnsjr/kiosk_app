import React from "react";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";

import FoodDescription from "./FoodDescription";

function FoodPreview({ food, type }) {
  return (
    <Container fluid className="food_preview">
      <FoodDescription food={food} type={type} />
    </Container>
  );
}

FoodPreview.propTypes = {
  food: PropTypes.object.isRequired,
  type: PropTypes.string,
};

FoodPreview.defaultProps = {
  type: "",
};

export default FoodPreview;
