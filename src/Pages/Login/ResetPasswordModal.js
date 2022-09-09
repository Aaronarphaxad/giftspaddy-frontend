import { Button } from "@mui/material";
import Modal from "react-bootstrap/Modal";
import styles from "./Login.module.css";
import React, { useState } from "react";
import { useAuth } from "../../Contexts/Auth";
import toast from "react-hot-toast";

export default function ResetPasswordModal({
  display,
  setDisplay,
  handleClose,
}) {
  const [email, setEmail] = useState("");
  const { resetPassword } = useAuth();

  const notifyError = (e) =>
    toast.error(e, {
      position: "top-right",
      duration: 3000,
    });
  const notifySuccess = (e) =>
    toast.success(e, {
      position: "top-right",
      duration: 3000,
    });

  const handleSend = () => {
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (regex.test(email)) {
      resetPassword(email);
      notifySuccess("Check your email to reset password");
      setDisplay(false);
    } else {
      notifyError("Invalid email");
      return;
    }
  };

  return (
    <Modal centered show={display} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Reset Password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-bold">Email</p>
        <div className={styles.inputDivs}>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex align-items-center gap-1">
          <Button onClick={handleSend} variant="contained" size="small">
            Send
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
