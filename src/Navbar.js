import React from "react";

const Navbar = () => {
  return (
    <header>
      {/* <img class="logo" src="Images/logo.svg" alt="logo" /> */}
      <h1>Weather App</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#">Current</a>
          </li>
          <li>
            <a href="#">4-Day Forecast</a>
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
