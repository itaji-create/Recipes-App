import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import fetchFoods from "../services/fetchFoods";
import Footer from "../components/Footer";

function ExploreFoods() {
  const navigate = useNavigate();
  function exploreMeal() {
    fetchFoods('random.php').then((meal) => navigate(`/foods/${meal[0].idMeal}`));
  }
  return (
    <div className="allPage">
      <Header pageName="Explore Foods" />
      <div className="page-content">
        <Link to="/explore/foods/ingredients">
          <button>
            By Ingredient
          </button>
        </Link>
        <Link to="/explore/foods/nationalities">
          <button>
            By Nationality
          </button>
        </Link>
          <button onClick={ exploreMeal }>
            Surprise me!
          </button>
      </div>
      <Footer />
    </div>    
    );
}

export default ExploreFoods;