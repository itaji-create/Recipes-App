import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Explore() {
  return (
    <div className="allPage">
      <Header pageName="Explore" />
      <div>
        <Link to="/explore/foods">
          <button
            type="button"
            className="explorer-item"
            data-testid="explore-food-btn"
          >
            Food Explorer
          </button>
        </Link>
        <Link to="/explore/drinks">
          <button
            type="button"
            className="explorer-item"
            data-testid="explore-drink-btn"
          >
            Drink Explorer
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Explore;