import CustomButton from "../../Button/Button";
import styles from "./ProductComponent.module.css";
import { Link, useNavigate } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../../Pages/Cart/redux/cartSlice";

const ProductComponent = ({ image, title, price, category }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const mobile = window.innerWidth <= 500;

  const styling = {
    backgroundImage: `url(${"https://res.cloudinary.com/gifts-paddy/image/upload/v1651773208/featured-img_siaqbe.png"})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: 1,
        title: "Special Hamper",
        image: "",
        quantity: 1,
        description:
          "This is a special hamper for {category}, made with love from naija! Packed with gourmet products of the highest quality. People love this.",
        price: 400,
      })
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="d-flex flex-column" style={{ width: "220px" }}>
          <Box sx={{ pt: 0.5 }}>
            <Skeleton variant="rectangular" width={"90%"} height={150} />
            <Skeleton width="70%" />
            <Skeleton width="60%" />
            <Skeleton width="90%" />
          </Box>{" "}
        </div>
      ) : (
        <div className={styles.featureContainer}>
          <div style={styling} className={styles.featureImg}></div>
          <div className={styles.featureDetails}>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={category ? `/categories/${category}/2` : "/categories/gift/1"}
            >
              <p style={{ color: "black" }}>Lorem Ipsum</p>
            </Link>
            <p>$ 400</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductComponent;
