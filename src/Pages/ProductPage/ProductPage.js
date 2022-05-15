import { useState } from "react";
import styles from "./ProductPage.module.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Rating from "@mui/material/Rating";
import Link from "@mui/material/Link";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import CustomButton from "../../Components/Button/Button";
import ProductAccordion from "./ProductAccordion/ProductAccordion";
import ProductComponent from "../../Components/FeaturedProducts/ProductComponent/ProductComponent";
import ConversationIcon from "../../Assets/icons/Conversation";
import Checkbox from "@mui/material/Checkbox";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  increaseQuantity,
  reduceQuantity,
} from "../Cart/redux/cartSlice";
import toast, { Toaster } from "react-hot-toast";

const LinkRouter = (props) => <Link {...props} component={RouterLink} />;

const ProductPage = () => {
  const { category } = useParams();
  const { id } = useParams();
  const cartList = useSelector((state) => state.cart.cartList);
  const dispatch = useDispatch();
  const [favourite, setFavorite] = useState(false);
  const [deliveryDetails, setDeliveryDetails] = useState("");
  const cartObject = cartList.find((product) => product.id === category + id);

  const handleAddToCart = () => {
    if (deliveryDetails) {
      dispatch(
        addToCart({
          id: category + id,
          title: "Special Hamper",
          image: "",
          quantity: 1,
          description:
            "This is a special hamper for {category}, made with love from naija! Packed with gourmet products of the highest quality. People love this.",
          price: 400,
          deliveryDetails: deliveryDetails,
        })
      );
      notifySuccess();
    }
    if (!deliveryDetails) {
      notifyError();
      return;
    }
  };

  const handleReduceQuantity = () => {
    dispatch(reduceQuantity(category + id));
  };
  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(category + id));
  };

  const handleFavourite = (event) => {
    setFavorite(event.target.checked);
  };

  const notifyError = (msg) =>
    toast.error(
      msg ? msg : "Please enter address, phone number and delivery date",
      {
        position: "top-center",
        duration: 3000,
      }
    );
  const notifySuccess = () =>
    toast.success(`Added to cart`, {
      position: "top-center",
      duration: 3000,
    });

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      <Toaster />
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
              <img
                src={
                  "https://res.cloudinary.com/gifts-paddy/image/upload/v1651773208/featured-img_siaqbe.png"
                }
                alt="productimage"
              />
            </div>
            <div className={styles.infoLeftBottom}>
              {cartList.find((product) => product.id === category + id) ? (
                <div className={styles.addCartBtnDiv}>
                  <button
                    onClick={handleReduceQuantity}
                    className={styles.addCartBtn}
                  >
                    -
                  </button>
                  <span>{cartObject.quantity}</span>
                  <button
                    onClick={handleIncreaseQuantity}
                    className={styles.addCartBtn}
                  >
                    +
                  </button>
                </div>
              ) : null}
            </div>
          </div>
          <div className={styles.infoRight}>
            <div className={styles.infoRightTop}>
              <h1>Special Hamper</h1>
              <p>
                This is a special hamper for {category}, made with love from
                naija! Packed with gourmet products of the highest quality.
                People love this.
              </p>
            </div>
            <div className={styles.infoRightMiddle}>
              <div className="d-flex align-items-center gap-3">
                <p className={styles.price}>$1,200</p>
                <p className={styles.priceBefore}>$1,350</p>
              </div>
              <div className="d-flex align-items-center w-100">
                <Rating name="read-only" value={4} readOnly />
                <span className="mx-2 pointer">
                  <a href="#reviews-section">50 Reviews</a>
                </span>
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
                  disabled={cartList.find(
                    (product) => product.id === category + id
                  )}
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
            <div className="d-flex align-items-center justify-content-between px-2">
              <h3>You may also like</h3>
              <div className="d-flex align-items-center gap-2"></div>
            </div>
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
            <ProductAccordion setDeliveryDetails={setDeliveryDetails} />
          </div>
        </div>
        {/* <section> */}
        <div id="reviews-section" className={styles.reviewsDiv}>
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
        {/* </section> */}
      </div>
    </>
  );
};

export default ProductPage;
