import { useState } from "react";
import styles from "./ProductPage.module.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Rating from "@mui/material/Rating";
import Link from "@mui/material/Link";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import FeatureImg from "../../Assets/images/featured-img.png";
import Stack from "@mui/material/Stack";
import CustomButton from "../../Components/Button/Button";
import ProductAccordion from "./ProductAccordion/ProductAccordion";
import ProductComponent from "../../Components/FeaturedProducts/ProductComponent/ProductComponent";
import ConversationIcon from "../../Assets/icons/Conversation";
import Checkbox from "@mui/material/Checkbox";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../Cart/redux/cartSlice";

const LinkRouter = (props) => <Link {...props} component={RouterLink} />;

const ProductPage = () => {
  const { category } = useParams();
  const { id } = useParams();
  const cartList = useSelector((state) => state.cart.cartList);
  const dispatch = useDispatch();
  const [favourite, setFavorite] = useState(false);

  console.log(cartList);

  const handleAddToCart = () => {
    const added = cartList.find((product) => product.id === category + id);
    dispatch(
      addToCart({
        id: category + id,
        title: "Special Hamper",
        image: "",
        description:
          "This is a special hamper for {category}, made with love from naija! Packed with gourmet products of the highest quality. People love this.",
        price: 400,
      })
    );
  };

  const handleFavourite = (event) => {
    setFavorite(event.target.checked);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className={styles.productContainer}>
      <div className={styles.breadcrumbsDiv}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <LinkRouter underline="hover" color="inherit" to="/categories">
            Categories
          </LinkRouter>
          {category !== "undefined" && (
            <LinkRouter
              underline="hover"
              color="inherit"
              to={`/category/${category}`}
            >
              <span style={{ textTransform: "capitalize" }}>{category}</span>
            </LinkRouter>
          )}
          <Link underline="none" color="inherit">
            Product
          </Link>
        </Breadcrumbs>
      </div>
      <div className={styles.infoDiv}>
        <div className={styles.infoLeft}>
          <div className={styles.infoLeftTop}>
            <img src={FeatureImg} alt="productimage" />
          </div>
          <div className={styles.infoLeftBottom}>
            <div className={styles.addCartBtnDiv}>
              <button className={styles.addCartBtn}>-</button>
              <span>03</span>
              <button className={styles.addCartBtn}>+</button>
            </div>
          </div>
        </div>
        <div className={styles.infoRight}>
          <div className={styles.infoRightTop}>
            <h1>Special Hamper</h1>
            <p>
              This is a special hamper for {category}, made with love from
              naija! Packed with gourmet products of the highest quality. People
              love this.
            </p>
          </div>
          <div className={styles.infoRightMiddle}>
            <div className="d-flex align-items-center gap-3">
              <p className={styles.price}>$1,200</p>
              <p className={styles.priceBefore}>$1,350</p>
            </div>
            <div className="d-flex align-items-center w-100">
              <Rating name="read-only" value={4} readOnly />
              <span className="mx-2 pointer">50 Reviews</span>
              <Checkbox
                checked={favourite}
                onChange={handleFavourite}
                inputProps={{ "aria-label": "controlled" }}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
              />
            </div>
          </div>
          <div className={styles.infoRightBottom}>
            <Stack spacing={2} direction="row">
              <CustomButton
                bgColor="#058196"
                color="white"
                height="45px"
                width="100%"
                onClick={handleAddToCart}
              >
                ADD TO CART
              </CustomButton>
            </Stack>
          </div>
        </div>
      </div>
      <div className={styles.detailsDiv}>
        <div className={styles.detailsLeft}>
          <h3>People also like</h3>
          <hr />
          <div className={styles.detailsLeftRow}>
            <div className={styles.detailsLeftRowInner}>
              <ProductComponent category={category} />
              <ProductComponent category={category} />
              <ProductComponent category={category} />
              <ProductComponent category={category} />
              <ProductComponent category={category} />
              <ProductComponent category={category} />
            </div>
          </div>
        </div>
        <div className={styles.detailsRight}>
          <ProductAccordion />
        </div>
      </div>
      <div className={styles.reviewsDiv}>
        <div className={styles.reviewsTop}>
          <h3>Customer Reviews</h3>
          <span>SEE ALL {">"}</span>
        </div>
        <hr />
        <div className={styles.reviewsBody}>
          <ConversationIcon />
          <p>Customer Reviews on this product will appear here</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
