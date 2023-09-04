import React, { useContext } from "react";
import Context from "../context/MyContext";
import fetchDrinks from '../services/fetchDrinks';
import fetchFoods from '../services/fetchFoods';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/NavDropdown';

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
    <Container fluid>
      <Nav.Item onClick={ setFilters } className="category">All categories</Nav.Item>
      {categories.map((e) => (
        <Nav.Item onClick={ setFilters } className="category">{ e.strCategory }</Nav.Item>
      ))}
    </Container>
  )
}

export default Sidebar;
