import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Context from '../context/MyContext';
import fetchDrinks from '../services/fetchDrinks';
import Footer from '../components/Footer';
import copyToClipboard from '../utils/copyToClipboard';
import IngredientsTable from '../components/IngredientsTable';
import Instructions from '../components/Instructions';

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
              <div>
                <button
                  type="button"
                  data-testid="share-btn"
                  className="btn"
                  onClick={ () => copyToClipboard(pathname) }
                >
                  Copy
                </button>
                <button
                  type="button"
                  className="btn"
                >
                  <i className="fas fa-heart" />
                  Favoritar
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
