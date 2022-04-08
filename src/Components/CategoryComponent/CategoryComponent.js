import { Link } from "react-router-dom";
import styles from "./CategoryComponent.module.css";

const CategoryComponent = ({ url, gif, category, link }) => {
  return (
    <>
      <div className={styles.categoryContainer}>
        {url && (
          <iframe
            title="category"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            src={url}
          ></iframe>
        )}
        {gif && <img src={gif} alt="gif" />}
        <p>{category}</p>
      </div>
    </>
  );
};

export default CategoryComponent;
