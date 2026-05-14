import { Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AIAssistant from '../components/features/AIAssistant';
import CompareFloating from '../components/features/CompareFloating';
import useUIStore from '../store/useUIStore';

const MainLayout = () => {
  const { isDarkMode } = useUIStore();

  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  return (
    <div className={`min-h-screen bg-white transition-colors duration-500`}>
      <Navbar />
      <main>
        {/* Page transitions can be added here */}
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <AIAssistant />
      <CompareFloating />
      <Footer />
    </div>
  );
};

export default MainLayout;
