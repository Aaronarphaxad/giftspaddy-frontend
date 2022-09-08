import React, { useState } from "react";
import styles from "./Register.module.css";
import CustomButton from "../../Components/Button/Button";
import google from "../../Assets/images/google.png";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import PasswordStrengthBar from "react-password-strength-bar";
import { updateProfile, useAuth } from "../../Contexts/Auth";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // Get signUp function from the auth context
  const { signUp, signInGoogle } = useAuth();

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
    } else if (name === "name") {
      setName(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (name === "" && email === "" && password === "") {
      notifyError("Please fill all fields");
    }

    if (!name && email && password) {
      notifyError("Please enter name");
      setLoading(false);
    }
    if (name && email && !password) {
      notifyError("Please enter password");
      setLoading(false);
    }
    if (!email && password && name) {
      notifyError("Please enter email");
      setLoading(false);
    }
    if (name && email && password) {
      if (regex.test(email)) {
        // supabase
        const { user, error } = await signUp({ name, email, password });
        updateProfile(user.id, name, user.email);
        if (error) {
          notifyError(error);
          setLoading(false);
        } else {
          setLoading(false);
          notifySuccess("Check your email to confirm");
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
          <h1>Want to spread love? Sign up!</h1>
          <div className={styles.googleContainer}>
            <div onClick={signInGoogle} className={styles.googleDiv}>
              <img src={google} alt="google" height="27px" />
              Sign up with Google
            </div>
            <div className={styles.lineDiv}>
              <hr className={styles.line} />
              <span>or</span>
              <hr className={styles.line} />
            </div>
          </div>
          <p>Name</p>
          <div className={styles.inputDivs}>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={handleChange}
            />
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
          {password && (
            <PasswordStrengthBar
              className={styles.PasswordStrengthBar}
              password={password}
              minLength={8}
              scoreWords={["Weak", "Weak", "Decent", "Good enough", "Strong"]}
            />
          )}

          <div className="mt-3 w-100">
            <CustomButton
              bgColor="#058196"
              color="white"
              height="50px"
              width="100%"
              onClick={handleSubmit}
            >
              <span className={styles.btnText}>
                {loading ? "Sending..." : "Sign up"}
              </span>
            </CustomButton>
          </div>

          <div className={styles.createAccount}>
            Already have an account?{" "}
            <Link to="/login">
              <span>Sign in here</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
