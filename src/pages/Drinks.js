import React, { useContext } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Context from "../context/MyContext";
import Header from '../components/Header';
import Category from "../components/Category";

function Drinks() {
  const { drinks, drinksCategories } = useContext(Context);

  return (
    <div className='allPage'>
      <Header pageName='Drinks' />
      <div className="page-content">
        <div className="categories">
          <Category categoryName="All" categoryType="drinks" />
            {drinksCategories && drinksCategories.slice(0, 5).map((category) => (
              <Category
                key={ category.strCategory }
                categoryName={ category.strCategory }
                categoryType="drinks"
              />
            ))}
        </div>
        <div className="recipes-content">
          {drinks.map((e) => (
            <Card
              key={ e.idDrink }
              cardType="drinks"
              id={ e.idDrink }
              name={ e.strDrink }
              strThumb={ e.strDrinkThumb }
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Drinks;