import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <Link to='/foods'>Foods</Link>
      <Link to='/explore'>Explore</Link>
      <Link to='/drinks'>Drinks</Link>
    </div>
  );
}

export default Footer;