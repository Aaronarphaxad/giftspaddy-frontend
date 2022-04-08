import React from "react";
import { DotCarouselAutoplay } from "../Carousel/Carousel";
import FeatureComponent from "./FeatureComponent/FeatureComponent";

import styles from "./FeaturedProducts.module.css";

const FeaturedProducts = () => {
  return (
    <div className={styles.featureContainer}>
      <h2>FEATURED PRODUCTS</h2>
      <DotCarouselAutoplay>
        <FeatureComponent />
        <FeatureComponent />
        <FeatureComponent />
        <FeatureComponent />
        <FeatureComponent />
        <FeatureComponent />
        <FeatureComponent />
        <FeatureComponent />
      </DotCarouselAutoplay>
    </div>
  );
};

export default FeaturedProducts;
