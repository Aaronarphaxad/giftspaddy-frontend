import React, { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";

const HomepageLayout = ({ children }) => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    window.scrollY >= 50 ? setNavbar(true) : setNavbar(false);
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className="layout">
      <NavBar navbar={navbar} />
      {children}
      <Footer />
    </div>
  );
};

export default HomepageLayout;
