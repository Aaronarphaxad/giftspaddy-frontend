import React, { useEffect, useState, useRef } from "react";
import styles from "./Navbar.module.css";
import "../../Assets/styles/menu.css";
import LogoImg from "../../Assets/images/Giftspaddy-logo.svg";
import ArrowDown from "../../Assets/images/arrow-down.svg";
import Cart from "../../Assets/images/clarity_shopping-cart-solid.svg";
import { Link, NavLink } from "react-router-dom";
import CustomButton from "../Button/Button";
import MobileMenu from "../../Assets/icons/mobileMenu";
import MenuClose from "../../Assets/icons/MenuClose";

// Mobile Menu

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.getElementById("root").style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.mobileDiv}>
      <MenuContent isOpen={isOpen} handleClick={handleClick} />
      <div>
        <Link to="/">
          <img src={LogoImg} alt="logo" />
        </Link>
      </div>
      <div onClick={handleClick}>
        <img
          style={{ marginRight: "15px" }}
          src={Cart}
          alt="Cart"
          className={styles.cart}
        />
        <MobileMenu />
      </div>
    </div>
  );
};

const MenuContent = ({ isOpen, handleClick }) => {
  return (
    <div style={{ width: isOpen ? "100%" : "0" }} className="menu-div">
      <div className="content">
        <div onClick={handleClick}>
          <MenuClose />
        </div>
        <div className="content-links">
          <NavLink
            to="/about"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#058196",
                    textDecoration: "none",
                    fontWeight: "600",
                  }
                : { color: "#000", textDecoration: "none" }
            }
          >
            <p
              className="links"
              onClick={handleClick}
              style={{ opacity: isOpen ? "1" : "0" }}
            >
              About
            </p>
          </NavLink>
          <NavLink
            to="/services"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#058196",
                    textDecoration: "none",
                    fontWeight: "600",
                  }
                : { color: "#000", textDecoration: "none" }
            }
          >
            <p
              className="links"
              onClick={handleClick}
              style={{ opacity: isOpen ? "1" : "0" }}
            >
              Services
            </p>
          </NavLink>
          <NavLink
            to="/categories"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#058196",
                    textDecoration: "none",
                    fontWeight: "600",
                  }
                : { color: "#000", textDecoration: "none" }
            }
          >
            <p
              className="links"
              onClick={handleClick}
              style={{ opacity: isOpen ? "1" : "0" }}
            >
              Categories
            </p>
          </NavLink>
          {/* <img
            style={{ opacity: isOpen ? "1" : "0" }}
            src={Cart}
            alt="Cart"
            className={styles.cart}
          /> */}
          <div style={{ opacity: isOpen ? "1" : "0" }}>
            <CustomButton
              style={{ opacity: isOpen ? "1" : "0" }}
              bgColor="black"
              color="white"
              width="133px"
            >
              Login
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavBar = () => {
  return (
    <>
      <MobileNavBar />
      <div className={styles.navContainer}>
        <div className={styles.logoDiv}>
          <Link to="/">
            <img
              src={LogoImg}
              alt="Giftspaddy Logo"
              className={styles.logo}
              height="90px"
              width="100px"
            />
          </Link>
        </div>
        <div className={styles.linksDiv}>
          <div className={styles.linksLeft}>
            <NavLink
              to="/about"
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#058196",
                      textDecoration: "none",
                      fontWeight: "600",
                    }
                  : { color: "#000", textDecoration: "none" }
              }
            >
              <div className={styles.links}>About</div>
            </NavLink>
            <NavLink
              to="/services"
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#058196",
                      textDecoration: "none",
                      fontWeight: "600",
                    }
                  : { color: "#000", textDecoration: "none" }
              }
            >
              <div className={styles.links}>
                <span>Services</span>
                <img
                  src={ArrowDown}
                  alt="Arrow Down"
                  className={styles.arrowDown}
                />
              </div>
            </NavLink>
            <NavLink
              to="/categories"
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#058196",
                      textDecoration: "none",
                      fontWeight: "600",
                    }
                  : { color: "#000", textDecoration: "none" }
              }
            >
              <div className={styles.links}>
                <span>Categories</span>
                <img
                  src={ArrowDown}
                  alt="Arrow Down"
                  className={styles.arrowDown}
                />
              </div>
            </NavLink>
          </div>
          <div className={styles.linksRight}>
            <img src={Cart} alt="Cart" className={styles.cart} />
            <CustomButton
              bgColor="black"
              color="white"
              width="100px"
              height="40px"
            >
              Login
            </CustomButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
