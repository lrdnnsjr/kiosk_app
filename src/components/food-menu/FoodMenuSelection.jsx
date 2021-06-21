import React from "react";
import PropTypes from "prop-types";

import { foodMenu } from "utils/dummy-data/mock.data";
import FoodCard from "components/food-menu/FoodCard";

function FoodMenuSelection({ type, onClickFood }) {
  return foodMenu[type].map((food, index) => (
    <FoodCard food={food} key={index} onClickFood={onClickFood} />
  ));
}

FoodMenuSelection.propTypes = {
  type: PropTypes.string.isRequired,
  onClickFood: PropTypes.func.isRequired,
};

FoodMenuSelection.defaultProps = {
  type: "meals",
};

export default FoodMenuSelection;
