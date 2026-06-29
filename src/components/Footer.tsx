import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-extrabold tracking-tight text-black mb-1">DAMIUNGO</h2>
            <p className="text-sm text-gray-600">© 2026 Damiungo. All rights reserved</p>
          </div>
          <div className="flex space-x-6">
            <Link to="#" className="text-gray-600 hover:text-black font-medium transition-colors">
              LinkedIn
            </Link>
            <Link to="#" className="text-gray-600 hover:text-black font-medium transition-colors">
              Facebook
            </Link>
            <Link to="#" className="text-gray-600 hover:text-black font-medium transition-colors">
              Twitter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
