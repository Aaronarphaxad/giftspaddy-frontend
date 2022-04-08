import { CategoryData } from "../../Data/CategoryData";
import { CustomCarousel } from "../Carousel/Carousel";
import CategoryComponent from "../CategoryComponent/CategoryComponent";
import styles from "./CategorySection.module.css";

const CategorySection = () => {
  return (
    <div className={styles.category}>
      <h3>CATEGORIES</h3>
      <div className={styles.categoryInner}>
        <CustomCarousel>
          {CategoryData.map((data) => (
            <CategoryComponent
              key={data.id}
              category={data.category}
              url={data.url}
              gif={data.gif}
            />
          ))}
        </CustomCarousel>
      </div>
    </div>
  );
};

export default CategorySection;
