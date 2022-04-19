import React from "react";
import { DotCarouselAutoplay } from "../Carousel/Carousel";
import ProductComponent from "./ProductComponent/ProductComponent";

import styles from "./FeaturedProducts.module.css";

const FeaturedProducts = () => {
  return (
    <div className={styles.featureContainer}>
      <h2>FEATURED PRODUCTS</h2>
      <DotCarouselAutoplay>
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
      </DotCarouselAutoplay>
    </div>
  );
};

export default FeaturedProducts;
