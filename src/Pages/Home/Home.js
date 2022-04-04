import styles from "./Home.module.css";
import HomeIllustration from "../../Assets/images/header-illustration.png";
import CustomButton from "../../Components/Button/Button";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import DateTimePicker from "react-datetime-picker";

// TOP SECTION
const TopSection = () => {
  const mobile = window.innerWidth < 768;
  return (
    <div className={styles.mainContainer}>
      <div className={styles.left}>
        <h1>Gifting is the New Normal </h1>
        <p>
          We deliver worldwide wherever your loved ones are we can get to them
          with your gifts from our store.
        </p>
        <div>
          <CustomButton
            color="white"
            bgColor="black"
            width={mobile ? "70%" : "417px"}
            height={mobile ? "50px" : "74px"}
            fontSize={mobile ? "18px" : "24px"}
          >
            Get Started
          </CustomButton>
        </div>
      </div>
      <div className={styles.right}>
        <img src={HomeIllustration} alt="Home" />
      </div>
    </div>
  );
};

// SECOND SECTION
const SecondSection = () => {
  const mobile = window.innerWidth < 768;
  const [value, onChange] = useState(new Date());

  const handleSubmit = (e) => {
    const city = document.getElementById("send-city").value;
    const category = document.getElementById("send-category").value;
    const date = document.getElementById("send-date").value;
    if (!city || !category || !date) {
      alert("Please fill all the fields");
      return;
    }
    console.log(city, category, date);
  };
  return (
    <>
      <div className={styles.sendContainer}>
        <div className={styles.sendHeader}>
          <h2>SEND GIFTS TO NIGERIA INSTANTLY</h2>
          <p>FOLLOW THESE STEPS </p>
        </div>
        <div className={styles.sendSelectDiv}>
          <div className={styles.sendSelectCol}>
            <div>
              <span>1</span>
              <div className={styles.sendSelectRow}>
                <h3>Choose Destination</h3>
                <select name="Select City" id="send-city">
                  <option value="lagos">Lagos</option>
                  <option value="abuja">Abuja</option>
                  <option value="PH">Port Harcourt</option>
                </select>
              </div>
            </div>
          </div>
          <div className={styles.sendSelectCol}>
            <div>
              <span>2</span>
              <div className={styles.sendSelectRow}>
                <h3>Celebration</h3>
                <select id="send-category">
                  <option value="romance">Romance</option>
                  <option value="omugwo">Omugwo</option>
                  <option value="wedding">Wedding</option>
                </select>
              </div>
            </div>
          </div>
          <div className={styles.sendSelectCol}>
            <div>
              <span>3</span>
              <div className={styles.sendSelectRow}>
                <h3>Choose Delivery Date</h3>
                <input id="send-date" type="date" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sendbtn}>
          <CustomButton
            onClick={handleSubmit}
            color="white"
            bgColor="black"
            width={mobile ? "200px" : "417px"}
            height={mobile ? "50px" : "64px"}
            fontSize={mobile ? "18px" : "24px"}
          >
            Submit
          </CustomButton>
        </div>
      </div>
    </>
  );
};

const HomePage = () => {
  return (
    <>
      <TopSection />
      <SecondSection />
    </>
  );
};

export default HomePage;
