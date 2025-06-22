import React from 'react';
import { Link } from 'react-router-dom';
import { PenTool, Mail, Phone, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-950 border-t border-teal-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-primary p-2 rounded-xl shadow-glow animate-pulse-glow">
                <PenTool className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-serif font-semibold text-text-heading">Sarah Mitchell</span>
            </div>
            <p className="text-text-body text-sm leading-relaxed font-sans mb-6">
              Professional copywriter and content strategist helping brands communicate clearly and convert effectively.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-text-light hover:text-text-accent transition-colors p-2 rounded-lg hover:bg-teal-500/10 hover:shadow-cyber"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-serif font-semibold text-text-heading uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Portfolio', path: '/portfolio' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-text-body hover:text-text-accent text-sm transition-colors font-sans hover:translate-x-1 transform duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-serif font-semibold text-text-heading uppercase tracking-wider mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                'Lead Gen Funnels',
                'Ecom Sales Funnels',
                'AI Automation',
                'Ad Copy Testing',
              ].map((service) => (
                <li key={service}>
                  <span className="text-text-body text-sm font-sans">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-serif font-semibold text-text-heading uppercase tracking-wider mb-6">
              Get In Touch
            </h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <div className="bg-teal-500/20 p-2 rounded-lg border border-teal-500/30">
                  <Mail className="h-4 w-4 text-text-accent" />
                </div>
                <span className="text-text-body text-sm font-sans">hello@sarahmitchell.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-teal-500/20 p-2 rounded-lg border border-teal-500/30">
                  <Phone className="h-4 w-4 text-text-accent" />
                </div>
                <span className="text-text-body text-sm font-sans">+1 (555) 123-4567</span>
              </div>
            </div>

            <Link
              to="/booking"
              className="bg-gradient-primary text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gradient-primary-hover hover:shadow-glow transition-all duration-300 transform hover:scale-105 inline-block font-sans animate-pulse-glow"
            >
              Start Your Project
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-teal-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-light text-sm font-sans">
              © 2024 Sarah Mitchell. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-text-light hover:text-text-accent text-sm transition-colors font-sans">
                Privacy Policy
              </Link>
              <Link to="#" className="text-text-light hover:text-text-accent text-sm transition-colors font-sans">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;