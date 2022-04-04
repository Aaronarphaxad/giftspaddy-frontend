import styles from "./Footer.module.css";
import LogoWhite from "../../Assets/images/logo-white.svg";
import twitter from "../../Assets/images/twitter.svg";
import facebook from "../../Assets/images/facebook.svg";
import instagram from "../../Assets/images/instagram.svg";
import linkedin from "../../Assets/images/linkedin.svg";

const Footer = () => {
  const year = new Date();
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerLeft}>
        <div className={styles.footerLogo}>
          <img src={LogoWhite} alt="logo" />
        </div>
        <div className={styles.socialsDiv}>
          <img
            onClick={() => window.open("https://twitter.com/GiftsPaddy")}
            src={twitter}
            alt="social"
          />
          <img src={facebook} alt="social" />
          <img
            onClick={() => window.open("https://instagram.com/giftspaddy")}
            src={instagram}
            alt="social"
          />
          <img src={linkedin} alt="social" />
        </div>
        <div> © {year.getFullYear()}, Gifts Paddy</div>
      </div>
      <div className={styles.footerRight}>
        <div className={styles.footerLinksColumn}>
          <h3>Information</h3>
          <p>About</p>
          <p>Our Team</p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>
        <div className={styles.footerLinksColumn}>
          <h3>Navigate</h3>
          <p>Services</p>
          <p>Categories</p>
          <p>About Us</p>
          <p>Get Started</p>
        </div>
        <div className={styles.footerLinksColumn}>
          <h3>Top Featured</h3>
          <p>Birthday</p>
          <p>Romance</p>
          <p>Wedding</p>
          <p>Holiday</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
