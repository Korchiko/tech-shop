import React, { createContext, useState } from "react";

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  console.log(products);
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;

export const ProductContext = createContext();
