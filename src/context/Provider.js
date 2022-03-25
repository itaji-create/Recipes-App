import React, { useState } from 'react';
import Context from './MyContext';

function Provider({ children }) {
  const [meals, setMeals] = useState([{ idMeal: '', srtMeal: '', srtMealThumb: '' }]);
  const [login, setLogin] = useState('ola');
  const [drinks, setDrinks] = useState([{ idDrink: '', srtDrink: '', srtDrinkThumb: '' }]);
  const [search, setSearch] = useState('');
  const [details, setDetails] = useState();

  const contextValue = {
    meals,
    login,
    drinks,
    search,
    details,
    setMeals,
    setLogin,
    setDrinks,
    setSearch,
    setDetails,
  };
  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

export default Provider;
