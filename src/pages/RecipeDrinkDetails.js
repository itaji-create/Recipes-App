import React, { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Context from '../context/MyContext';
import fetchDrinks from '../services/fetchDrinks';
import Footer from '../components/Footer';
import { ingredients, measures } from '../services/ingredientsMeasure';

const copy = require('clipboard-copy');

function RecipeDrinkDetails() {
  const { pathname } = useLocation();

  const six = 6;
  const idNumbers = useLocation().pathname
    .split('').filter((e) => (Number(e) || e === '0')).join('');
  const {
    meals,
    details,
    setDetails,
    setFavoriteIcon,
  } = useContext(Context);

  useEffect(() => {
    fetchDrinks(`lookup.php?i=${idNumbers}`).then((data) => {
      setDetails(data[0]);
    });
  }, [idNumbers, setDetails, setFavoriteIcon]);

  function copyToClipboard() {
    const textField = document.createElement('p');
    const buttons = document.getElementById('share-favorite');
    textField.innerText = 'Link copied!';
    buttons.appendChild(textField);
    copy(`http://localhost:3000${pathname}`);
  }

  return (
    <div className="allPage">
      {details && (
        <div className="recipe-details">
          <img
            alt="element sas"
            src={ details.strDrinkThumb }
            style={ { width: '300px' } }
          />
          <h2 data-testid="recipe-title">{ details.strDrink }</h2>
          <div id="share-favorite">
            <button
              type="button"
              onClick={ copyToClipboard }
            >
              Copy
            </button>
            <button
              type="button"
            >
              Favorite
            </button>
          </div>
          <h5 data-testid="recipe-category">
            { `${details.strCategory} - ${details.strAlcoholic}` }
          </h5>
          <p>Ingredients</p>
          <div className="ingredients">
            {ingredients(details).map((ingredient, i) => (
              details[ingredient] && (
                <p
                  key={ ingredient }
                  className="ingredients-itens"
                >
                  { `${details[ingredient]} --- ${details[measures(details)[i]]}` }
                </p>)
            ))}
          </div>
          <p>Instructions</p>
          <p data-testid="instructions">{ details.strInstructions }</p>
          <div className="recomendation">
            {meals.slice(0, six).map((meal, i) => (
              <p
                key={ i }
                className="recomendation-card"
              >
                { meal.strMeal }
              </p>
            ))}
          </div>
          <Link to={ `/drinks/${idNumbers}/in-progress` }>
            <button
                className="fixed-recipe-btn"
                type="button"
            >
                Start Recipe
            </button>
          </Link>
        </div>)}
        <Footer />
    </div>
  );
}

export default RecipeDrinkDetails;
