import React, { useContext } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Context from "../context/MyContext";

function Drinks() {
  const { Drinks } = useContext(Context);
  return (
    <div className="page-content">
      {Drinks.slice(0, 12).map((e) => (
        <Card
        cardType="drinks"
        id={ e.idDrink }
        name={ e.strDrink }
        strThumb={ e.strDrinkThumb }
        />
      ))}
      <Footer />
    </div>
  );
}

export default Drinks;