import React, { useContext } from 'react';
import Context from '../context/MyContext';
import fetchDrinks from '../services/fetchDrinks';
import fetchFoods from '../services/fetchFoods';
import { Link } from "react-router-dom";

function Header(props) {
  const { pageName } = props
  const { setMeals, setDrinks } = useContext(Context);
  const handleClick = ({ target }) => {
    const input = target.previousSibling.value;
    fetchFoods(`search.php?s=${input}`).then(
      (data) => setMeals(data)
    );
    fetchDrinks(`search.php?s=${input}`).then(
      (data) => setDrinks(data)
    );
  };
  return (
    <header>
      <div className='header-top'>
        <Link to='/profile'>Profile</Link>
        <h2>{ pageName }</h2>
        <button>filters</button>
      </div>
      <div>
        <input
        />
        <button onClick={ handleClick }>Search</button>
      </div>
    </header>
  );
}

export default Header;