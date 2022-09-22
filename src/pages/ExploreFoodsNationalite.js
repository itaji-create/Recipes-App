import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Context from '../context/MyContext';
import fetchFoods from '../services/fetchFoods';
import Card from '../components/Card';

function ExploreNationalite() {
  const {
    meals,
    setMeals,
    setMealsNationalite,
    mealsNationalite,
    selectValue,
    setSelectValue,
  } = useContext(Context);

  const handleSelect = ({ target: { value }}) => {
    setSelectValue(value);
    fetchFoods(`filter.php?a=${value}`).then((e) => setMeals(e));
  }

  useEffect(() => {
    fetchFoods('list.php?a=list').then((e) => setMealsNationalite(e));
  }, []);

  return (
    <div className='allPage'>
      <Header pageName="Explore Nationalite" />
      <div id="filterNationalite">
        <select
          value={ selectValue }
          onChange={ handleSelect }
        >
          { mealsNationalite && mealsNationalite.map((country) => (
            <option key={ country.strArea }>{ country.strArea }</option>
          ))}
        </select>
      </div>
      <div className="recipes-content">
        { meals && meals.map((e) => (
          <Card
            key={ e.idMeal }
            name={ e.strMeal }
            strThumb={ e.strMealThumb }
            id={ e.idMeal }
            cardType="foods"
          />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default ExploreNationalite;
