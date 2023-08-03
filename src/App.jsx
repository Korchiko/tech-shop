import React from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/Product/ProductList";
import ProductContextProvider from "./Context/ProductContext";
import SearchContextProvider from "./Context/SearchContext";

function App() {
  return (
    <ProductContextProvider>
      <SearchContextProvider>
        <Navbar />
        <ProductList />
      </SearchContextProvider>
    </ProductContextProvider>
  );
}

export default App;
