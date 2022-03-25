import React, { useContext, useEffect } from 'react';
import Card from '../components/Card';
import Context from '../context/MyContext';
import Footer from '../components/Footer';
import Header from '../components/Header';
import fetchFoods from '../services/fetchFoods';
import fetchMealsCategory from '../services/fetchMealsCategory';
import Category from '../components/Category';

function Foods() {
  const { meals, setMeals, mealsCategories, setMealCategory } = useContext(Context);
  useEffect(() => {
    fetchFoods().then((data) => setMeals(data));
    fetchMealsCategory().then((category) => setMealCategory(category.meals));
  }, [setMeals, setMealCategory]);
  return (
    <div className='allPage'>
      <Header pageName='Foods' />
      <div className="page-content">
        <div className="categories">
          <Category categoryName="All" categoryType="foods" />
          {mealsCategories && mealsCategories.slice(0, 5).map((category) => (
            <Category
              key={ category.strCategory }
              categoryName={ category.strCategory }
              categoryType="foods"
            />
          ))}
        </div>
        {meals.slice(0, 12).map((e) => (
          <Card
            key={ e.idMeal }
            cardType="foods"
            id={ e.idMeal }
            name={ e.strMeal }
            strThumb={ e.strMealThumb }
          />
        ))}
      </div>
      <Footer />
    </div>
    );
  }
  
  export default Foods;