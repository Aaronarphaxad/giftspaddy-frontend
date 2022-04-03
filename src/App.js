import * as React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages/Home/Home";
import HomepageLayout from "./Layouts/HomepageLayout/HomepageLayout";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Categories from "./Pages/Categories/Categories";

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
    </Routes>
  );
}

export default App;
