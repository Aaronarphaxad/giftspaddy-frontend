import styles from "./About.module.css";
import FAQSection from "../../Components/FAQSection/FAQSection";
import VideoSection from "../../Components/VideoSection/VideoSection";
import WhatWeProvide from "../../Components/WhatWeProvide/WhatWeProvide";

const About = () => {
  return (
    <div className="">
      <div className={styles.topSection}>
        <div className={styles.left}>
          <h2>About us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
            Quis ipsum suspendisse. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Quis ipsum suspendisse. <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse.
          </p>
        </div>
        <div className={styles.right}></div>
      </div>
      <WhatWeProvide />
      <VideoSection />
      <FAQSection />
    </div>
  );
};

export default About;
