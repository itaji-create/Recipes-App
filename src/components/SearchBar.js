import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Context from '../context/MyContext';
import '../App.css';
import fetchFoods from '../services/fetchFoods';
import fetchDrinks from '../services/fetchDrinks';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SearchBar(props) {
  const { page } = props;
  const navigate = useNavigate();

  const {
    setMeals,
    setDrinks,
    searchValue,
    setSearchValue,
    searchbar,
    setSearchbar,
    setSidebar,
  } = useContext(Context);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const error2 = () => global
    .alert('Sorry, we haven\'t found any recipes for these filters.');

  function errorFinder(set, i, type, idType) {
    if (i === null) {
      error2();
    } else if (i.length === 1) {
      const id = i[0][idType];
      navigate(`/${type}/${id}`);
    } else {
      return set;
    }
  }

  const clickRender = () => {
    setSearchbar(!searchbar);
    setSidebar(false)
    switch (page) {
    case 'Foods':
        fetchFoods(`search.php?s=${searchValue}`)
          .then((i) => errorFinder(setMeals(i), i, 'foods', 'idMeal'));
      break;
    case 'Drinks':
        fetchDrinks(`search.php?s=${searchValue}`)
          .then((i) => errorFinder(setDrinks(i), i, 'drinks', 'idDrink'));
      break;
    default:
      break;
    }
  };

  return (
    <Form className="d-flex">
      <Form.Control
        type="text"
        placeholder={ `Search for ${page}` }
        value={ searchValue }
        onChange={ handleChange }
        className="search-input"
      />
      <Button onClick={ clickRender } variant="outline-success" type="button">Search</Button>
    </Form>
  );
}

SearchBar.propTypes = {
  page: propTypes.string.isRequired,
};

export default SearchBar;
