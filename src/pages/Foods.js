import React, { useContext, useEffect } from 'react';
import Card from '../components/Card';
import Context from '../context/MyContext';
import Footer from '../components/Footer';
import Header from '../components/Header';
import fetchFoods from '../services/fetchFoods';

function Foods() {
  const { Meals, setMeals } = useContext(Context);
  useEffect(() => {
    fetchFoods().then((data) => setMeals(data));
  }, [setMeals]);
  return (
    <div className='allPage'>
      <Header pageName='Foods' />
      <div className="page-content">
        {Meals.slice(0, 12).map((e) => (
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