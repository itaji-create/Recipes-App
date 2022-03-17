import React, { useContext } from 'react';
import Card from '../components/Card';
import Context from '../context/MyContext';

function Foods() {
  const {
    Meals,
  } = useContext(Context);
  console.log(Meals);
  return (
    <div>
      {Meals.map((e) => (
        <Card
          cardType="foods"
          id={ e.idMeal }
          name={ e.strMeal }
          strThumb={ e.strMealThumb }
        />
      ))}
    </div>
    );
  }
  
  export default Foods;