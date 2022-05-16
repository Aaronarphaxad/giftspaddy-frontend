import styles from "./ImageSection.module.css";

// Image component
const ImageComponent = ({ image, title, text, innerTag }) => {
  // const styling = {
  //   backgroundImage: `url(${image})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   backgroundRepeat: "no-repeat",
  // };
  return (
    <div className={styles.imgComponentDiv}>
      <div className={styles.imgDiv}>
        <img
          id={styles.imgCover}
          data-src={image}
          alt="img"
          className="lazyload"
          // height="25px"
        />
        <div className={styles.imgInner}>
          <img
            data-src={
              "https://res.cloudinary.com/gifts-paddy/image/upload/v1651773218/verify_guc9al.svg"
            }
            alt="img"
            className="lazyload"
            height="25px"
          />
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
          image={
            "https://res.cloudinary.com/gifts-paddy/image/upload/v1651843672/landingImg1_zoxwph.png"
          }
          innerTag="Shop Gifts"
          title="Shop from our variety of gifts"
          text="With our wide variety of products, you can choose from a wide range of gifts for your loved ones or business partners. There is a gift available for any ocassion you can think of."
        />
        <ImageComponent
          image={
            "https://res.cloudinary.com/gifts-paddy/image/upload/v1651843672/landingImg2_ukiw7g.png"
          }
          innerTag="Local delivery"
          title="Get gifts delivered to your doorstep"
          text="Order from anywhere in the world and get them delivered to your loved ones at home. For over 50% less than it would cost to ship globally."
        />
      </div>
      <div className={styles.imgContainerRight}>
        <h2>Order globally, ship locally</h2>
        <ImageComponent
          image={
            "https://res.cloudinary.com/gifts-paddy/image/upload/v1651843673/landingImg3_obnyom.png"
          }
          innerTag="Send Gifts"
          title="Send gifts to your loved ones from us"
          text="Anyone who receives a gift from Gifts Paddy feels special. We make sure that the gift is received in the most beautiful way possible."
        />
      </div>
    </div>
  );
};

export default ImageSection;
