import React, { useContext, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IngredientCard from "../components/IngredientCard";
import Context from "../context/MyContext";
import fetchFoods from "../services/fetchFoods";

function ExploreFoodsIngredients(params) {
  const { ingredients, setIngredients } = useContext(Context);
  
  useEffect(() => {
    fetchFoods('list.php?i=list')
    .then((result) => setIngredients(result))
  }, [setIngredients])
  const ingredientsLoaded = ingredients.length > 0;

  return (
    <div className="allPage">
      <Header pageName="Explore Ingredients" />
      <div>
        {ingredientsLoaded && ingredients.map(({ strIngredient }) => 
          <IngredientCard
            ingredient={ strIngredient }
            key={ strIngredient }
            title={ strIngredient }
            cardType="foods"
            fetchType="themealdb"
          />
        )}
      </div>
      <Footer />
    </div>
  )
}

export default ExploreFoodsIngredients;