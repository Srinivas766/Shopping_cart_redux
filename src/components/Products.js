import React from "react";
import { Data } from "./Data";
import { GiShoppingBag } from "react-icons/gi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Products = () => {
  const cart = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="productConatiner">
      <div className="navigation">
        <p>
          <HiOutlineMenuAlt3 />
        </p>
        <Link to="/cart">
          <GiShoppingBag />
        </Link>
      </div>
      <div className="products">
        {Data.map((item) => {
          item.quantity = 1;
          return (
            <div className="product" key={item.id}>
              <img src={` ../images/${item.image}`} alt="cart" />
              <h4>{item.name}</h4>
              <p>Rs. {item.price}</p>
              <button onClick={() => dispatch({ type: "ADD", payload: item })}>
                add to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
