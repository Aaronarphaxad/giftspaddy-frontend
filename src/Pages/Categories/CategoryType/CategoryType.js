import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./CategoryType.module.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ProductComponent from "../../../Components/FeaturedProducts/ProductComponent/ProductComponent";
import SearchIcon from "../../../Assets/icons/SearchIcon";
import CustomButton from "../../../Components/Button/Button";
import { Link as RouterLink } from "react-router-dom";

const LinkRouter = (props) => <Link {...props} component={RouterLink} />;

const CategoryType = () => {
  const [sort, setSort] = useState("date");
  const { category } = useParams();

  const label = `Search for ${category} gifts`;

  const handleSort = (e) => {
    setSort(e.target.value);
  };
  return (
    <div className={styles.typeContainer}>
      <div className={styles.searchDiv}>
        <div className={styles.search}>
          <SearchIcon />
          <input type="text" placeholder={label} />
          <CustomButton
            bgColor="#058196"
            color="white"
            width="100px"
            height="40px"
          >
            Search
          </CustomButton>
        </div>
        <div className={styles.sort}>
          <p>Sort by</p>
          <select onChange={handleSort} placeholder="Sort by" id="sort-by">
            <option value="date">Date</option>
            <option value="price">Price</option>
            <option value="popularity">Popularity</option>
          </select>
        </div>
      </div>
      <div className={styles.breadcrumbDiv}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <LinkRouter underline="hover" color="inherit" to="/categories">
            Categories
          </LinkRouter>
          <Link underline="hover" color="inherit" href="">
            <span style={{ textTransform: "capitalize" }}>{category}</span>
          </Link>
        </Breadcrumbs>
      </div>
      <div className={styles.productsDiv}>
        <ProductComponent category={category} />
        <ProductComponent category={category} />
        <ProductComponent category={category} />
        <ProductComponent category={category} />
        <ProductComponent category={category} />
        <ProductComponent category={category} />
        <ProductComponent category={category} />
        <ProductComponent category={category} />
        <ProductComponent category={category} />
        <ProductComponent category={category} />
        <ProductComponent category={category} />
        <ProductComponent category={category} />
        <ProductComponent category={category} />
        <ProductComponent category={category} />
        <ProductComponent category={category} />
        <ProductComponent category={category} />
        <ProductComponent category={category} />
      </div>
      <div className={styles.productsBottom}>
        <p>Don't see what you like?</p>
        <p className={styles.productsBottomLink}>Customise your gift</p>
      </div>
    </div>
  );
};

export default CategoryType;
