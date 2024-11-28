import React, { useEffect, useState } from "react";
import pizzaData from "./data.js";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu data={pizzaData} />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = {
  //   color: "red",
  //   fontSize: "40px",
  //   textAlign: "center",
  //   textTransform: "uppercase",
  // };

  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>;
    </header>
  );
}

function Menu({ data }) {
  const numLength = data.length;
  // const numLength = [];

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numLength > 0 ? (
        <>
          <p>
            Authentic Italian cuisine, 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {data.map((el, i) => {
              return <Pizza data={el} key={i} />;
            })}
          </ul>
        </>
      ) : (
        <p>We're still working on our Menu.</p>
      )}
    </main>
  );
}

function Pizza({ data }) {
  return (
    <li className={`pizza ${data.soldOut ? "sold-out" : ""}`}>
      <img src={data.photoName} alt={data.name} />
      <div>
        <h3>{data.name}</h3>
        <p>{data.ingredients}</p>
        <span>{data.soldOut ? "SOLD OUT" : `$${Number(data.price)}.00`}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    });
  }, []);

  // if (hour >= openHour && hour <= closeHour) {
  //   alert("We're currently open!");
  // } else {
  //   alert("Sorry we're closed!");
  // }
  // console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order time={time} closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
  // return React.createElement("footer", null, "We're currently open!");
}

function Order({ time, closeHour }) {
  return (
    <div className="order">
      {time}
      <p>We're open until {closeHour}:00. Come visit us or order online.</p>
      <button className="btn">Order Now</button>
    </div>
  );
}

export default App;
