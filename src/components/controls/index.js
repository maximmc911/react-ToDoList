import React from "react";
import { morph, formatCurrency } from "../../utils";
import "./style.css";
import PropTypes from "prop-types";
import Button from "../UI/button";
import { cn as bem } from "@bem-react/classname";

function Controls({ openCart, cartItems }) {
  const cn = bem("Controls");
  const quantity = cartItems.length;

  const price = cartItems.reduce(
    (price, item) => price + item.price * item.quantity,
    0
  );

  return (
    <div className={cn()}>
      <div className={cn("info")}>
        <span className={cn("in-cart")}>В корзине:</span>
        <span className="Highlighted">
          {cartItems.length === 0 ? (
            "пусто"
          ) : (
            <span>
              {" "}
              {quantity} {morph(quantity, "товар", "товара", "товаров")} /{" "}
              {formatCurrency(price)} &#8381;
            </span>
          )}
        </span>
      </div>

      <Button onClick={openCart} className={cn("button")}>
        Перейти
      </Button>
    </div>
  );
}

Controls.propTypes = {
  openCart: PropTypes.func,
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
      quantity: PropTypes.number,
    })
  ).isRequired,
};

export default React.memo(Controls);
