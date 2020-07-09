import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Searcher = () => {
  const location = useLocation();
  const [search, setSearch] = useState(
    location.search.length > 8 ? `${location.search.substr(8, 50)}` : ""
  );

  return (
    <div className="searcher">
      <i className="large material-icons search-icon">search</i>
      <input
        className="searcher__input"
        value={search}
        type="text"
        placeholder="Airline, destination or flight #"
        onChange={(event) => setSearch(event.target.value)}
      ></input>
      <Link to={`${location.pathname}?search=${search}`}>
        <button className="searcher__button">Search</button>
      </Link>
    </div>
  );
};

export default Searcher;
