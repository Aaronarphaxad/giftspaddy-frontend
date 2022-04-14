import styles from "./ServicesDropdown.module.css";
import arrow from "../../Assets/images/arrow-right.svg";

export const DropdownLink = ({ item, url, usage }) => {
  const handleClick = () => {
    if (!usage) {
      window.location.pathname = `/services/${url}`;
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
        <DropdownLink item="giftsPaddy special" url="special" />
        <DropdownLink item="secret paddy" url="secret" />
        <DropdownLink item="souvenir" url="souvenir" />
        <DropdownLink item="charity" url="charity" />
        <DropdownLink item="Wishlists/Registry" url="wishlist" />
      </div>
    </div>
  );
};

export default ServicesDropdown;
