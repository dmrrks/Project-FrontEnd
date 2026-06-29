import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { useState, type MouseEvent, useRef } from 'react';
import AboutUs from './AboutUs';
import Services from './Services';
import Products from './Products';
import Contact from './Contact';
import SectionDivider from '../components/SectionDivider';

const Home = () => {
  const [bgPos, setBgPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setBgPos({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        id="home"
        ref={heroRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-center bg-gradient-to-br from-[#0f1115] via-[#1a1d24] to-[#252932] overflow-hidden scroll-mt-20"
      >
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10 py-20 flex-grow flex flex-col justify-center items-center">

          {/* Static Headline with organic diagonal gold shine clipped inside the text */}
          <div className="py-2">
            <h1
              className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 animate-fade-in-up animation-delay-100 select-none"
              style={{
                backgroundImage: isHovered
                  ? `linear-gradient(120deg, #ffffff 0%, #ffffff 40%, rgba(212,191,148,0.15) 43%, rgba(212,191,148,0.5) 46%, #d4bf94 49%, #d4bf94 51%, rgba(212,191,148,0.5) 54%, rgba(212,191,148,0.15) 57%, #ffffff 60%, #ffffff 100%)`
                  : 'none',
                backgroundColor: '#ffffff',
                backgroundSize: '250% 200%',
                backgroundPosition: `${100 - bgPos.x}% ${100 - bgPos.y}%`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              WHERE IDEAS BECOME <br className="hidden sm:inline" />
              APPLICATIONS
            </h1>
          </div>

          <p className="text-xl sm:text-2xl text-gray-300 font-light mb-12 max-w-3xl mx-auto drop-shadow-sm animate-fade-in-up animation-delay-200">
            Empowering businesses with innovative, scalable, and powerful software solutions crafted for the digital future.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto animate-fade-in-up animation-delay-300">
            <Link
              to="#products"
              className="w-full sm:w-auto px-9 py-4 bg-[#c4a77d] text-white font-bold rounded-md hover:bg-[#b5966c] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Explore Products
            </Link>
            <Link
              to="#services"
              className="w-full sm:w-auto px-9 py-4 bg-white/10 text-white font-bold rounded-md hover:bg-white/20 border border-white/20 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 backdrop-blur-sm"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Bottom Section Divider bridging to AboutUs (white bg) */}
        <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none">
          <SectionDivider fillColor="fill-white" />
        </div>

        {/* Floating Chat Icon */}
        <button className="fixed bottom-8 right-8 bg-[#ff8c69] hover:bg-[#ff7a52] text-black p-4 rounded-full shadow-lg transition-transform hover:scale-110 z-50 focus:outline-none">
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
