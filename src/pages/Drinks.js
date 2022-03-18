import React, { useContext } from "react";
import Card from "../components/Card";
import Context from "../context/MyContext";

function Drinks() {
  const { Drinks } = useContext(Context);
  return (
    <div>
      {Drinks.map((e) => (
        <Card
        cardType="drinks"
        id={ e.idDrink }
        name={ e.strDrink }
        strThumb={ e.strDrinkThumb }
        />
      ))}
    </div>
  );
}

export default Drinks;