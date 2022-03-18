import React, { useEffect, useState } from 'react';
import fetchDrinks from '../services/fetchDrinks';
import fetchFoods from '../services/fetchFoods';
import Context from './MyContext';

function Provider({ children }) {
  const [Meals, setMeals] = useState([{ idMeal: '', srtMeal: '', srtMealThumb: '' }]);
  const [login, setLogin] = useState('ola');
  const [Drinks, setDrinks] = useState([{ idDrink: '', srtDrink: '', srtDrinkThumb: '' }])

  useEffect(() => {
    fetchFoods().then((data) => setMeals(data));
    fetchDrinks().then((data) => setDrinks(data));
  }, [])
  const contextValue = {
    Meals,
    login,
    Drinks,
    setMeals,
    setLogin,
    setDrinks,
  };
  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

export default Provider;
