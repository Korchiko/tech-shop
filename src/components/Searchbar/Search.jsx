import React, { useContext } from "react";
import { BiSearch } from "react-icons/bi";
import "./search.css";
import { SearchContext } from "../../Context/SearchContext";

const Search = () => {
  const { searchParam, setSearchParam } = useContext(SearchContext);

  const handleSearch = (e) => {
    setSearchParam(e.target.value);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    console.log("Aranan ürün:", searchParam);
  };

  return (
    <div className="container">
      <form className="search-bar" onSubmit={handleSearchClick}>
        <input
          className="input"
          type="text"
          placeholder="Aradığınız ürün ve kategori."
          value={searchParam}
          onChange={handleSearch}
        />
        <button className="btn" type="submit">
          <BiSearch size={20} style={{ fill: "black", borderRadius: "50%" }} />
        </button>
      </form>
    </div>
  );
};

export default Search;
