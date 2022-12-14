import React, { Suspense, useEffect } from "react";
import "./App.css";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import HomepageLayout from "./Layouts/HomepageLayout/HomepageLayout";
import Loading from "./Components/Loading/Loading";
import { AuthProvider } from "./Contexts/Auth";
import ReactGA from "react-ga";
// Lazy imports
const Home = React.lazy(() => import("./Pages/Home/Home"));
const About = React.lazy(() => import("./Pages/About/About"));
const Services = React.lazy(() => import("./Pages/Services/Services"));
const Categories = React.lazy(() => import("./Pages/Categories/Categories"));
const Login = React.lazy(() => import("./Pages/Login/Login"));
const PasswordReset = React.lazy(() => import("./Pages/Login/PasswordReset"));
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

const TRACKING_ID = "UA-240772397-2"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  let location = useLocation();
  // Update google analytics
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      if (location.pathname.includes("/app")) {
        ReactGA.set({ page: location.pathname }, ["appTracker"]); // Update the user's current page
        ReactGA.pageview(location.pathname, ["appTracker"]); // Record a pageview for the given page
      } else {
        ReactGA.set({ page: location.pathname }, ["marketingTracker"]); // Update the user's current page
        ReactGA.pageview(location.pathname, ["marketingTracker"]); // Record a pageview for the given page
      }
    }
  }, [location]);
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
          <Route path="/password-reset" element={<PasswordReset />} />
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
