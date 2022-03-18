import React, { useContext } from 'react';
import Card from '../components/Card';
import Context from '../context/MyContext';
import Footer from '../components/Footer';

function Foods() {
  const {
    Meals,
  } = useContext(Context);
  console.log(Meals);
  return (
    <div className='allPage'>
      <div className="page-content">
        {Meals.slice(0, 12).map((e) => (
          <Card
            cardType="foods"
            id={ e.idMeal }
            name={ e.strMeal }
            strThumb={ e.strMealThumb }
          />
        ))}
        <Footer />
      </div>
    </div>
    );
  }
  
  export default Foods;