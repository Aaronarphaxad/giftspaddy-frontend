import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";

const HomepageLayout = ({ children }) => {
  return (
    <div className="layout">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default HomepageLayout;
