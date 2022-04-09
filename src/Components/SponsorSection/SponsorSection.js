import styles from "./SponsorSection.module.css";
import sponsor1 from "../../Assets/images/sponsor1.png";
import sponsor2 from "../../Assets/images/sponsor2.png";
import sponsor3 from "../../Assets/images/sponsor3.png";
import sponsor4 from "../../Assets/images/sponsor4.png";

const SponsorSection = () => {
  return (
    <div className={styles.sponsorContainer}>
      <div>
        <p>Supported by good people at</p>
      </div>
      <div className={styles.sponsorLogoDiv}>
        <img src={sponsor1} alt="sponsor" />
        <img src={sponsor2} alt="sponsor" />
        <img src={sponsor3} alt="sponsor" />
        <img src={sponsor4} alt="sponsor" />
      </div>
    </div>
  );
};

export default SponsorSection;
