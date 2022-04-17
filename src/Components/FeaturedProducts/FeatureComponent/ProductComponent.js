import CustomButton from "../../Button/Button";
import styles from "./ProductComponent.module.css";
import FeatureImg from "../../../Assets/images/featured-img.png";
import { useNavigate } from "react-router-dom";

const ProductComponent = ({ image, title, price }) => {
  const navigate = useNavigate();
  const styling = {
    backgroundImage: `url(${FeatureImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const handleClick = (e) => {
    // navigate("/product");
  };
  return (
    <div className={styles.featureContainer}>
      <div style={styling} className={styles.featureImg}></div>
      <div className={styles.featureDetails}>
        <p onClick={() => handleClick("title")}>Lorem Ipsum</p>
        <p>$ 400</p>
      </div>

      <CustomButton width={"100%"} height={"45px"}>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default ProductComponent;
