import React, { useContext } from "react";
import styles from "./product.module.css";
import { ProductContext } from "../../Context/ProductContext";
import classNames from "classnames";
const Product = (props) => {
  const { name, imageSource, price, className } = props;
  const { products, setProducts } = useContext(ProductContext);

  const isProductInCart = products.some((product) => product.id === props.id);

  const handleAddToCart = () => {
    if (isProductInCart) {
      setProducts((prev) => prev.filter((product) => product.id !== props.id));
    } else {
      setProducts((prev) => [...prev, props]);
    }
  };

  return (
    <div className={classNames(styles.productAll, className)}>
      <div className={styles.imageContainer}>
        <img className={styles.productImage} src={imageSource} alt="" />
      </div>
      <h2 className={styles.productText}>{name}</h2>
      <h3 className={styles.productPrice}>{price}</h3>
      <button className={styles.productButton} onClick={handleAddToCart}>
        {isProductInCart ? "Sepetten Çıkar" : "Sepete Ekle"}
      </button>
    </div>
  );
};

export default Product;
