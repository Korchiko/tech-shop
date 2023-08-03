import React, { createContext, useState } from "react";

const SearchContextProvider = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");

  return (
    <SearchContext.Provider value={{ searchParam, setSearchParam }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;

export const SearchContext = createContext();
