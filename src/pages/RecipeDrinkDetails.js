import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Context from '../context/MyContext';
import fetchDrinks from '../services/fetchDrinks';
import Footer from '../components/Footer';
import { ingredients, measures } from '../services/ingredientsMeasure';
import copyToClipboard from '../utils/copyToClipboard';
import Header from '../components/Header';

function RecipeDrinkDetails() {
  const { pathname } = useLocation();

  const idNumbers = useLocation().pathname
    .split('').filter((e) => (Number(e) || e === '0')).join('');
  const {
    details,
    setDetails,
    setFavoriteIcon,
  } = useContext(Context);

  useEffect(() => {
    fetchDrinks(`lookup.php?i=${idNumbers}`).then((data) => {
      setDetails(data[0]);
    });
  }, [idNumbers, setDetails, setFavoriteIcon]);

  return (
    <div>
      <Header filters='true' pageName='details' />
      {details && (
        <div className="recipe-details">
          <img
            alt="element sas"
            src={ details.strDrinkThumb }
            style={ { width: '300px' } }
          />
          <div>

            <h2 data-testid="recipe-title">{ details.strDrink }</h2>
            <h5 data-testid="recipe-category">
              { `${details.strCategory} - ${details.strAlcoholic}` }
            </h5>
            <div id="share-favorite">
              <button
                type="button"
                onClick={ () => copyToClipboard(pathname) }
              >
                Copy
              </button>
              <button
                type="button"
              >
                Favorite
              </button>
            </div>
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
          </div>
          {/* <div className="recomendation">
            {meals.slice(0, six).map((meal, i) => (
              <p
                key={ i }
                className="recomendation-card"
              >
                { meal.strMeal }
              </p>
            ))}
          </div> */}
        </div>)}
        <Footer />
    </div>
  );
}

export default RecipeDrinkDetails;
