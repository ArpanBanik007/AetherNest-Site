import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

// Lazy loading pages later for performance
import Home from '../pages/Home';
import Listings from '../pages/Listings';
import Compare from '../pages/Compare';
import PropertyDetails from '../pages/PropertyDetails';
import Agents from '../pages/Agents';
import Blog from '../pages/Blog';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Auth from '../pages/Auth';
import UserDashboard from '../pages/Dashboard/User';
import AdminDashboard from '../pages/Dashboard/Admin';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="properties" element={<Listings />} />
          <Route path="property/:id" element={<PropertyDetails />} />
          <Route path="compare" element={<Compare />} />
          <Route path="agents" element={<Agents />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Auth Routes */}
        <Route path="/auth" element={<Auth />} />

        {/* Dashboard Routes (Protected later) */}
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />

        {/* 404 Redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
