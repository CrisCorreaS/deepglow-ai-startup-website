import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import News from "./pages/News";
import InfoDetail from "./pages/InfoDetail";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./pages/Wrapper";
import { news, current_events, past_events } from "./constants";

const App = () => {
  const location = useLocation();

  const noHeaderFooterRoutes = ["/dashboard"];
  const hideHeaderFooter = noHeaderFooterRoutes.includes(location.pathname);

  return (
    <>
      <ScrollToTop />

      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
        <Route 
          path="/events/current/:id" 
          element={<InfoDetail items={current_events} backLink="/events" />} 
        />
        <Route 
          path="/events/past/:id" 
          element={<InfoDetail items={past_events} backLink="/events" />} 
        />
        <Route path="/news" element={<News />} />
        <Route 
          path="/news/:id" 
          element={<InfoDetail items={news} backLink="/news" />} 
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/register"
          element={
            <Wrapper>
              <Register />
            </Wrapper>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Wrapper>
              <Dashboard />
            </Wrapper>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {!hideHeaderFooter && <Footer />}
    </>
  );
};

export default App;
