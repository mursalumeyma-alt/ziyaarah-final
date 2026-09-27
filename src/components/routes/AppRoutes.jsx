import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../ForgotPassword";
import DashboardLayout from "../layouts/DashboardLayout";
import TripPlanner from "../pages/TripPlanner";
import RitualTracker from "../pages/RitualTracker";
import AboutUs from "../pages/AboutUs";
import Prayers from "../pages/Prayers";
import Events from "../pages/Events";
import Contact from "../pages/Contact";
import Resources from "../pages/Resources";

export default function AppRoutes() {
  return (
    <Routes>
     <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/dashboard" element={<DashboardLayout />} />

       <Route path="/trip-planner" element={<TripPlanner />} />
      <Route path="/ritual-tracker" element={<RitualTracker />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/prayers" element={<Prayers />} />
      <Route path="/events" element={<Events />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resources" element={<Resources />} />
    </Routes>
  );
}