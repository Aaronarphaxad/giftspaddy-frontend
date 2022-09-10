import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../Components/Button/Button";
import { supabase } from "../../superbaseClient";
// import { supabase } from "../utils/supabase";
import styles from "./Login.module.css";

function PasswordReset() {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [hash, setHash] = useState(null);
  const navigate = useNavigate();

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

  useEffect(() => {
    setHash(window.location.hash);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== password2 || (!password && !password2)) {
      if (!password && !password2) {
        notifyError("Enter Password");
      } else {
        notifyError("Password mismatch");
      }
      setPassword("");
      setPassword2("");
      return;
    }
    try {
      // if the user doesn't have accesstoken
      if (!hash) {
        notifyError("Sorry, Invalid token");
        return;
      } else if (hash) {
        const hashArr = hash
          .substring(1)
          .split("&")
          .map((param) => param.split("="));

        let type;
        let accessToken;
        for (const [key, value] of hashArr) {
          if (key === "type") {
            type = value;
          } else if (key === "access_token") {
            accessToken = value;
          }
        }

        if (
          type !== "recovery" ||
          !accessToken ||
          typeof accessToken === "object"
        ) {
          notifyError("Invalid access token or type");
          return;
        }

        //   now we will change the password
        const { error } = await supabase.auth.api.updateUser(accessToken, {
          password: password,
        });

        if (error) {
          notifyError(error.message);
        } else if (!error) {
          notifySuccess("Password Changed");
          navigate("/login");
        }
      }
    } catch (error) {
      console.log(error);
      notifyError("Sorry Error occured");
    }
  };

  return (
    <div className="d-flex flex-column align-items-center text-center p-5">
      <Toaster />
      <h2>Reset Password</h2>
      <div className={`w-50 mb-2 ${styles.inputDivs}`}>
        <input
          type="password"
          value={password}
          placeholder="New Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={`w-50 mb-2 ${styles.inputDivs}`}>
        <input
          type="password"
          value={password2}
          placeholder="Confirm Password"
          onChange={(e) => setPassword2(e.target.value)}
        />
      </div>
      <div className="d-flex flex-start">
        <CustomButton
          bgColor="#058196"
          height="40px"
          width="150px"
          onClick={(e) => handleSubmit(e)}
          type="submit"
        >
          Submit
        </CustomButton>
      </div>
      <p onClick={() => navigate("/login")} className="pointer mt-3 font-bold">
        Go back
      </p>
    </div>
  );
}

export default PasswordReset;
