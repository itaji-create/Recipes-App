import React, { useContext, useEffect } from 'react';
import Context from '../context/MyContext';
import IngredientCard from '../components/IngredientCard';
import fetchDrinks from '../services/fetchDrinks';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreDrinksIngredients() {
  const {
    ingredients,
    setIngredients,
  } = useContext(Context);

  useEffect(() => {
    fetchDrinks('list.php?i=list')
      .then((result) => setIngredients(result));
  }, [setIngredients]);

  const ingredientsLoaded = ingredients.length > 0;
//   const number = 12;
  return (
    <div className="allPage">
      <Header pageName="Explore Ingredients" />
      <div style={{ marginTop: '80px', marginBottom: '35px' }}>
        {ingredientsLoaded && ingredients
          .map(({ strIngredient1 }, index) => (
            <IngredientCard
              ingredient={ strIngredient1 }
              key={ strIngredient1 }
              index={ index }
              title={ strIngredient1 }
              cardType="drinks"
              fetchType="thecocktaildb"
            />
          ))}
      </div>
      <Footer />
    </div>
  );
}

export default ExploreDrinksIngredients;
