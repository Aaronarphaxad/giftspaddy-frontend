import * as React from "react";
import styles from "./Onboarding.module.css";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import screen1 from "../../../Assets/images/secret-order.png";
import screen2 from "../../../Assets/images/secret1.png";
import screen3 from "../../../Assets/images/order-delivered.png";
import { Box } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Transition2 = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const OnboardingModal = ({ open, setOpen }) => {
  const [screen, setScreen] = React.useState(1);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
        <div className={styles.onBoardDiv}>
          {screen === 1 && (
            <>
              <div className={styles.onBoardContent}>
                <div className={styles.onBoardCol}>
                  <h3>Place an order for recipient</h3>
                  <p>
                    Select from our wide range of hampers, customise your gift
                    or request for something unique by sending us a request
                  </p>
                </div>
                <div>
                  <img src={screen1} alt="img" width="80%" height="300px" />
                </div>
                <div className={styles.bottomNav}>
                  <div>1/3</div>
                  <button onClick={() => setScreen(2)}>Next</button>
                  <span onClick={handleClose}>Skip</span>
                </div>
              </div>
            </>
          )}
          {screen === 2 && (
            <Box TransitionComponent={Transition2}>
              <div className={styles.onBoardContent}>
                <div>
                  <img src={screen2} alt="img" width="80%" height="300px" />
                </div>
                <div className={styles.onBoardCol}>
                  <h3>Recipient accepts the anonymous gift</h3>
                  <p>
                    The receiver will be given an option to either accept or
                    reject the secret gift.
                  </p>
                </div>

                <div className={styles.bottomNav}>
                  <div>2/3</div>
                  <div>
                    <button>
                      <div className="d-flex gap-2 text-light justify-content-between px-2">
                        <span onClick={() => setScreen(1)}>Back</span>
                        <span onClick={() => setScreen(3)}>Next</span>
                      </div>
                    </button>
                  </div>
                  <span onClick={handleClose}>Skip</span>
                </div>
              </div>
            </Box>
          )}
          {screen === 3 && (
            <>
              <div className={styles.onBoardContent}>
                <div className={styles.onBoardCol}>
                  <h3>Order delivered</h3>
                  <p>
                    If the order is accepted, the sender will be required to
                    make payment and it is delivered in 3 days.
                  </p>
                </div>
                <div>
                  <img src={screen3} alt="img" width="70%" height="300px" />
                </div>
                <div className={styles.bottomNav}>
                  <div>3/3</div>
                  <span></span>
                  <button onClick={handleClose}>Continue</button>
                </div>
              </div>
            </>
          )}
        </div>
      </Dialog>
    </>
  );
};

export default OnboardingModal;
