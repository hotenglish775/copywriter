import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PenTool } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
      isScrolled 
        ? 'bg-navy-950/95 backdrop-blur-cyber border-b border-teal-500/20 shadow-glow' 
        : 'bg-navy-950/90 backdrop-blur-cyber border-b border-teal-500/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-primary p-2 rounded-xl group-hover:shadow-glow transition-all duration-300 animate-pulse-glow">
              <PenTool className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-serif font-semibold text-text-heading group-hover:text-text-accent transition-colors duration-300">
              Revolution AI CopyWriters
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 relative py-2 px-4 rounded-lg ${
                  location.pathname === link.path
                    ? 'text-text-accent bg-teal-500/10 shadow-cyber'
                    : 'text-text-body hover:text-text-accent hover:bg-teal-500/5'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-primary rounded-full shadow-glow" />
                )}
              </Link>
            ))}
            <Link
              to="/booking"
              className="bg-gradient-primary text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gradient-primary-hover hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105 animate-pulse-glow"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-text-body hover:text-text-accent hover:bg-teal-500/10 transition-all duration-300 z-[10000]"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-navy-950/98 backdrop-blur-cyber border-t border-teal-500/20 rounded-b-2xl shadow-glow-lg absolute left-4 right-4 top-20 z-[9998]">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'text-text-accent bg-teal-500/10 shadow-cyber'
                      : 'text-text-body hover:text-text-accent hover:bg-teal-500/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/booking"
                className="block px-4 py-3 mt-4 bg-gradient-primary text-white rounded-xl text-base font-medium text-center hover:bg-gradient-primary-hover transition-all duration-300 shadow-glow"
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;