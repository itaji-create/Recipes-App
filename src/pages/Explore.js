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
          >
            <img width={ '147px' } alt="Food Explorer" src={require('../images/explorer-food.jpg')} />
          </button>
        </Link>
        <Link to="/explore/drinks">
          <button
            type="button"
            className="explorer-item"
          >
            <img width={ '140px' } alt="Drink Explorer" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdGHRKOvyNolPLTsyVV2lbYdITSPnMI8ff3Q&usqp=CAU" />
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Explore;