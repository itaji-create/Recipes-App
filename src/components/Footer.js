import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <Link to='/foods'>Foods</Link>
      <Link to='/explore'>Explore</Link>
      <Link to='/drinks'>Drinks</Link>
    </footer>
  );
}

export default Footer;