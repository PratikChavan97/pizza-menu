import React from "react";
import "./../index.css";
import pizzaData from "../data";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu data={pizzaData} />
      <Footer />
    </div>
  );
}

export default App;
