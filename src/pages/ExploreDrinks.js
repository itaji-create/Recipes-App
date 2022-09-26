import React from 'react';
import { useNavigate } from "react-router-dom";
import fetchDrinks from '../services/fetchDrinks';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from 'react-bootstrap/Button';

function ExploreDrinks() {
    const navigate = useNavigate();

  function exploreDrink() {
    fetchDrinks('random.php')
      .then((drink) => navigate(`/drinks/${drink[0].idDrink}`));
  }
  return (
    <div className="allPage">
      <Header filters='true' pageName="Explore Drinks" />
      <div className="explorer-buttons">
        <Button
          onClick={ () => navigate('/explore/drinks/ingredients') }
          data-testid="drink-ingredient-btn"
          variant="secondary"
          size="lg"
        >
          By Ingredient
        </Button>
        <Button
          onClick={ exploreDrink }
          data-testid="drink-surprise-btn"
          variant="secondary"
          size="lg"
        >
          Surprise me!
        </Button>
      </div>
      <Footer />
    </div>
  );
}

export default ExploreDrinks;
