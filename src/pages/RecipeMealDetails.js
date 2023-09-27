import React, { useEffect, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Context from '../context/MyContext';
import fetchFoods from '../services/fetchFoods';
import Footer from '../components/Footer';
import copyToClipboard from '../utils/copyToClipboard';
import IngredientsTable from '../components/IngredientsTable';
import Instructions from '../components/Instructions';
import Header from '../components/Header';

function RecipeMealDetails() {
  const [videoId, setVideoId] = useState('');
  const { pathname } = useLocation();
  const {
    details,
    setDetails,
  } = useContext(Context);

  console.log(videoId);

  const idNumbers = pathname
    .split('').filter((e) => (Number(e) || e === '0')).join('');

  useEffect(() => {
    fetchFoods(`lookup.php?i=${idNumbers}`).then((data) => {
      setDetails(data[0]);
      const url = new URL(data[0].strYoutube);
      const id = new URLSearchParams(url.search).get("v");
      setVideoId(id);
    });
  }, [idNumbers, setDetails]);

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
                src={ details.strMealThumb }
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
              <h1 className="mb-4" data-testid="recipe-title">{ details.strMeal }</h1>
              <h5 data-testid="recipe-category">{ details.strCategory }</h5>      
            <IngredientsTable details={ details } />
            <Instructions details={ details } videoId={ videoId }/>
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
        </div>
      )}
      <Footer />
    </div>
  );
}

export default RecipeMealDetails;
