import React from "react";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        onClick={handleClearCart}
        className="p-1, m-2 bg-black text-white rounded-lg"
      >
        Clear Cart
      </button>
      <div>
        <ItemList items={cartItems} />
        {cartItems.length === 0 && (
          <h1>
            Cart is empty please go to <Link to={"/"}>shopping page</Link>
          </h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
