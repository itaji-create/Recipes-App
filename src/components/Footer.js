import React from "react";
import { Link } from "react-router-dom";
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer className="footer">
      <Link to='/foods'>
        <img style={ { marginLeft: '10px' } } src={ mealIcon } alt="mealicon" data-testid="food-bottom-btn" />
      </Link>
      <Link to='/explore'>
        <img src={ exploreIcon } data-testid="explore-bottom-btn" alt="explore icon" />
      </Link>
      <Link to='/drinks'>
        <img style={ { marginRight: '10px' } } src={ drinkIcon } data-testid="drink-bottom-btn" alt="Drinks icon" />
      </Link>
    </footer>
  );
}

export default Footer;