

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Zap, Phone, Check } from "lucide-react";
import { useLocation, Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const shouldBeTransparent = () => {
    return location.pathname === "/";
  };

  const menuItems = {
    // "Services": ["Charging Solutions", "Installation", "Consultation"],
    "Products": [
      { 
        name: "ccs-2-charging-plug-connector", 
        path: "/products/charging-plug",
        icon: <Zap className="w-4 h-4" />,
        description: "High-performance charging connector for rapid charging"
      },
      { 
        name: "ccs-2-charging-socket", 
        path: "/products/charging-socket",
        icon: <Check className="w-4 h-4" />,
        description: "Smart charging socket with advanced safety features"
      },
      { 
        name: "Type-2-charging-plug-connector", 
        path: "/products/type-2-charging-plug-connector",
        icon: <Check className="w-4 h-4" />,
        description: "High-performance charging connector for rapid charging"
      }
    ]
  };

  const getHeaderBackground = () => {
    if (!shouldBeTransparent()) {
      return "bg-white shadow-lg";
    }
    return isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent";
  };

  const getTextColor = () => {
    if (!shouldBeTransparent() || isScrolled) {
      return "text-gray-900";
    }
    return "text-white";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getHeaderBackground()} ${
        shouldBeTransparent() ? (isScrolled ? "py-2" : "py-4") : "py-2"
      }`}
    >
      <nav className="container px-6 mx-auto lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="relative z-50 flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/">
              <img
                src="/assets/images/logo_tamirabot.png"
                alt="Tamirabot Logo"
                className="w-auto h-12"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-8 lg:flex">
            <NavLink 
              text="Home" 
              to="/" 
              isScrolled={isScrolled} 
              isTransparent={shouldBeTransparent()} 
            />
            <NavLink 
              text="About Us" 
              to="/aboutus" 
              isScrolled={isScrolled} 
              isTransparent={shouldBeTransparent()} 
            />
            {Object.entries(menuItems).map(([category, items]) => (
              <NavDropdown
                key={category}
                text={category}
                items={items}
                isScrolled={isScrolled}
                isTransparent={shouldBeTransparent()}
                navigate={navigate}
              />
            ))}
            <NavLink 
              text="Contact Us" 
              to="/contactus" 
              isScrolled={isScrolled} 
              isTransparent={shouldBeTransparent()} 
            />
          </div>

          {/* Action Buttons */}
          <div className="items-center hidden space-x-4 lg:flex">
            <motion.button
              className="flex items-center space-x-2 px-6 py-2.5 bg-[#EF4A50] text-white rounded-full text-sm font-medium hover:bg-[#d43f44] transition-colors shadow-lg shadow-red-500/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-4 h-4" />
              <span>Book Consult</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="relative z-50 p-2 rounded-full lg:hidden bg-white/10 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${getTextColor()}`} />
            ) : (
              <Menu className={`w-6 h-6 ${getTextColor()}`} />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 top-0 z-40 bg-white lg:hidden"
            >
              <div className="container px-6 py-20 mx-auto">
                <div className="space-y-6">
                  <MobileNavLink text="Home" to="/" onClick={() => setIsMobileMenuOpen(false)} />
                  <MobileNavLink text="About Us" to="/aboutus" onClick={() => setIsMobileMenuOpen(false)} />
                  {Object.entries(menuItems).map(([category, items]) => (
                    <MobileNavDropdown
                      key={category}
                      text={category}
                      items={items}
                      setMobileMenuOpen={setIsMobileMenuOpen}
                      navigate={navigate}
                    />
                  ))}
                  <MobileNavLink text="Contact Us" to="/contactus" onClick={() => setIsMobileMenuOpen(false)} />
                  
                  <div className="pt-6 mt-6 border-t border-gray-100">
                    <motion.button
                      className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-[#EF4A50] text-white rounded-full text-sm font-medium hover:bg-[#d43f44] transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Phone className="w-4 h-4" />
                      <span>Book Consultation</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

const NavLink = ({ text, to, isScrolled, isTransparent }) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link
      to={to}
      className={`text-sm font-medium transition-colors ${
        !isTransparent || isScrolled 
          ? "text-gray-700 hover:text-[#EF4A50]" 
          : "text-white hover:text-white/80"
      }`}
    >
      {text}
    </Link>
  </motion.div>
);

const NavDropdown = ({ text, items, isScrolled, isTransparent, navigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group" onMouseLeave={() => setIsOpen(false)}>
      <motion.button
        className={`flex items-center space-x-1 text-sm font-medium transition-colors ${
          !isTransparent || isScrolled 
            ? "text-gray-700 hover:text-[#EF4A50]" 
            : "text-white hover:text-white/80"
        }`}
        onMouseEnter={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>{text}</span>
        <ChevronDown className="w-4 h-4" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute left-0 w-64 mt-2 bg-white border border-gray-100 shadow-xl rounded-xl"
            style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.1))" }}
          >
            <div className="px-3 py-2">
              {Array.isArray(items) && items.map((item, index) => (
                <motion.div
                  key={index}
                  onClick={() => {
                    if (item.path) {
                      navigate(item.path);
                      setIsOpen(false);
                    }
                  }}
                  className="flex items-start px-3 py-3 space-x-3 text-sm text-gray-700 transition-colors rounded-lg cursor-pointer hover:bg-gray-50"
                  whileHover={{ x: 4 }}
                >
                  <div className="p-2 rounded-lg bg-[#EF4A50]/10">
                    <div className="text-[#EF4A50]">
                      {item.icon || <Zap className="w-4 h-4" />}
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{item.name || item}</p>
                    {item.description && (
                      <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileNavLink = ({ text, to, onClick }) => (
  <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
    <Link 
      to={to} 
      className="block text-lg font-medium text-gray-900"
      onClick={onClick}
    >
      {text}
    </Link>
  </motion.div>
);

const MobileNavDropdown = ({ text, items, setMobileMenuOpen, navigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-4">
      <motion.button
        className="flex items-center justify-between w-full text-lg font-medium text-gray-900"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ x: 4 }}
        whileTap={{ scale: 0.98 }}
      >
        <span>{text}</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="pl-4 space-y-3"
          >
            {Array.isArray(items) && items.map((item, index) => (
              <motion.div
                key={index}
                onClick={() => {
                  if (item.path) {
                    navigate(item.path);
                    setMobileMenuOpen(false);
                  }
                }}
                className="flex items-start space-x-3 py-3 text-gray-600 hover:text-[#EF4A50]"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-2 rounded-lg bg-[#EF4A50]/10">
                  <div className="text-[#EF4A50]">
                    {item.icon || <Zap className="w-4 h-4" />}
                  </div>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{item.name || item}</p>
                  {item.description && (
                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;