import React from "react";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";

function OrderTable({ cart }) {
  if (!cart.length) {
    return <p className="text-center">No data available</p>;
  }

  return <Container></Container>;
}

OrderTable.propTypes = {
  cart: PropTypes.array.isRequired,
};

OrderTable.defaultProps = {
  cart: [],
};

export default OrderTable;
