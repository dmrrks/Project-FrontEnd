import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Header = () => {
  const location = useLocation();

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
    { name: 'Home', path: '/#home' },
    { name: 'About Us', path: '/#about' },
    { name: 'Services', path: '/#services' },
    { name: 'Products', path: '/#products' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/#home" className="text-2xl font-extrabold tracking-tight text-black">
              DAMIUNGO
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-gray-700 hover:text-black px-1 py-2 text-sm font-medium transition-colors`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-gray-900 font-medium hover:underline text-sm">
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-1.5 rounded-full font-medium text-sm border border-gray-400 transition-colors"
            >
              SignUp
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
