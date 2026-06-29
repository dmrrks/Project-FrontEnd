import { Users, Eye, Lightbulb, Target } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import SectionDivider from '../components/SectionDivider';

const AboutUs = () => {
  const { ref, isInView } = useInView({ threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  return (
    <div id="about" className="bg-white min-h-[calc(100vh-80px)] pt-24 flex flex-col justify-between relative scroll-mt-20">
      
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16 flex-grow">
        
        {/* Top Header Section */}
        <div className={`max-w-3xl mb-20 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col items-start mb-6">
            <span className="bg-gray-100 text-gray-800 border border-gray-200 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
              About Us
            </span>
            <div className="w-16 h-1 bg-[#c4a77d] rounded-full"></div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-8">
            We Build Software <br />
            Solutions That Help <br />
            Businesses Grow.
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
            Damiungo is a software development company passionate about creating innovative, reliable, and scalable solutions for businesses of all sizes. We transform complex challenges into elegant digital experiences.
          </p>
          
          <button type="button" className="bg-black text-white px-8 py-3.5 rounded-md font-bold hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Learn more about us
          </button>
        </div>

        {/* Values section with lift-on-hover cards */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          <div className="bg-gray-50 border border-gray-100 p-8 rounded-xl hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group flex flex-col">
            <div className="w-14 h-14 rounded-xl bg-gray-200 group-hover:bg-[#c4a77d] text-gray-900 group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-6 shadow-sm">
              <Users className="w-7 h-7" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#c4a77d] transition-colors">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed flex-grow text-sm sm:text-base">
              To empower businesses with technology solutions that drive efficiency, productivity, and sustainable growth.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-100 p-8 rounded-xl hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group flex flex-col">
            <div className="w-14 h-14 rounded-xl bg-gray-200 group-hover:bg-[#c4a77d] text-gray-900 group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-6 shadow-sm">
              <Eye className="w-7 h-7" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#c4a77d] transition-colors">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed flex-grow text-sm sm:text-base">
              To be a leading software company known globally for uncompromised innovation, absolute quality, and customer success.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-100 p-8 rounded-xl hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group flex flex-col">
            <div className="w-14 h-14 rounded-xl bg-gray-200 group-hover:bg-[#c4a77d] text-gray-900 group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-6 shadow-sm">
              <Lightbulb className="w-7 h-7" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#c4a77d] transition-colors">Our Values</h3>
            <p className="text-gray-600 leading-relaxed flex-grow text-sm sm:text-base">
              Innovation, Integrity, Collaboration, and Customer-Centricity form the bedrock of every decision we make.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-100 p-8 rounded-xl hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group flex flex-col">
            <div className="w-14 h-14 rounded-xl bg-gray-200 group-hover:bg-[#c4a77d] text-gray-900 group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-6 shadow-sm">
              <Target className="w-7 h-7" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#c4a77d] transition-colors">Our Commitment</h3>
            <p className="text-gray-600 leading-relaxed flex-grow text-sm sm:text-base">
              We are committed to delivering high-quality, dependable software solutions that make a tangible business impact.
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Section Divider bridging to Services (gray-50 bg) */}
      <div className="w-full pointer-events-none">
        <SectionDivider fillColor="fill-gray-50" bgColor="bg-white" />
      </div>
    </div>
  );
};

export default AboutUs;
