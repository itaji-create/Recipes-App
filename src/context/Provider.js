import React, { useState } from 'react';
import Context from './MyContext';

function Provider({ children }) {
  const [Meals, setMeals] = useState([{ idMeal: '', srtMeal: '', srtMealThumb: '' }]);
  const [login, setLogin] = useState('ola');
  const [Drinks, setDrinks] = useState([{ idDrink: '', srtDrink: '', srtDrinkThumb: '' }]);
  const [search, setSearch] = useState('');

  const contextValue = {
    Meals,
    login,
    Drinks,
    search,
    setMeals,
    setLogin,
    setDrinks,
    setSearch,
  };
  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

export default Provider;
