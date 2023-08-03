import React, { useContext, useMemo } from "react";
import Product from "./Product";
import { ProductContext } from "../../Context/ProductContext";
import { SearchContext } from "../../Context/SearchContext";
import styles from "./product.module.css";

const ProductList = () => {
  const { searchParam } = useContext(SearchContext);

  const { products } = useContext(ProductContext);
  const filteredProducts = useMemo(
    () =>
      productsList
        .filter((product) => {
          return !products.find((p) => p.id === product.id);
        })
        .filter((product) =>
          product.name.toLowerCase().includes(searchParam.toLowerCase())
        ),
    [products, searchParam]
  );
  return (
    <div className={styles.product}>
      {filteredProducts.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;

const productsList = [
  {
    id: 1,
    imageSource:
      "https://assets2.razerzone.com/images/pnx.assets/a54bdf79abdfc0d42a0fff19047725a3/deathstalker-v2-pro_500x500.png",
    name: "Razer BlackWidowX V3 -  Mekanik Oyun Klavyesi",
    price: "2000 €",
  },
  {
    id: 2,
    imageSource:
      "https://media.prod.bunnings.com.au/api/public/content/ca3e2421cbeb4552b8e3c086ec5aa57d?v=ab294d9a&t=w500dpr1",
    name: "Razer BlackWidowY V4 - Mekanik Oyun Klavyesi",
    price: "4000 €",
  },
  {
    id: 3,
    imageSource:
      "https://assets2.razerzone.com/images/pnx.assets/b8457826cace5062571d7dc8f8f7fc58/blackwidow-v3-mini-hyperspeed-500x500.png",
    name: "Razer Prime Mini V2 - Mekanik Oyun Klavyesi",
    price: "3000 €",
  },
  {
    id: 4,
    imageSource:
      "https://assets3.razerzone.com/2HMZZ4S4-umsPV-be3DBV6Ubrog=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh5b%2Fh37%2F9171072090142%2Forochi-v2-black-500x500.png",
    name: "Razer DeathAdder Mini V2 - Oyuncu Mouse",
    price: "1500 €",
  },
  {
    id: 5,
    imageSource:
      "https://assets2.razerzone.com/images/da10m/carousel/razer-death-adder-gallery-28.png",
    name: "Razer Crime - Oyuncu Mouse",
    price: "1100 €",
  },
  {
    id: 6,
    imageSource:
      "https://www.gamesworldegypt.com/image/cache/catalog/gamesworldegypt/Raz/RazerBasiliskV3-500x500.png",
    name: "Razer Bounty - Oyuncu Mouse",
    price: "900 €",
  },
  {
    id: 7,
    imageSource:
      "https://assets.razerzone.com/eeimages/support/products/695/695_manowar.png",
    name: "Razer Tiny - Oyuncu Kulaklığı",
    price: "560 €",
  },
  {
    id: 8,
    imageSource:
      "https://assets.razerzone.com/eeimages/support/products/566/566_kraken_xbox_one.png",
    name: "Razer Terorblade - Oyuncu Kulaklığı",
    price: "900 €",
  },
  {
    id: 9,
    imageSource:
      "https://www.coastalmusic.com.au/assets/thumbL/3759.png?20220329110855",
    name: "Razer InvokerXL - Oyuncu Kulaklığı ",
    price: "1600 €",
  },
];
