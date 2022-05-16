import styles from "./SponsorSection.module.css";

const SponsorSection = () => {
  return (
    <div className={styles.sponsorContainer}>
      <div>
        <p>Supported by good people at</p>
      </div>
      <div className={styles.sponsorLogoDiv}>
        <img
          className="lazyload"
          data-src={
            "https://res.cloudinary.com/gifts-paddy/image/upload/v1651773217/sponsor1_i4qw0s.png"
          }
          alt="sponsor"
        />
        <img
          className="lazyload"
          data-src={
            "https://res.cloudinary.com/gifts-paddy/image/upload/v1651773217/sponsor2_lpxo0m.png"
          }
          alt="sponsor"
        />
        <img
          className="lazyload"
          data-src={
            "https://res.cloudinary.com/gifts-paddy/image/upload/v1651773217/sponsor3_pwbaeg.png"
          }
          alt="sponsor"
        />
        <img
          className="lazyload"
          data-src={
            "https://res.cloudinary.com/gifts-paddy/image/upload/v1651773218/sponsor4_yckme4.png"
          }
          alt="sponsor"
        />
      </div>
    </div>
  );
};

export default SponsorSection;
