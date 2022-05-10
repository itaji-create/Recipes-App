import React, { useState, useEffect } from 'react';
import Context from './MyContext';
import fetchDrinks from "../services/fetchDrinks";
import fetchDrinksCategory from "../services/fetchDrinksCategory";

function Provider({ children }) {
  const [meals, setMeals] = useState([{ idMeal: '', srtMeal: '', srtMealThumb: '' }]);
  const [login, setLogin] = useState('ola');
  const [drinks, setDrinks] = useState([{ idDrink: '', srtDrink: '', srtDrinkThumb: '' }]);
  const [search, setSearch] = useState('');
  const [details, setDetails] = useState();
  const [mealsCategories, setMealCategory] = useState();
  const [drinksCategories, setDrinksCategory] = useState();
  const [selectedCategory, setCategory] = useState();
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetchDrinks().then((data) => setDrinks(data));
    fetchDrinksCategory().then((category) => setDrinksCategory(category.drinks));
  }, [setDrinks, setDrinksCategory]);

  const contextValue = {
    meals,
    login,
    drinks,
    search,
    details,
    ingredients,
    mealsCategories,
    drinksCategories,
    selectedCategory,
    setMeals,
    setLogin,
    setDrinks,
    setSearch,
    setDetails,
    setMealCategory,
    setDrinksCategory,
    setCategory,
    setIngredients,
  };
  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

export default Provider;
