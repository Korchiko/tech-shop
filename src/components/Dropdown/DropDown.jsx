import React, { useContext, useEffect } from "react";
import DropDownItem from "./DropDownItem";
import classNames from "classnames";
import styles from "./Dropdown.module.css";
const DropDown = ({ products, isOpen }) => {
  return (
    <div
      className={classNames(styles.dropdown, {
        [styles.isOpen]: isOpen && products.length > 0,
      })}
    >
      <div className={styles.dropdownContent}>
        {products.map((product) => (
          <DropDownItem product={product} className={styles.dropdownItem} />
        ))}
      </div>
    </div>
  );
};

export default DropDown;
