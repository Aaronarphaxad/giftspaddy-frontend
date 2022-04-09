import React from "react";
import styles from "./VideoSection.module.css";
import LearnArrow from "../../Assets/images/learn-more.svg";
import VideoComponent from "../VideoComponent/VideoComponent";
import { Link } from "react-router-dom";

const VideoSection = () => {
  const isAbout = window.location.pathname === "/about";
  return (
    <div className={styles.videoContainer}>
      {!isAbout && (
        <>
          <div className={styles.videoLeft}>
            <VideoComponent youtubeId="hUqOaKx2F5c" />
          </div>
          <div className={styles.videoRight}>
            <h2>HOW WE WORK</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse.
            </p>
            <Link to="/about">
              <div className={styles.videoRightLearn}>
                <span>Learn more</span>{" "}
                <span>
                  <img
                    style={{ marginLeft: "10px" }}
                    src={LearnArrow}
                    alt="arrow"
                    height="10px"
                  />
                </span>
              </div>
            </Link>
          </div>
        </>
      )}
      {isAbout && (
        <>
          <div className={styles.aboutVariant}>
            <h2>HOW WE WORK</h2>
            <VideoComponent youtubeId="hUqOaKx2F5c" />
          </div>
        </>
      )}
    </div>
  );
};

export default VideoSection;
