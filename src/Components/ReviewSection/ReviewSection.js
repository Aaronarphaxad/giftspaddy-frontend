import React from "react";
import styles from "./ReviewSection.module.css";
import { NoDotCarousel } from "../Carousel/Carousel";
import Star from "../../Assets/images/Star 1.png";
import SampleImg from "../../Assets/images/review-img.png";

// Review Component
const ReviewComponent = () => {
  return (
    <div className={styles.reviewCompDiv}>
      <div className={styles.reviewCompTop}>
        <div className={styles.reviewCompTopImgDiv}>
          <img src={SampleImg} alt="star" height="70px" width="70px" />
        </div>
        <div>
          <h4>Amaka Ogechi</h4>
          <p>Lagos, Nigeria</p>
        </div>
      </div>
      <div className={styles.reviewCompMiddle}>
        <h4>Quality Service</h4>
        <div>
          <img src={Star} alt="star" height="13px" width="13px" />
          <span>5</span>
        </div>
      </div>
      <div className={styles.reviewCompBottom}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labLorem ipsum dolor.... more
        </p>
      </div>
    </div>
  );
};

const ReviewSection = () => {
  return (
    <div className={styles.reviewContainer}>
      <h2>WHAT OUR CUSTOMERS SAY</h2>
      <NoDotCarousel>
        <ReviewComponent />
        <ReviewComponent />
        <ReviewComponent />
        <ReviewComponent />
        <ReviewComponent />
        <ReviewComponent />
        <ReviewComponent />
      </NoDotCarousel>
    </div>
  );
};

export default ReviewSection;
