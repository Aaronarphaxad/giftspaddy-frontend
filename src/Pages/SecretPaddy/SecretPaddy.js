import { useState } from "react";
import CustomButton from "../../Components/Button/Button";
import OnboardingModal from "./onboarding/OnboardingModal";
import styles from "./SecretPaddy.module.css";

// Secret Page
const SecretPaddy = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className={styles.secretContainer}>
      <OnboardingModal open={open} setOpen={setOpen} />
      <h2 className={styles.header}>Secret Paddy</h2>
      <p className={styles.para}>
        Please enter the details of your anonymous gift:
      </p>
      <div className={styles.formContent}>
        <label for="name">Name</label>
        <input name="name" />
        <label for="category">Category</label>
        <input name="category" />
        <label for="date">Date</label>
        <input type="date" name="date" />
        <label for="name">Name</label>
        <input />
        <CustomButton height="45px">
          <span className="fw-bold">Save and search for gifts</span>
        </CustomButton>
      </div>
    </div>
  );
};

export default SecretPaddy;
