import React, { useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Context from '../context/MyContext';
import fetchFoods from '../services/fetchFoods';
import { ingredients, measures } from '../services/ingredientsMeasure';
import Footer from '../components/Footer';

const copy = require('clipboard-copy');

function RecipeMealDetails() {
  const { pathname } = useLocation();
  const {
    details,
    setDetails,
  } = useContext(Context);

  const idNumbers = pathname
    .split('').filter((e) => (Number(e) || e === '0')).join('');

  useEffect(() => {
    fetchFoods(`lookup.php?i=${idNumbers}`).then((data) => {
      setDetails(data[0]);
    });
  }, [idNumbers, setDetails]);

  function copyToClipboard() {
    const textField = document.createElement('p');
    const buttons = document.getElementById('share-favorite-btn');
    textField.innerText = 'Link copied!';
    buttons.appendChild(textField);
    copy(`http://localhost:3000${pathname}`);
  }

  return (
    <div className="allPage">
      {details && (
        <div className="recipe-details">
          <img
            data-testid="recipe-photo"
            alt="element sas"
            src={ details.strMealThumb }
            style={ { width: '300px' } }
          />
          <h2 data-testid="recipe-title">{ details.strMeal }</h2>
          <div id="share-favorite-btn">
            <button
              type="button"
              data-testid="share-btn"
              onClick={ copyToClipboard }
            >
              Copy
            </button>
            <button
              type="button"
            >
              <img
                data-testid="favorite-btn"
                alt="favorite"
              />
            </button>
          </div>
          <h5 data-testid="recipe-category">{ details.strCategory }</h5>
          <p>Ingredients</p>
          <div className="ingredients">
            {ingredients(details).map((ingredient, i) => (
              details[ingredient] && (
                <p
                  key={ ingredient }
                  data-testid={ `${i}-ingredient-name-and-measure` }
                  className="ingredients-itens"
                >
                  { `${details[ingredient]} --- ${details[measures(details)[i]]}` }
                </p>)
            ))}
          </div>
          <p>Instructions</p>
          <p data-testid="instructions">{ details.strInstructions }</p>
          <a href={ details.strYoutube } data-testid="video">{ details.strYoutube }</a>
          {/* <div className="recomendation">
            {drinks.slice(0, six).map((drink, i) => (
              <p
                key={ i }
                data-testid={ `${i}-recomendation-card` }
                className="recomendation-card"
              >
                { drink.strDrink }
              </p>
            ))}
          </div> */}
          <Link to={ `/foods/${idNumbers}/in-progress` }>
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

export default RecipeMealDetails;