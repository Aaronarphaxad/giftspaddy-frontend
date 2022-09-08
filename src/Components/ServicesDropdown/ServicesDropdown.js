import styles from "./ServicesDropdown.module.css";
import arrow from "../../Assets/images/arrow-right.svg";
import { useNavigate } from "react-router-dom";

export const DropdownLink = ({ item, url, usage, live }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!usage && live) {
      window.location.pathname = `/services/${url}`;
    }

    if (!live) {
      return;
    }

    if (url === "others" && usage === "category") {
      navigate("/categories");
    } else {
      navigate(`/category/${url}`);
    }
  };
  return (
    <div onClick={handleClick} className={styles.dropdownRow}>
      <div>
        <p>{item}</p>
      </div>
      <div>
        <img src={arrow} alt="arrow" height="10px" />
      </div>
      {!live && !usage && <span className={styles.soon}>coming soon</span>}
    </div>
  );
};

const ServicesDropdown = ({
  servicesDropdownOpen,
  setServicesDropdownOpen,
}) => {
  const styling = {
    height: servicesDropdownOpen ? "225px" : "0",
  };
  return (
    <div style={styling} className={styles.serviceDropdown}>
      <div className={styles.serviceLeft}>
        <h3>Services</h3>
        <p>Gifts Paddy services that you can rely on.</p>
      </div>
      <div className={styles.serviceRight}>
        <DropdownLink item="giftsPaddy special" url="special" live={true} />
        <DropdownLink item="secret paddy" url="secret" live={true} />
        <DropdownLink item="souvenir" url="souvenir" live={false} />
        <DropdownLink item="charity" url="charity" live={false} />
        <DropdownLink item="Wishlists/Registry" url="wishlist" live={false} />
      </div>
    </div>
  );
};

export default ServicesDropdown;
