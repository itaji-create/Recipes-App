import React, { useContext, useEffect } from 'react';
import Card from '../components/Card';
import Context from '../context/MyContext';
import Footer from '../components/Footer';
import Header from '../components/Header';
import fetchFoods from '../services/fetchFoods';
import fetchMealsCategory from '../services/fetchMealsCategory';

function Foods() {
  const { meals, setMeals, setCategories } = useContext(Context);
  useEffect(() => {
    fetchFoods().then((data) => setMeals(data));
    fetchMealsCategory().then((category) => setCategories(category.meals));
  }, [setMeals, setCategories]);

  return (
    <div className='allPage'>
      <Header filters='true' pageName='Foods' />
      <div className="page-content">
        <div className="recipes-content">
          {meals.map((e) => (
            <Card
              key={ e.idMeal }
              cardType="foods"
              id={ e.idMeal }
              name={ e.strMeal }
              strThumb={ e.strMealThumb }
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
    );
  }
  
  export default Foods;