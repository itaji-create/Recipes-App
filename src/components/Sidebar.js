import React, { useContext } from "react";
import Context from "../context/MyContext";
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

  
  return (
    <div>
      <NavDropdown title="Categories" id="navbarScrollingDropdown">
        <NavDropdown.Item onClick={ setFilters } className="category">All categories</NavDropdown.Item>
          {categories.map((e) => (
            <NavDropdown.Item onClick={ setFilters } className="category">{ e.strCategory }</NavDropdown.Item>
          ))}
      </NavDropdown>
    </div>
  )
}

export default Sidebar;
