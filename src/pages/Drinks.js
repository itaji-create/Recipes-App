import React, { useContext, useEffect } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Context from "../context/MyContext";
import Header from '../components/Header';
import fetchDrinksCategory from "../services/fetchDrinksCategory";

function Drinks() {
  const { drinks, setCategories } = useContext(Context);
  useEffect(() => {
    fetchDrinksCategory().then((category) => setCategories(category.drinks));
  }, [setCategories]);

  return (
    <div className='allPage'>
      <Header filters='true' pageName='Drinks' />
      <div className="page-content">
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