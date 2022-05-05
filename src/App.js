import React, { Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// import HomePage from "./Pages/Home/Home";
import HomepageLayout from "./Layouts/HomepageLayout/HomepageLayout";
import Loading from "./Components/Loading/Loading";
// import About from "./Pages/About/About";
// import Services from "./Pages/Services/Services";
// import Categories from "./Pages/Categories/Categories";
// import Login from "./Pages/Login/Login";
// import Register from "./Pages/Register/Register";
// import ServiceDetail from "./Pages/Services/ServiceDetails/ServiceDetail";
// import CategoryType from "./Pages/Categories/CategoryType/CategoryType";
// import ProductPage from "./Pages/ProductPage/ProductPage";
// import CartPage from "./Pages/Cart/CartPage";

const Home = React.lazy(() => import("./Pages/Home/Home"));
const About = React.lazy(() => import("./Pages/About/About"));
const Services = React.lazy(() => import("./Pages/Services/Services"));
const Categories = React.lazy(() => import("./Pages/Categories/Categories"));
const Login = React.lazy(() => import("./Pages/Login/Login"));
const Register = React.lazy(() => import("./Pages/Register/Register"));
const ServiceDetail = React.lazy(() =>
  import("./Pages/Services/ServiceDetails/ServiceDetail")
);
const CategoryType = React.lazy(() =>
  import("./Pages/Categories/CategoryType/CategoryType")
);
const ProductPage = React.lazy(() => import("./Pages/ProductPage/ProductPage"));
const CartPage = React.lazy(() => import("./Pages/Cart/CartPage"));

function App() {
  return (
    <Suspense fallback={<Loading type={"spinningBubbles"} />}>
      <Routes>
        <Route path="/" element={<HomepageLayout children={<Home />} />} />
        <Route
          path="/about"
          element={<HomepageLayout children={<About />} />}
        />
        <Route
          path="/services"
          element={<HomepageLayout children={<Services />} />}
        />
        <Route
          path="/categories"
          element={<HomepageLayout children={<Categories />} />}
        />
        <Route
          path="/cart"
          element={<HomepageLayout children={<CartPage />} />}
        />
        <Route
          path="/services/:service"
          element={<HomepageLayout children={<ServiceDetail />} />}
        />
        <Route
          path="/category/:category"
          element={<HomepageLayout children={<CategoryType />} />}
        />
        <Route
          exact
          path="/categories/:category/:id"
          element={<HomepageLayout children={<ProductPage />} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Suspense>
  );
}

export default App;
