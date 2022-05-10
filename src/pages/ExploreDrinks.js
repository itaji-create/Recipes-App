import React from 'react';
import { useNavigate } from "react-router-dom";
import fetchDrinks from '../services/fetchDrinks';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreDrinks() {
    const navigate = useNavigate();

  function exploreDrink() {
    fetchDrinks('random.php')
      .then((drink) => navigate(`/drinks/${drink[0].idDrink}`));
  }
  return (
    <div className="allPage">
      <Header pageName="Explore Drinks" />
      <div className="explorer-buttons">
        <button
          type="button"
          onClick={ () => navigate('/explore/drinks/ingredients') }
          className="profile-item"
        >
          By Ingredient
        </button>
        <button
          type="button"
          onClick={ exploreDrink }
          className="profile-item"
        >
          Surprise me!
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default ExploreDrinks;
