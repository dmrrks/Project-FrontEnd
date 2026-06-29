import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0f1115] text-gray-400 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Description */}
          <div className="space-y-4">
            <Link to="/#home" className="text-2xl font-extrabold tracking-tight text-white flex items-center gap-2">
              <span>DAMIUNGO</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed pr-4">
              Where ideas become applications. We build innovative, reliable, and scalable software solutions for businesses of all sizes.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#c4a77d] text-white flex items-center justify-center transition-colors duration-200">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#c4a77d] text-white flex items-center justify-center transition-colors duration-200">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#c4a77d] text-white flex items-center justify-center transition-colors duration-200">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 tracking-wide uppercase">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/#home" className="hover:text-[#c4a77d] transition-colors duration-200">Home</Link>
              </li>
              <li>
                <Link to="/#about" className="hover:text-[#c4a77d] transition-colors duration-200">About Us</Link>
              </li>
              <li>
                <Link to="/#services" className="hover:text-[#c4a77d] transition-colors duration-200">Services</Link>
              </li>
              <li>
                <Link to="/#products" className="hover:text-[#c4a77d] transition-colors duration-200">Products</Link>
              </li>
              <li>
                <Link to="/#contact" className="hover:text-[#c4a77d] transition-colors duration-200">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 tracking-wide uppercase">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#c4a77d] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">damiungo@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#c4a77d] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">+94 123 456 7890</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#c4a77d] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">123, TC Garden, Battaramulla, Sri Lanka.</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 tracking-wide uppercase">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Subscribe to our newsletter for the latest tech news and insights.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-4 py-2.5 rounded bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-[#c4a77d] text-sm"
                required
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded bg-[#c4a77d] hover:bg-[#b5966c] text-white font-bold text-sm transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800/80 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© 2026 Damiungo. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
