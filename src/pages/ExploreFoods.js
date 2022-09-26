import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
      <Header pageName="Explore Foods" filters='true' />
      <div className="page-content">
        <Link to="/explore/foods/ingredients">
          <Button
            data-testid="food-ingredient-btn"
            variant="secondary"
            size="lg"
          >
            By Ingredient
          </Button>
        </Link>
        <Link to="/explore/foods/nationalities">
          <Button
            data-testid="food-nationality-btn"
            variant="secondary"
            size="lg"
          >
            By Nationality
          </Button>
        </Link>
          <Button
            data-testid="food-surprise-btn"
            onClick={ exploreMeal }
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

export default ExploreFoods;