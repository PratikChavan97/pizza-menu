import React from "react";
import Pizza from "./Pizza";

function Menu({ data }) {
  const pizzaLength = data.length;
  //   const pizzaLength = 0;

  return (
    <main className="menu">
      {pizzaLength > 0 ? (
        <>
          <h2>Our Menu</h2>
          <p>Authentic Italian Cuisine</p>
          <ul className="pizzas">
            {data.map((el) => {
              return <Pizza data={el} key={el.name} />;
            })}
          </ul>
        </>
      ) : (
        <p>We're working on our Menu.</p>
      )}
    </main>
  );
}

export default Menu;
