import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Button from 'react-bootstrap/Button';

function Explore() {
  return (
    <div className="allPage">
      <Header filters='false' pageName="Explore" />
      <div>
        <Link to="/explore/foods">
          <Button
            variant="secondary"
            size="lg"
            data-testid="explore-food-btn"
          >
            Food Explorer
          </Button>
        </Link>
        <Link to="/explore/drinks">
          <Button
            variant="secondary"
            size="lg"
            data-testid="explore-drink-btn"
          >
            Drink Explorer
          </Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Explore;
