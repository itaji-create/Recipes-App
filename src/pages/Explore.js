import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Explore() {
  return (
    <div className="allPage">
      <Header pageName="Explore" />
      <div className="explorer-buttons">
        <Link to="/explore/foods">
          <button
            type="button"
            className="profile-item"
          >
            Explore Foods
          </button>
        </Link>
        <Link to="/explore/drinks">
          <button
            type="button"
            className="profile-item"
          >
            Explore Drinks
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Explore;