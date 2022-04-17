import { Link } from "react-router-dom";
import styles from "./CategoryComponent.module.css";
import { useNavigate } from "react-router-dom";

const CategoryComponent = ({ url, gif, category }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => navigate(`/category/${url}`)}
        className={styles.categoryContainer}
      >
        {gif && <img src={gif} alt="gif" />}
        <p>{category}</p>
      </div>
    </>
  );
};

export default CategoryComponent;
