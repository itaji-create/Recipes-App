import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import fetchFoods from '../services/fetchFoods';
import Context from '../context/MyContext';
import fetchDrinks from '../services/fetchDrinks';

function IngredientCard(props) {
  const { title, ingredient, cardType, fetchType } = props;
  const { setMeals, setDrinks } = useContext(Context);
  const navigate = useNavigate();

  function handleClick({ target }) {
    if (cardType === 'foods') {
      fetchFoods(`filter.php?i=${target.name}`).then((result) => setMeals(result))
      .then(navigate(`/${cardType}`));
    }

    if (cardType === 'drinks') {
      fetchDrinks(`filter.php?i=${target.name}`).then((result) => setDrinks(result));    }
  }
  return (
    <div className="card">
      <Link
        name={ ingredient }
        className="links"
        onClick={ handleClick }
        to={'/'+cardType}
      >
        <img
          width="150px"
          alt="ingredient"
          name={ ingredient }
          src={ `https://www.${fetchType}.com/images/ingredients/${ingredient}-Small.png` }
        />
        <h2>{title}</h2>
      </Link>
    </div>
  );
}

IngredientCard.propTypes = {
  title: PropTypes.string.isRequired,
  ingredient: PropTypes.string.isRequired,
  fetchType: PropTypes.string.isRequired,
  cardType: PropTypes.string.isRequired,
};

export default IngredientCard;
