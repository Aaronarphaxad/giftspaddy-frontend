import { useEffect, useState } from "react";
import styles from "./Categories.module.css";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";
import { CategoryData } from "../../Data/CategoryData";
import CategoryComponent from "../../Components/CategoryComponent/CategoryComponent";
import CategorySection from "../../Components/CategorySection/CategorySection";

const Categories = () => {
  const mobile = window.innerWidth <= 500;

  return (
    <div className={styles.categoryContainer}>
      {!mobile && <h1 className={styles.header}>Shop by Category</h1>}
      {!mobile && (
        <div className={styles.categoryTypes}>
          {CategoryData.map((data) => (
            <CategoryComponent
              url={data.url}
              category={data.category}
              gif={data.gif}
            />
          ))}
        </div>
      )}
      {mobile && <CategorySection />}
      <FeaturedProducts />
    </div>
  );
};

export default Categories;
