import styles from "./ImageSection.module.css";
import Verify from "../../Assets/images/verify.svg";
import Img1 from "../../Assets/images/landingImg1.png";
import Img2 from "../../Assets/images/landingImg2.png";
import Img3 from "../../Assets/images/landingImg3.png";

// Image component
const ImageComponent = ({ image, title, text, innerTag }) => {
  const styling = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className={styles.imgComponentDiv}>
      <div style={styling} className={styles.imgDiv}>
        <div className={styles.imgInner}>
          <img src={Verify} alt="img" height="25px" />
          <span>{innerTag}</span>
        </div>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

const ImageSection = () => {
  return (
    <div className={styles.imgContainer}>
      <div className={styles.imgContainerLeft}>
        <ImageComponent
          image={Img1}
          innerTag="Shop Gifts"
          title="Shop from our variety of gifts"
          text="With our wide variety of products, you can choose from a wide range of gifts for your loved ones or business partners. There is a gift available for any ocassion you can think of."
        />
        <ImageComponent
          image={Img2}
          innerTag="Local delivery"
          title="Get gifts delivered to your doorstep"
          text="Order from anywhere in the world and get them delivered to your loved ones at home. For over 50% less than it would cost to ship globally."
        />
      </div>
      <div className={styles.imgContainerRight}>
        <h2>Order globally, ship locally</h2>
        <ImageComponent
          image={Img3}
          innerTag="Send Gifts"
          title="Send gifts to your loved ones from us"
          text="Anyone who receives a gift from Gifts Paddy feels special. We make sure that the gift is received in the most beautiful way possible."
        />
      </div>
    </div>
  );
};

export default ImageSection;
