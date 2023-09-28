import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Button from 'react-bootstrap/Button';

function Explore() {
  const navigate = useNavigate();

  return (
    <div className="allPage">
      <Header filters='false' pageName="Explore" />
      <div className="row text-center">
        <Button
          variant="secondary"
          size="lg"
          data-testid="explore-food-btn"
          onClick={ () => navigate('/explore/foods') }
          className="p-3 m-2"
        >
          Food Explorer
        </Button>
        <Button
          variant="secondary"
          size="lg"
          className="p-3 m-2"
          data-testid="explore-drink-btn"
          onClick={ () => navigate('/explore/drinks') }
        >
          Drink Explorer
        </Button>
      </div>
      <Footer />
    </div>
  );
}

export default Explore;
