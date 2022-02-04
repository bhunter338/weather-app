import React from "react";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { navbarClick, mode } = useGlobalContext();
  return (
    <header>
      {/* <img class="logo" src="Images/logo.svg" alt="logo" /> */}
      <h1>Weather App</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <a
              id="current"
              className={mode === 0 ? "active" : ""}
              onClick={navbarClick}
              href="#"
            >
              Current
            </a>
          </li>
          <li>
            <a
              id="forecast"
              className={mode === 1 ? "active" : ""}
              onClick={navbarClick}
              href="#"
            >
              4-Day Forecast
            </a>
          </li>
        </ul>
      </nav>
      <a className="cta" href="https://github.com/bhunter338">
        <button>Contact</button>
      </a>
    </header>
  );
};

export default Navbar;
