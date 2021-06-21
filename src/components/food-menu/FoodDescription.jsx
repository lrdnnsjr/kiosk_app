import React, { useState } from "react";
import { Image, FormControl, InputGroup, Button } from "react-bootstrap";
import { FiShoppingCart } from "react-icons/fi";
import PropTypes from "prop-types";

import sisigImage from "./../../assets/images/foods/sisig.jpg";

function FoodDescription({ food, type }) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    setQuantity(1);
  };

  const handleSetQuantity = (type) => {
    if (quantity === 1 && type === "decrement") return;

    setQuantity((quantity) =>
      type === "increment" ? quantity + 1 : quantity - 1
    );
  };

  return (
    <div>
      <div className="col-12 text-center">
        <Image src={sisigImage} alt="Empty image placeholder" fluid />
      </div>

      <p className="title">{food.name}</p>

      <p className="description">{food.description ?? ""}</p>

      <p className="price">₱ {food.price}</p>

      {Boolean(type === "preview") && (
        <>
          <InputGroup className="col-lg-4 px-0 quantity_input">
            <InputGroup.Prepend>
              <Button
                variant="secondary"
                disabled={Boolean(quantity === 1)}
                onClick={() => handleSetQuantity("decrement")}
              >
                -
              </Button>
            </InputGroup.Prepend>
            <FormControl value={quantity} readOnly />
            <InputGroup.Append>
              <Button
                variant="secondary"
                onClick={() => handleSetQuantity("increment")}
              >
                -
              </Button>
            </InputGroup.Append>
          </InputGroup>

          <Button variant="dark" className="mt-4 py-2" block>
            {/* <FiShoppingCart className="mr-2" /> */}
            <small>
              <span className="font-weight-bold">ADD TO CART</span>
            </small>
          </Button>
        </>
      )}
    </div>
  );
}

FoodDescription.propTypes = {
  food: PropTypes.object.isRequired,
  type: PropTypes.string,
};

FoodDescription.defaultProps = {
  type: "",
};

export default FoodDescription;
