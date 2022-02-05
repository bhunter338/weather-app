import React from "react";

const Footer = () => {
  return (
    <footer>
      Made By{" "}
      <a className="footer-link" href="https://github.com/bhunter338">
        @bhunter338
      </a>
      <br />
      <br />
      <div>
        Data:{" "}
        <a className="footer-link" href="https://openweathermap.org/">
          Open Weather API
        </a>
      </div>
    </footer>
  );
};

export default Footer;
