import React from "react";
import Product from "../Product/Product";

const DropDownItem = ({ product, className }) => {
  return <Product {...product} className={className} />;
};

export default DropDownItem;
