import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import Context from '../context/MyContext';
import fetchDrinks from '../services/fetchDrinks';
import fetchFoods from '../services/fetchFoods';

function Category(props) {
  const { categoryName, categoryType } = props;
  const {
    setCategory,
    setMeals,
    selectedCategory,
    setDrinks,
  } = useContext(Context);

  function onClickCategory({ target }) {
    console.log(target.innerText);
    switch (categoryType) {
    case 'foods':
      if (selectedCategory === target.innerText || target.innerText === 'All') {
        fetchFoods().then((i) => setMeals(i));
        setCategory('');
      } else {
        setCategory(target.innerText);
        fetchFoods(`filter.php?c=${target.innerText}`).then((i) => setMeals(i));
      }
      break;
    case 'drinks':
      if (selectedCategory === target.innerText || target.innerText === 'All') {
        fetchDrinks().then((i) => setDrinks(i));
        setCategory('');
      } else {
        setCategory(target.innerText);
        fetchDrinks(`filter.php?c=${target.innerText}`).then((i) => setDrinks(i));
      }
      break;
    default:
      break;
    }
  }
  return (
    <button
      type="button"
      onClick={ onClickCategory }
      className="category-button"
    >
      { categoryName }
    </button>
  );
}

Category.propTypes = {
  categoryName: PropTypes.string.isRequired,
  categoryType: PropTypes.string.isRequired,
};

export default Category;
