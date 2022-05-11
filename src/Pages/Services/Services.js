import styles from "./Services.module.css";
import LearnArrow from "../../Assets/images/learn-arrow-white.png";
import { Link } from "react-router-dom";

const ServiceComponent = ({ invert, rightColor, image, service, url }) => {
  const styling = {
    flexDirection: invert ? "row-reverse" : "row",
  };

  const rightStyling = {
    backgroundColor: rightColor,
  };

  return (
    <div style={styling} className={styles.serviceComponent}>
      <div className={styles.left}>
        <div className={styles.leftText}>
          <h3>{service}</h3>
          <Link to={`/services/${url}`}>
            <div className={styles.learn}>
              <span>Learn more</span>{" "}
              <span>
                <img
                  style={{ marginLeft: "10px" }}
                  src={LearnArrow}
                  alt="arrow"
                  height="10px"
                />
              </span>
            </div>
          </Link>
        </div>
        <div className={styles.leftImage}>
          <img src={image} alt="hamper" height="100%" width="60%" />
        </div>
      </div>
      <div style={rightStyling} className={styles.right}>
        <h3>{service}</h3>
        <Link to={`/services/${url}`}>
          <div className={styles.learn}>
            <span>Learn more</span>{" "}
            <span>
              <img
                style={{ marginLeft: "10px" }}
                src={LearnArrow}
                alt="arrow"
                height="10px"
              />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className={styles.servicesContainer}>
      <ServiceComponent
        rightColor="#FFC77E"
        image={
          "https://res.cloudinary.com/gifts-paddy/image/upload/v1651773209/hamper_t0zih0.png"
        }
        service="Gifts Paddy Special"
        url="special"
      />
      <ServiceComponent
        rightColor="#D91448"
        image={
          "https://res.cloudinary.com/gifts-paddy/image/upload/v1651773218/secret-gift_yv9szd.png"
        }
        invert={true}
        service="Secret Paddy"
        url="secret"
      />
      <ServiceComponent
        rightColor="#058196"
        image={
          "https://res.cloudinary.com/gifts-paddy/image/upload/v1651773209/hamper_t0zih0.png"
        }
        service="Souvenir"
        url="souvenir"
      />
      <ServiceComponent
        rightColor="#592E59"
        image={
          "https://res.cloudinary.com/gifts-paddy/image/upload/v1651773209/hamper_t0zih0.png"
        }
        invert={true}
        service="Charity"
        url="charity"
      />
      <ServiceComponent
        rightColor="#000"
        image={
          "https://res.cloudinary.com/gifts-paddy/image/upload/v1651773209/hamper_t0zih0.png"
        }
        service="Wishlist/Registry"
        url="wishlist"
      />
    </div>
  );
};

export default Services;
