import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import fetchFoods from "../services/fetchFoods";
import Footer from "../components/Footer";
import Button from 'react-bootstrap/Button';

function ExploreFoods() {
  const navigate = useNavigate();
  function exploreMeal() {
    fetchFoods('random.php').then((meal) => navigate(`/foods/${meal[0].idMeal}`));
  }
  return (
    <div className="allPage">
      <Header pageName="Explore Foods" filters='false' />
      <div className="row text-center">
        <Button
          data-testid="food-ingredient-btn"
          variant="primary"
          onClick={ () => navigate('/explore/foods/ingredients') }
          size="lg"
          className="p-3 m-2"
        >
          By Ingredient
        </Button>
        <Button
          data-testid="food-nationality-btn"
          onClick={ () => navigate('/explore/foods/ingredients') }
          variant="secondary"
          size="lg"
          className="p-3 m-2"
        >
          By Nationality
        </Button>
        <Button
          data-testid="food-surprise-btn"
          onClick={ exploreMeal }
          variant="success"
          size="lg"
          className="p-3 m-2"
        >
          Surprise me!
        </Button>
      </div>
      <Footer />
    </div>    
    );
}

export default ExploreFoods;