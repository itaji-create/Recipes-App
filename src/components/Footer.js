import React from "react";
import { Link } from "react-router-dom";
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer className="footer">
      <Link to='/foods'>
        <img src={ mealIcon } alt="mealicon" data-testid="food-bottom-btn" />
      </Link>
      <Link to='/explore'><img src={ exploreIcon } alt="exploreicon" /></Link>
      <Link to='/drinks'><img src={ drinkIcon } alt="Drinks" /></Link>
    </footer>
  );
}

export default Footer;