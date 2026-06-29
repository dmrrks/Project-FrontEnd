import { Code2, Smartphone, Cloud, ShieldCheck } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import SectionDivider from '../components/SectionDivider';

const Services = () => {
  const { ref, isInView } = useInView({ threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  return (
    <div id="services" className="bg-gray-50 min-h-[calc(100vh-80px)] pt-24 flex flex-col justify-between relative scroll-mt-20">
      
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16 flex-grow">
        
        {/* Header Section */}
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block bg-white text-gray-800 border border-gray-200 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            SERVICES
          </span>
          <div className="w-16 h-1 bg-[#c4a77d] rounded-full mx-auto mb-6"></div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Solutions tailored to <br className="hidden sm:inline" />your business needs.
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We offer a comprehensive suite of services to help you build, scale, and transform your innovative ideas into market-leading digital realities.
          </p>
        </div>

        {/* Services Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl border border-gray-100 border-t-4 border-t-[#c4a77d] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
            <div className="mb-8 text-gray-800 group-hover:text-[#c4a77d] transition-colors duration-300">
              <Code2 className="w-11 h-11" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 pr-4 group-hover:text-[#c4a77d] transition-colors">
              Custom Software <br />Development
            </h3>
            <p className="text-gray-600 leading-relaxed flex-grow text-sm sm:text-base">
              We engineer custom, enterprise-grade software solutions precisely matched to your operational workflows and business goals.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl border border-gray-100 border-t-4 border-t-[#c4a77d] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
            <div className="mb-8 text-gray-800 group-hover:text-[#c4a77d] transition-colors duration-300">
              <Smartphone className="w-11 h-11" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 pr-4 group-hover:text-[#c4a77d] transition-colors">
              Mobile App <br />Development
            </h3>
            <p className="text-gray-600 leading-relaxed flex-grow text-sm sm:text-base">
              We create beautiful, ultra-responsive, and intuitive mobile applications for both iOS and Android platforms.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl border border-gray-100 border-t-4 border-t-[#c4a77d] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
            <div className="mb-8 text-gray-800 group-hover:text-[#c4a77d] transition-colors duration-300">
              <Cloud className="w-11 h-11" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#c4a77d] transition-colors">
              Cloud Solutions
            </h3>
            <p className="text-gray-600 leading-relaxed flex-grow text-sm sm:text-base">
              We assist enterprises in securely migrating, architecting, and optimizing their infrastructure and operations in the cloud.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl border border-gray-100 border-t-4 border-t-[#c4a77d] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
            <div className="mb-8 text-gray-800 group-hover:text-[#c4a77d] transition-colors duration-300">
              <ShieldCheck className="w-11 h-11" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#c4a77d] transition-colors">
              IT Consulting
            </h3>
            <p className="text-gray-600 leading-relaxed flex-grow text-sm sm:text-base">
              We offer strategic technology guidance and expert advisory to ensure you make future-proof IT investments.
            </p>
          </div>

        </div>

        <div className={`text-center transition-all duration-700 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button type="button" className="bg-black text-white px-9 py-4 rounded-md font-bold hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            View all Services
          </button>
        </div>

      </div>

      {/* Bottom Section Divider bridging to Products (white bg) */}
      <div className="w-full pointer-events-none">
        <SectionDivider fillColor="fill-white" bgColor="bg-gray-50" />
      </div>
    </div>
  );
};

export default Services;
