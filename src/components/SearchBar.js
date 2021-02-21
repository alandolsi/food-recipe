import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  let history = useHistory();

  const toSearchPage = () => {
    history.push(`/search/q=${search}`);
  };

  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <>
      <nav>
        <div className="nav-wrapper brown darken-2">
          <div className="container">
            <Link to="/" className="brand-logo">
              <span>Matty Recipes</span>
            </Link>
            <Link to="/" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </Link>
            <ul className="right hide-on-med-and-down">
              <li>
                <form onSubmit={toSearchPage}>
                  <input
                    className="input-field"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search for a Meal..."
                  />
                </form>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Ingredients</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Ingredients</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </>
  );
};

export default SearchBar;
// show-on-medium-and-up
// hide-on-med-and-down
