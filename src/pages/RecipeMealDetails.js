import React, { useEffect, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Context from '../context/MyContext';
import fetchFoods from '../services/fetchFoods';
import Footer from '../components/Footer';
import IngredientsTable from '../components/IngredientsTable';
import Instructions from '../components/Instructions';
import Header from '../components/Header';
import { addMealToFavorites } from '../utils/addToFavorites';
import ShareFavoriteBtn from '../components/ShareFavoriteBtn';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from '../components/Card';

function RecipeMealDetails() {
  const [videoId, setVideoId] = useState('');
  const [exist, setExist] = useState(false);
  const { pathname } = useLocation();
  const {
    details,
    setDetails,
    drinks,
  } = useContext(Context);

  const handleClick = () => {
    addMealToFavorites(details)
    const favorites = JSON.parse(localStorage.getItem('favoritesMeals'));
    setExist(favorites.some((e) => e.idMeal === details.idMeal))
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  const idNumbers = pathname
    .split('').filter((e) => (Number(e) || e === '0')).join('');

  useEffect(() => {
    fetchFoods(`lookup.php?i=${idNumbers}`).then((data) => {
      setDetails(data[0]);
      const url = new URL(data[0].strYoutube);
      const id = new URLSearchParams(url.search).get("v");
      setVideoId(id);
      const favorites = JSON.parse(localStorage.getItem('favoritesMeals'));
      if (favorites) setExist(favorites.some((e) => e.idMeal === data[0].idMeal));
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
              <ShareFavoriteBtn exist={ exist } handleClick={ handleClick } />
            </div>
            <div className="col-md-6">
              <h1 className="mb-4" data-testid="recipe-title">{ details.strMeal }</h1>
              <h5 data-testid="recipe-category">{ details.strCategory }</h5>      
            <IngredientsTable details={ details } />
            <Instructions details={ details } videoId={ videoId }/>
            </div>  
          </div>
          <Carousel className="mb-5" responsive={responsive}>
            {drinks.map((card) => (
              <Card
              key={ card.idDrink }
              cardType="drinks"
              id={ card.idDrink }
              name={ card.strDrink }
              strThumb={ card.strDrinkThumb }
            />
            ))}
          </Carousel>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default RecipeMealDetails;
