import React, { useState } from "react";
import styles from "./Login.module.css";
import CustomButton from "../../Components/Button/Button";
import google from "../../Assets/images/google.png";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/Auth";
import ResetPasswordModal from "./ResetPasswordModal";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [display, setDisplay] = useState(false);
  // Get signUp function from the auth context
  const { signIn, signInGoogle } = useAuth();
  // Modals control
  const handleClose = () => setDisplay(false);
  const handleShow = () => setDisplay(true);

  const navigate = useNavigate();

  const notifyError = (e) =>
    toast.error(e, {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (!email || !password) {
      notifyError("Please fill all fields");
      setLoading(false);
      return;
    }
    if (!password) {
      notifyError("Please enter password");
      return;
    }
    if (!email) {
      notifyError("Please enter email");
      return;
    }
    if (email && password) {
      if (regex.test(email)) {
        // Calls `signIn` function from the context
        const { user, error } = await signIn({ email, password });
        console.log(user);
        if (error) {
          setLoading(false);
          notifyError(error);
        } else {
          setLoading(false);
          navigate("/");
        }
      } else {
        notifyError("Invalid email");
        setLoading(false);
      }
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <ResetPasswordModal
        display={display}
        handleClose={handleClose}
        setDisplay={setDisplay}
      />
      <div className={styles.loginContainer}>
        <Toaster />
        <div className={styles.left}>
          <h1>Let’s create happy Moments for You</h1>
        </div>
        <div className={styles.right}>
          <div className={styles.rightInnerDiv}>
            <Link to="/">
              <img
                className="lazyload"
                data-src={
                  "https://res.cloudinary.com/gifts-paddy/image/upload/v1651773215/main-logo_nsqhkb.png"
                }
                alt="logo"
                height="70px"
              />
            </Link>
            <h1>Glad you're back, Sign in!</h1>
            <div className={styles.googleContainer}>
              <div onClick={signInGoogle} className={styles.googleDiv}>
                <img src={google} alt="google" height="27px" />
                Sign in with Google
              </div>
              <div className={styles.lineDiv}>
                <hr className={styles.line} />
                <span>or</span>
                <hr className={styles.line} />
              </div>
            </div>
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
            <div onClick={handleShow} className="w-100 text-right">
              <p id={styles.recover}>Forgot Password?</p>
            </div>
            <CustomButton
              bgColor="#058196"
              color="white"
              height="50px"
              width="100%"
              onClick={handleSubmit}
              disabled={!email && !password}
            >
              <span className={styles.btnText}>
                {loading ? "Signing in..." : "Sign in"}
              </span>
            </CustomButton>

            <div className={styles.createAccount}>
              So sorry things look new?{" "}
              <Link to="/register">
                <span>Create an account here</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
