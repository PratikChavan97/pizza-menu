import React, { useEffect, useState } from "react";
import Order from "./Order";

function Footer() {
  const openHour = 10;
  const closeHour = 22;
  const hour = new Date().getHours();
  const isOpen = hour >= openHour && hour <= closeHour;
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    });
  }, []);

  return (
    <footer className="footer">
      <div className="order">
        {isOpen ? <Order time={time} /> : <p>Sorry! We're opening soon.</p>}
      </div>
    </footer>
  );
}

export default Footer;
