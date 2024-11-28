import React from "react";

function Order({ time }) {
  return (
    <>
      <p>{time} We're open. You can visit us or place an order online.</p>
      <button className="btn">Order Now</button>
    </>
  );
}

export default Order;
