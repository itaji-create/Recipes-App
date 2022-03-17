import React, { useEffect, useState } from 'react';
import fetchFoods from '../services/fetchFoods';
import Context from './MyContext';

function Provider({ children }) {
  const [Meals, setMeals] = useState([{idMeal: '', srtMeal: '', srtMealThumb: ''}]);
  const [login, setLogin] = useState('ola')

  useEffect(() => {
    fetchFoods().then((data) => setMeals(data));
  }, [])
  const contextValue = {
    Meals,
    login,
    setMeals,
    setLogin,
  };
  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

export default Provider;
