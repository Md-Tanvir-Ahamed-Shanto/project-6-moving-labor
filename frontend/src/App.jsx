import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import AboutPage from "./components/pages/AboutPage";
import ServicesPage from "./components/pages/ServicesPage";
import ContactPage from "./components/pages/ContactPage";
import LoginPage from "./components/pages/LoginPage";
import PricePage from "./components/pages/PricePage";
import AdminDashboardPage from "./components/pages/adminPages/AdminDashboardPage";
import BookingPage from "./components/pages/BookingPage";
import PrivateRoute from "./components/common/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/prices" element={<PricePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/admin" element={<PrivateRoute><AdminDashboardPage /></PrivateRoute>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
