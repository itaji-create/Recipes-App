import React, { useState, useEffect } from 'react';
import Context from './MyContext';
import fetchDrinks from "../services/fetchDrinks";

function Provider({ children }) {
  const [meals, setMeals] = useState([{ idMeal: '', srtMeal: '', srtMealThumb: '' }]);
  const [login, setLogin] = useState('ola');
  const [drinks, setDrinks] = useState([{ idDrink: '', srtDrink: '', srtDrinkThumb: '' }]);
  const [search, setSearch] = useState('');
  const [details, setDetails] = useState();
  const [categories, setCategories] = useState([{ strCategory: '' }])
  const [selectedCategory, setCategory] = useState();
  const [ingredients, setIngredients] = useState([]);
  const [sidebar, setSidebar] = useState(false);
  const [searchbar, setSearchbar] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetchDrinks().then((data) => setDrinks(data));
  }, [setDrinks]);

  const contextValue = {
    meals,
    login,
    drinks,
    search,
    details,
    sidebar,
    categories,
    ingredients,
    selectedCategory,
    searchValue,
    searchbar,
    setSearchbar,
    setSearchValue,
    setMeals,
    setLogin,
    setDrinks,
    setSearch,
    setDetails,
    setCategories,
    setCategory,
    setSidebar,
    setIngredients,
  };
  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

export default Provider;
