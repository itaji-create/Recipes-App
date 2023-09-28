import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Context from '../context/MyContext';
import fetchDrinks from '../services/fetchDrinks';
import Footer from '../components/Footer';
import IngredientsTable from '../components/IngredientsTable';
import Instructions from '../components/Instructions';
import Header from '../components/Header';
import { addDrinkToFavorites } from '../utils/addToFavorites';
import copyToClipboard from '../utils/copyToClipboard';

function RecipeDrinkDetails() {
  const { pathname } = useLocation();

  const idNumbers = pathname
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
    <div className="allPage">
      <Header pageName="Recipe Details"/>
      {details && (
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <img
                data-testid="recipe-photo"
                alt="element sas"
                src={ details.strDrinkThumb }
                className="img-fluid"
              />
              <div id="share-favorite">
                <button
                  type="button"
                  data-testid="share-btn"
                  className="btn"
                  onClick={ copyToClipboard }
                >
                  Copy 📝
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={ () => addDrinkToFavorites(details) }
                >
                  <i className="fas fa-heart" />
                  Favorite ❤️
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <h1 className="mb-4" data-testid="recipe-title">{ details.strDrink }</h1>
              <h5 data-testid="recipe-category">
                { `${details.strCategory} - ${details.strAlcoholic}` }
              </h5>
              <IngredientsTable details={ details } />
              <Instructions details={ details } />
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default RecipeDrinkDetails;
