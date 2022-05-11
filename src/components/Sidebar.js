import React, { useContext } from "react";
import Context from "../context/MyContext";
import fetchDrinks from '../services/fetchDrinks';
import fetchFoods from '../services/fetchFoods';

function Sidebar(props) {
  const {
    setSidebar,
    sidebar,
    categories,
    setMeals,
    setDrinks,
    setCategory,
    setSearchbar,
  } = useContext(Context);

  const { page } = props;

  const showSidebar = () => {
    setSidebar(!sidebar);
    setSearchbar(false);
  };
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
    <div className="sidebar">
      <button
        type="button"
        onClick={ showSidebar }
      >
        Filter
      </button>
      {sidebar && (
        <div id="categories">
          <h3 onClick={ setFilters } className="category">All categories</h3>
          {categories.map((e) => (
            <h3 onClick={ setFilters } className="category">{ e.strCategory }</h3>
          ))}
        </div>
      )}
    </div>
  )
}

export default Sidebar;
