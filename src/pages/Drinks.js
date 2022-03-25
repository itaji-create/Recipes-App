import React, { useContext, useEffect } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Context from "../context/MyContext";
import Header from '../components/Header';
import fetchDrinks from "../services/fetchDrinks";

function Drinks() {
  const { Drinks, setDrinks } = useContext(Context);
  useEffect(() => {
    fetchDrinks().then((data) => setDrinks(data))
  }, [setDrinks]);
  return (
    <div className='allPage'>
      <Header pageName='Drinks' />
      <div className="page-content">
        {Drinks.slice(0, 12).map((e) => (
          <Card
            key={ e.idDrink }
            cardType="drinks"
            id={ e.idDrink }
            name={ e.strDrink }
            strThumb={ e.strDrinkThumb }
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Drinks;