import React, { useContext, useState } from "react";
import Search from "../Searchbar/Search";

import styles from "./navbar.module.css";
import { ProductContext } from "../../Context/ProductContext";
import DropDown from "../Dropdown/DropDown";

const Navbar = () => {
  const { products } = useContext(ProductContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.navbar}>
      <Search />
      <div className={styles.dropdownContainer}>
        <button
          className={styles.dropdownButton}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Ürünleriniz: {products.length}
        </button>
        <DropDown products={products} isOpen={isOpen} />
      </div>
    </div>
  );
};

export default Navbar;
