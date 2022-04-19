import * as React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages/Home/Home";
import HomepageLayout from "./Layouts/HomepageLayout/HomepageLayout";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Categories from "./Pages/Categories/Categories";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import ServiceDetail from "./Pages/Services/ServiceDetails/ServiceDetail";
import CategoryType from "./Pages/Categories/CategoryType/CategoryType";
import ProductPage from "./Pages/ProductPage/ProductPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomepageLayout children={<HomePage />} />} />
      <Route path="/about" element={<HomepageLayout children={<About />} />} />
      <Route
        path="/services"
        element={<HomepageLayout children={<Services />} />}
      />
      <Route
        path="/categories"
        element={<HomepageLayout children={<Categories />} />}
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
        path="/categories/:category/:id"
        element={<HomepageLayout children={<ProductPage />} />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
