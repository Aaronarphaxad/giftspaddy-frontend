import CustomButton from "../../Button/Button";
import styles from "./ProductComponent.module.css";
import FeatureImg from "../../../Assets/images/featured-img.png";
import { useNavigate } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";

const ProductComponent = ({ image, title, price, category }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const mobile = window.innerWidth <= 500;
  console.log(mobile);

  const styling = {
    backgroundImage: `url(${FeatureImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const handleClick = (e) => {
    navigate(`/categories/${category}/1`);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <div style={{ width: "220px" }}>
          <Box sx={{ pt: 0.5 }}>
            <Skeleton variant="rectangular" width={"90%"} height={118} />
            <Skeleton width="70%" />
            <Skeleton width="60%" />
            <Skeleton width="90%" />
          </Box>{" "}
        </div>
      ) : (
        <div className={styles.featureContainer}>
          <div style={styling} className={styles.featureImg}></div>
          <div className={styles.featureDetails}>
            <p onClick={() => handleClick("Lorem Ipsum")}>Lorem Ipsum</p>
            <p>$ 400</p>
          </div>
          <div
            // onMouseOver={() => setShowButton(true)}
            // onMouseLeave={() => setShowButton(false)}
            className={styles.btnDiv}
          >
            <CustomButton width={"100%"} height={"45px"}>
              Add to Cart
            </CustomButton>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductComponent;
