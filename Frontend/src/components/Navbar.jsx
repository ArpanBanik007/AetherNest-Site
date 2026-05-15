import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, Search, Globe } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GlowButton } from '../components/common/UI';
import SearchModal from './features/SearchModal';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['home', 'categories', 'properties', 'calculator', 'testimonials', 'contact'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [location.pathname]);

  // Handle hash scroll on navigation
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'About Us', href: '/about', id: 'about' },
    { name: 'Services', href: '/#categories', id: 'categories' },
    { name: 'Loan Assistance', href: '/#calculator', id: 'calculator' },
    { name: 'Properties', href: '/properties', id: 'properties' },
    { name: 'Customer Reviews', href: '/#testimonials', id: 'testimonials' },
    { name: 'Contact Us', href: '/contact', id: 'contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      if (location.pathname === '/') {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(href);
      }
    } else {
      navigate(href);
    }
  };

  const handleMobileLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      if (location.pathname === '/') {
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 300);
        }
      } else {
        setTimeout(() => navigate(href), 300);
      }
    } else {
      setTimeout(() => navigate(href), 300);
    }
  };

  const handleDashboardClick = () => {
    alert("Dashboard is coming soon to our valued customers!");
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 ${
          isScrolled ? 'bg-white shadow-xl shadow-black/5 border-b border-gray-100' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/10 transition-transform duration-500">
              <span className="text-xl font-black text-white italic">D</span>
            </div>
            <div className="flex flex-col -gap-0.5">
              <span className="text-xl font-extrabold tracking-tight text-rich-dark">DISHA REALTY</span>
              <span className="text-[9px] font-bold tracking-[0.2em] text-primary uppercase">Home Loan & Real Estate</span>
            </div>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10 ml-16">
            {navLinks.map((link) => {
              const isActive = (link.href.startsWith('/#') && activeSection === link.id) || 
                              (link.href === location.pathname) ||
                              (link.href === '/' && location.pathname === '/' && activeSection === 'home');

              return (
                <motion.button
                  key={link.name}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`transition-all font-bold text-[11px] uppercase tracking-widest relative py-1 ${
                    isActive ? 'text-primary' : 'text-rich-dark/50 hover:text-primary'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary rounded-full shadow-[0_2px_8px_rgba(0,166,81,0.2)]"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-6 ml-auto">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-rich-dark/30 hover:text-primary transition-colors"
            >
              <Search size={20} />
            </button>
            <div className="w-[1px] h-5 bg-gray-100 mx-2" />
            <GlowButton 
              variant="emerald" 
              className="px-7 py-3 text-[10px] !rounded-xl"
              onClick={() => navigate('/auth')}
            >
              <User size={14} />
              Sign In
            </GlowButton>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-rich-dark ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-b border-gray-100 overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col gap-4 p-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className={`text-lg font-bold transition-colors ${
                      activeSection === link.id ? 'text-primary' : 'text-rich-dark/60 hover:text-rich-dark'
                    }`}
                    onClick={(e) => handleMobileLinkClick(e, link.href)}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="h-[1px] bg-gray-100 my-2" />
                <GlowButton variant="emerald" className="w-full">Sign In</GlowButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navbar;
