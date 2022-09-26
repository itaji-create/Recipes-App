import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Profile() {
  return (
    <div>
      <Header filters='false' pageName="Profile"/>
      <div className="page-content">
        <Link to="/done-recipes">
            <button
            type="button"
            >
            Done Recipes
            </button>
        </Link>
        <Link to="/favorite-recipes">
            <button>
            Favorite Recipes
            </button>
        </Link>
        <Link to="/">
            <button>
            Logout
            </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;