import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

import FoodDescription from "./FoodDescription";

function FoodCard({ food, onClickFood }) {
  return (
    <div className="col-4 px-1" onClick={() => onClickFood(food)}>
      <Card className="food_card">
        <Card.Body>
          <FoodDescription food={food} />
        </Card.Body>
      </Card>
    </div>
  );
}

FoodCard.propTypes = {
  food: PropTypes.object.isRequired,
  onClickFood: PropTypes.func,
};

export default FoodCard;
