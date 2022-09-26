import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Context from '../context/MyContext';
import fetchFoods from '../services/fetchFoods';
import { ingredients, measures } from '../services/ingredientsMeasure';
import Footer from '../components/Footer';
import copyToClipboard from '../utils/copyToClipboard';
import Header from '../components/Header';

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

  return (
    <div>
      <Header filters='true' pageName='details' />
      {details && (
        <div className="recipe-details">
          <img
            data-testid="recipe-photo"
            alt="element sas"
            src={ details.strMealThumb }
            style={ { width: '300px' } }
          />
          <div>
            <h1 data-testid="recipe-title">{ details.strMeal }</h1>
            <h5 data-testid="recipe-category">{ details.strCategory }</h5>
            <div id="share-favorite">
              <button
                type="button"
                data-testid="share-btn"
                onClick={ () => copyToClipboard(pathname) }
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
            <div>
              <p>Instructions</p>
              <p id="instructions" data-testid="instructions">{ details.strInstructions }</p>
              <a href={ details.strYoutube } data-testid="video">{ details.strYoutube }</a>
            </div>
          </div>
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
        </div>)}
        <Footer />
    </div>
  );
}

export default RecipeMealDetails;