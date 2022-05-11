import React, { useState } from "react";
import styles from "./Login.module.css";
import CustomButton from "../../Components/Button/Button";
import google from "../../Assets/images/google.png";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (email === "" && password === "") {
      notifyError("Please fill all fields");
    }
    if (email && !password) {
      notifyError("Please enter password");
    }
    if (!email && password) {
      notifyError("Please enter email");
    }
    if (email && password) {
      regex.test(email)
        ? notifySuccess("Login Successful")
        : notifyError("Please enter valid email");
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className={styles.loginContainer}>
      <Toaster />
      <div className={styles.left}>
        <h1>Let’s create happy Moments for You</h1>
      </div>
      <div className={styles.right}>
        <div className={styles.rightInnerDiv}>
          <Link to="/">
            <img
              className={styles.loginImg}
              src={
                "https://res.cloudinary.com/gifts-paddy/image/upload/v1651773215/main-logo_nsqhkb.png"
              }
              alt="logo"
              height="70px"
            />
          </Link>
          <h1>Glad you're back, Sign in!</h1>
          <p>Email</p>
          <div className={styles.inputDivs}>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <p>Password</p>
          <div className={styles.inputDivs}>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={handleChange}
            />
            {showPassword ? (
              <img
                src={
                  "https://res.cloudinary.com/gifts-paddy/image/upload/v1651773206/bxs_hide_twwfya.png"
                }
                alt="hide"
                onClick={handleShowPassword}
              />
            ) : (
              <img
                src={
                  "https://res.cloudinary.com/gifts-paddy/image/upload/v1651773206/bxs_show_gni3lm.png"
                }
                alt="show"
                onClick={handleShowPassword}
              />
            )}
          </div>
          <div className="w-100">
            <p id={styles.recover}>Recover Password</p>
          </div>
          <CustomButton
            bgColor="#058196"
            color="white"
            height="50px"
            width="100%"
            onClick={handleSubmit}
          >
            <span className={styles.btnText}>Sign in</span>
          </CustomButton>
          <div className={styles.googleContainer}>
            <div className={styles.lineDiv}>
              <hr className={styles.line} />
              <span>or</span>
              <hr className={styles.line} />
            </div>
            <div className={styles.googleDiv}>
              <img src={google} alt="google" height="27px" />
              Sign in with Google
            </div>
          </div>
          <div className={styles.createAccount}>
            So sorry things look new?{" "}
            <Link to="/register">
              <span>Create an account here</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
