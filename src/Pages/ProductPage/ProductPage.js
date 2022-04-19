import styles from "./ProductPage.module.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Rating from "@mui/material/Rating";
import Link from "@mui/material/Link";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import FeatureImg from "../../Assets/images/featured-img.png";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import CustomButton from "../../Components/Button/Button";
import ProductAccordion from "./ProductAccordion/ProductAccordion";
import {
  CustomCarousel,
  CustomCarousel2,
  NoDotCarousel,
} from "../../Components/Carousel/Carousel";
import ProductComponent from "../../Components/FeaturedProducts/ProductComponent/ProductComponent";
import ConversationIcon from "../../Assets/icons/Conversation";

const LinkRouter = (props) => <Link {...props} component={RouterLink} />;

const ProductPage = () => {
  const { category } = useParams();
  const { id } = useParams();
  const navigate = useNavigate();

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
            <p className={styles.price}>$1,200</p>
            <div className="d-flex align-items-center w-100">
              <Rating name="read-only" value={4} readOnly />
              <span className="mx-2">50 Reviews</span>
            </div>
          </div>
          <div className={styles.infoRightBottom}>
            <Stack spacing={2} direction="row">
              <CustomButton
                bgColor="#058196"
                color="white"
                height="45px"
                width="130px"
              >
                BUY NOW
              </CustomButton>
              <Button variant="outlined">
                <span style={{ color: "#058196", fontFamily: "sans-serif" }}>
                  Add to Cart
                </span>
              </Button>
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
          <p>Customers Reviews will appear here</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
