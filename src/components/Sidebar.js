import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/MyContext';
import fetchDrinks from '../services/fetchDrinks';
import fetchFoods from '../services/fetchFoods';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Sidebar(props) {
  const {
    setSidebar,
    categories,
    setMeals,
    setDrinks,
    setCategory,
  } = useContext(Context);

  const [favorites, setFavorites] = useState([]);

  const { page } = props;

  function setFilters({ target }) {
    const filters = target.innerText;
    switch (page) {
      case 'Foods':
        if (filters === 'All categories') {
          fetchFoods().then((i) => setMeals(i));
          setCategory('');
        } else {
          setCategory(filters);
          fetchFoods(`filter.php?c=${filters}`).then((i) => setMeals(i));
        }
        break;
      case 'Drinks':
        if (filters === 'All categories') {
          fetchDrinks().then((i) => setDrinks(i));
          setCategory('');
        } else {
          setCategory(filters);
          fetchDrinks(`filter.php?c=${filters}`).then((i) => setDrinks(i));
        }
        break;
      default:
      break;
    }
    setSidebar(false);
  }

  useEffect(() => {
    if (page === "Foods") {
      const fav = JSON.parse(localStorage.getItem('favoritesMeals'));
      setFavorites(fav);
    }
    if (page === "Drinks") {
      const fav = JSON.parse(localStorage.getItem('favoritesDrinks'));
      setFavorites(fav);
    }
  }, [page])
  
  return (
    <div>
      <NavDropdown title="Categories" id="navbarScrollingDropdown">
        <NavDropdown.Item onClick={ setFilters } className="category">All categories</NavDropdown.Item>
          {categories.map((e, i) => (
            <NavDropdown.Item key={ i } onClick={ setFilters } className="category">{ e.strCategory }</NavDropdown.Item>
          ))}
      </NavDropdown>
      <NavDropdown title="Favorites" id="navbarScrollingDropdown">
        {favorites && favorites.map((e, i) => (
          <NavDropdown.Item key={ i } href={ `${page}/${e.idMeal || e.idDrink }`} >{ e.strMeal || e.strDrink }</NavDropdown.Item>
        ))}
      </NavDropdown>
    </div>
  )
}

export default Sidebar;
