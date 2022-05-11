import React, { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";
import "../../Assets/styles/menu.css";
import Cart from "../../Assets/images/clarity_shopping-cart-solid.svg";
import { Link, NavLink } from "react-router-dom";
import CustomButton from "../Button/Button";
import MobileMenu from "../../Assets/icons/mobileMenu";
import MenuClose from "../../Assets/icons/MenuClose";
import ServicesDropdown from "../ServicesDropdown/ServicesDropdown";
import CategoryDropdown from "../CategoryDropdown/CategoryDropdown";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";
import dashboard from "../../Assets/images/dashboard-5481.svg";
import settings from "../../Assets/images/settings-5666.svg";
import { useSelector } from "react-redux";

// Mobile Menu

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartList = useSelector((state) => state.cart.cartList);

  useEffect(() => {
    document.getElementById("root").style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    <div className={styles.mobileDiv}>
      <MenuContent isOpen={isOpen} handleClick={handleClick} />
      <div>
        <Link to="/">
          <img
            src={
              "https://res.cloudinary.com/gifts-paddy/image/upload/v1651773215/main-logo_nsqhkb.png"
            }
            alt="logo"
            height="50px"
            width="90px"
          />
        </Link>
      </div>
      <div className="d-flex justify-content-between gap-2">
        {!isOpen && (
          <div className="mt-1">
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={cartList.length} color="info">
                <Link to="/cart">
                  <img
                    src={
                      "https://res.cloudinary.com/gifts-paddy/image/upload/v1651773206/clarity_shopping-cart-solid_qn8joc.svg"
                    }
                    alt="cart"
                    className={styles.cart}
                  />
                </Link>
              </StyledBadge>
            </IconButton>
          </div>
        )}
        <div onClick={handleClick} className="d-inline ml-2 pt-3">
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

const MenuContent = ({ isOpen, handleClick }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const handleOpen = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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

          <div style={{ opacity: isOpen ? "1" : "0" }}>
            {isLoggedIn ? (
              <>
                <div className="d-flex align-items-center gap-2">
                  <Avatar alt="Aaron" src="" />
                  <div
                    className="d-flex align-items-center"
                    aria-describedby={id}
                    onClick={handleOpen}
                    style={{ cursor: "pointer" }}
                  >
                    <span style={{ marginRight: "5px" }}>Aaron</span>
                    <img
                      src={
                        "https://res.cloudinary.com/gifts-paddy/image/upload/v1651773205/arrow-down_r7rmn9.svg"
                      }
                      alt="arrow"
                      height="6px"
                    />
                  </div>
                </div>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <div className={styles.profileMenu}>
                    <div
                      className="d-flex align-items-center mb-2"
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src={dashboard}
                        alt="dashboard"
                        height="15px"
                        style={{ marginRight: "10px" }}
                      />
                      <Link to="/dashboard">
                        <span>Dashboard</span>
                      </Link>
                    </div>
                    <div
                      className="d-flex align-items-center"
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src={settings}
                        alt="dashboard"
                        height="18px"
                        style={{ marginRight: "10px" }}
                      />
                      <span>Settings</span>
                    </div>
                    <div className="mt-2">
                      <CustomButton
                        bgColor="#058196"
                        height="35px"
                        width="100%"
                      >
                        Log out
                      </CustomButton>
                    </div>
                  </div>
                </Popover>
              </>
            ) : (
              <>
                <Link to="/login">
                  <CustomButton
                    bgColor="black"
                    color="white"
                    width="100px"
                    height="40px"
                  >
                    Login
                  </CustomButton>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const NavBar = ({ navbar }) => {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const ref = useRef();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const cartList = useSelector((state) => state.cart.cartList);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  const handleServicesDropdown = (e) => {
    setServicesDropdownOpen(!servicesDropdownOpen);
    setCategoryDropdownOpen(false);
  };

  const handleCategoryDropdown = (e) => {
    setServicesDropdownOpen(false);
    setCategoryDropdownOpen(!categoryDropdownOpen);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (
        servicesDropdownOpen &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        setServicesDropdownOpen(false);
      }
      if (
        categoryDropdownOpen &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        setCategoryDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [servicesDropdownOpen, categoryDropdownOpen]);

  return (
    <>
      <MobileNavBar />
      <div
        ref={ref}
        id={navbar ? "my-nav" : undefined}
        className={styles.navContainer}
      >
        <div className={styles.logoDiv}>
          <Link to="/">
            <img
              src={
                "https://res.cloudinary.com/gifts-paddy/image/upload/v1651773215/main-logo_nsqhkb.png"
              }
              alt="Giftspaddy Logo"
              className={styles.logo}
              height="70px"
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
              <div
                onMouseOver={handleServicesDropdown}
                className={styles.links}
              >
                <span>Services</span>
                <img
                  style={{
                    transform: servicesDropdownOpen ? "rotate(180deg)" : "",
                    transition: "all 0.5s ease",
                  }}
                  src={
                    "https://res.cloudinary.com/gifts-paddy/image/upload/v1651773205/arrow-down_r7rmn9.svg"
                  }
                  alt="Arrow Down"
                  className={styles.arrowDown}
                />
              </div>
            </NavLink>
            {servicesDropdownOpen && (
              <ServicesDropdown
                servicesDropdownOpen={servicesDropdownOpen}
                setServicesDropdownOpen={setServicesDropdownOpen}
              />
            )}
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
              <div
                onMouseOver={handleCategoryDropdown}
                className={styles.links}
              >
                <span>Categories</span>
                <img
                  style={{
                    transform: categoryDropdownOpen ? "rotate(180deg)" : "",
                    transition: "all 0.5s ease",
                  }}
                  src={
                    "https://res.cloudinary.com/gifts-paddy/image/upload/v1651773205/arrow-down_r7rmn9.svg"
                  }
                  alt="Arrow Down"
                  className={styles.arrowDown}
                />
              </div>
            </NavLink>
            {categoryDropdownOpen && (
              <CategoryDropdown categoryDropdownOpen={categoryDropdownOpen} />
            )}
          </div>
          {/* Login buttons */}
          <div className={styles.linksRight}>
            {isLoggedIn ? (
              <div className="d-flex align-items-center gap-1">
                <div className="d-flex align-items-center gap-2">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={cartList.length} color="primary">
                      <Link to="/cart">
                        <img
                          src={
                            "https://res.cloudinary.com/gifts-paddy/image/upload/v1651773206/clarity_shopping-cart-solid_qn8joc.svg"
                          }
                          alt="cart"
                          className={styles.cart}
                          height="22px"
                        />
                      </Link>
                    </StyledBadge>
                  </IconButton>
                  <Avatar alt="Aaron" src="" />
                  <div
                    className="d-flex align-items-center"
                    aria-describedby={id}
                    onClick={handleClick}
                    style={{ cursor: "pointer" }}
                  >
                    <span style={{ marginRight: "5px", fontSize: "1rem" }}>
                      Aaron
                    </span>
                    <img
                      src={
                        "https://res.cloudinary.com/gifts-paddy/image/upload/v1651773205/arrow-down_r7rmn9.svg"
                      }
                      alt="arrow"
                      height="6px"
                    />
                  </div>
                </div>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <div className={styles.profileMenu}>
                    <div
                      className="d-flex align-items-center mb-2"
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src={dashboard}
                        alt="dashboard"
                        height="15px"
                        style={{ marginRight: "10px" }}
                      />
                      <Link to="/dashboard">
                        <span>Dashboard</span>
                      </Link>
                    </div>
                    <div
                      className="d-flex align-items-center mb-2"
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src={settings}
                        alt="dashboard"
                        height="18px"
                        style={{ marginRight: "10px" }}
                      />
                      <span>Settings</span>
                    </div>
                    <p className="mx-2">
                      <CustomButton
                        bgColor="#058196"
                        height="35px"
                        width="100%"
                        onClick={() => setIsLoggedIn(false)}
                      >
                        Log out
                      </CustomButton>
                    </p>
                  </div>
                </Popover>
              </div>
            ) : (
              <>
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={cartList.length} color="info">
                    <Link to="/cart">
                      <img src={Cart} alt="cart" className={styles.cart} />
                    </Link>
                  </StyledBadge>
                </IconButton>
                <Link to="/login">
                  <CustomButton
                    bgColor="black"
                    color="white"
                    width="100px"
                    height="40px"
                  >
                    Login
                  </CustomButton>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
