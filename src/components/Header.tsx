import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';
import { useActiveSection } from '../hooks/useActiveSection';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sectionIds = useMemo(() => ['home', 'about', 'services', 'products', 'contact'], []);
  const activeSection = useActiveSection(sectionIds);

  // Scroll to hash when location changes
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/#home', id: 'home' },
    { name: 'About Us', path: '/#about', id: 'about' },
    { name: 'Services', path: '/#services', id: 'services' },
    { name: 'Products', path: '/#products', id: 'products' },
    { name: 'Contact', path: '/#contact', id: 'contact' },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/#home" className="text-2xl font-extrabold tracking-tight text-black flex items-center gap-2">
              <span>DAMIUNGO</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id && location.pathname === '/';
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-black font-semibold' : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#c4a77d] transition-transform duration-300 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Auth Buttons & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <Link to="/login" className="hidden sm:inline-block text-gray-800 font-medium hover:text-black hover:underline text-sm transition-colors">
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-gray-100 hover:bg-gray-200 text-black px-5 py-2 rounded-full font-medium text-sm border border-gray-300 shadow-sm hover:shadow transition-all duration-200"
            >
              SignUp
            </Link>
            
            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 text-gray-600 hover:text-black focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id && location.pathname === '/';
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive ? 'bg-[#c4a77d]/10 text-black font-bold border-l-4 border-[#c4a77d]' : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-3 sm:hidden">
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 text-gray-800 font-medium hover:bg-gray-50 rounded-md"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
