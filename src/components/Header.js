import React from 'react';
import profileIcon from '../images/profileIcon.svg';
import { Link } from "react-router-dom";
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';

function Header(props) {
  const { pageName, filters } = props

  return (
    <header>
      <div className='header-top'>
        <Link to='/profile'>
          <input
            type="image"
            data-testid="profile-top-btn"
            src={ profileIcon }
            alt="Foto de perfil"
          />
        </Link>
        <h2>{ pageName }</h2>
        {filters ? (
          <div>
            <SearchBar typeRecipe= { pageName } />
            <Sidebar page={ pageName } />
          </div>
        ): <p/>}
      </div>
    </header>
  );
}

export default Header;