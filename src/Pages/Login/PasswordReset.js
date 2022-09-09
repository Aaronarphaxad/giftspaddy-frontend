import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import CustomButton from "../../Components/Button/Button";
import { supabase } from "../../superbaseClient";
// import { supabase } from "../utils/supabase";
import styles from "./Login.module.css";

function PasswordReset() {
  const [password, setPassword] = useState(null);

  const [hash, setHash] = useState(null);

  useEffect(() => {
    setHash(window.location.hash);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const notification = toast.loading("Changing Password");

    try {
      // if the user doesn't have accesstoken
      if (!hash) {
        return toast.error("Sorry, Invalid token", {
          id: notification,
        });
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
          toast.error("Invalid access token or type", {
            id: notification,
          });
          return;
        }

        //   now we will change the password
        const { error } = await supabase.auth.api.updateUser(accessToken, {
          password: password,
        });

        if (error) {
          toast.error(error.message, {
            id: notification,
          });
        } else if (!error) {
          toast.success("Password Changed", {
            id: notification,
          });
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Sorry Error occured", {
        id: notification,
      });
    }
  };

  return (
    <div className="text-center p-5">
      <div className={`w-100 ${styles.inputDivs}`}>
        <form>
          <input
            type="password"
            required
            value={password}
            placeholder="Please enter your new Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
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
    </div>
  );
}

export default PasswordReset;
