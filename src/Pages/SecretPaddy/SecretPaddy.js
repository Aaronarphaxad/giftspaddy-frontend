import { useState } from "react";
import OnboardingModal from "./onboarding/OnboardingModal";
import styles from "./SecretPaddy.module.css";

// Secret Page
const SecretPaddy = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className={styles.secretContainer}>
      <OnboardingModal open={open} setOpen={setOpen} />
      Hehehehe
    </div>
  );
};

export default SecretPaddy;
