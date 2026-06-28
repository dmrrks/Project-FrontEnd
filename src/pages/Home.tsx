import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import AboutUs from './AboutUs';
import Services from './Services';
import Products from './Products';
import Contact from './Contact';

const Home = () => {
  return (
    <>
      <div id="home" className="relative min-h-[calc(100vh-80px-112px)] flex items-center justify-center bg-gray-400 overflow-hidden">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-100 tracking-tight mb-4 drop-shadow-md">
            WHERE IDEAS BECOME APPLICATIONS
          </h1>

          <p className="text-xl sm:text-2xl text-gray-200 font-light mb-10 drop-shadow-sm">
            Presenting tomorrow's Technology today
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="#products"
              className="px-8 py-3 bg-black text-white font-bold rounded-md hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Explore products
            </Link>
            <Link
              to="#services"
              className="px-8 py-3 bg-black text-white font-bold rounded-md hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Explore services
            </Link>
          </div>
        </div>

        {/* Floating Chat Icon */}
        <button className="fixed bottom-8 right-8 bg-[#ff8c69] hover:bg-[#ff7a52] text-black p-4 rounded-full shadow-lg transition-transform hover:scale-110 z-50">
          <MessageCircle className="h-8 w-8" />
          <span className="sr-only">Open Chat</span>
        </button>
      </div>

      {/* Other Sections */}
      <AboutUs />
      <Services />
      <Products />
      <Contact />
    </>
  );
};

export default Home;
