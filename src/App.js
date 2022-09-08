import React, { Suspense } from "react";
import "./App.css";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import HomepageLayout from "./Layouts/HomepageLayout/HomepageLayout";
import Loading from "./Components/Loading/Loading";
import { AuthProvider } from "./Contexts/Auth";
// Lazy imports
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
const Dashboard = React.lazy(() => import("./Pages/Dashboard/Dashboard"));
const SecretPaddy = React.lazy(() => import("./Pages/SecretPaddy/SecretPaddy"));

function App() {
  return (
    <AuthProvider>
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
          <Route
            exact
            path="/dashboard"
            element={<HomepageLayout children={<Dashboard />} />}
          />
          <Route
            exact
            path="/secret-paddy"
            element={<HomepageLayout children={<SecretPaddy />} />}
          />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

function NoMatch() {
  let location = useLocation();

  return (
    <div id="mainfof" className="text-center mt-5">
      <div className="fof">
        <h3>
          Page not found<code>{location.pathname}</code>
        </h3>
        <h4>
          Go back <Link to="/">Home</Link>
        </h4>
      </div>
    </div>
  );
}

export default App;
