import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Context from '../context/MyContext';
import fetchDrinks from '../services/fetchDrinks';
import Footer from '../components/Footer';
import IngredientsTable from '../components/IngredientsTable';
import Instructions from '../components/Instructions';
import Header from '../components/Header';
import { addDrinkToFavorites } from '../utils/addToFavorites';
import ShareFavoriteBtn from '../components/ShareFavoriteBtn';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from '../components/Card';

function RecipeDrinkDetails() {
  const { pathname } = useLocation();
  const [exist, setExist] = useState(false);

  const idNumbers = pathname
    .split('').filter((e) => (Number(e) || e === '0')).join('');
  const {
    details,
    setDetails,
    meals,
  } = useContext(Context);

  const handleClick = () => {
    addDrinkToFavorites(details)
    console.log(details);
    const favorites = JSON.parse(localStorage.getItem('favoritesDrinks'));
    setExist(favorites.some((e) => e.idDrink === details.idDrink))
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  useEffect(() => {
    fetchDrinks(`lookup.php?i=${idNumbers}`).then((data) => {
      setDetails(data[0]);
      const favorites = JSON.parse(localStorage.getItem('favoritesDrinks'));
      if (favorites) setExist(favorites.some((e) => e.idDrink === data[0].idDrink));
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
                src={ details.strDrinkThumb }
                className="img-fluid"
              />
              <ShareFavoriteBtn exist={ exist } handleClick={ handleClick } />
            </div>
            <div className="col-md-6">
              <h1 className="mb-4" data-testid="recipe-title">{ details.strDrink }</h1>
              <h5 data-testid="recipe-category">
                { `${details.strCategory} - ${details.strAlcoholic}` }
              </h5>
              <IngredientsTable details={ details } />
              <Instructions details={ details } />
            </div>
            <Carousel className="mb-5" responsive={responsive}>
            {meals.map((card) => (
              <Card
              key={ card.idMeal }
              cardType="foods"
              id={ card.idMeal }
              name={ card.strMeal }
              strThumb={ card.strMealThumb }
            />
            ))}
          </Carousel>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default RecipeDrinkDetails;
