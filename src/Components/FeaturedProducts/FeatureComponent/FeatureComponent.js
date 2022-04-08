import CustomButton from "../../Button/Button";
import styles from "./FeatureComponent.module.css";
import FeatureImg from "../../../Assets/images/featured-img.png";

const FeatureComponent = ({ image, title, price }) => {
  const styling = {
    backgroundImage: `url(${FeatureImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className={styles.featureContainer}>
      <div style={styling} className={styles.featureImg}></div>
      <div className={styles.featureDetails}>
        <p>Lorem Ipsum</p>
        <p>$400</p>
      </div>

      <CustomButton width={"100%"} height={"50px"}>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default FeatureComponent;
