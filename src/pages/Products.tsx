import { BarChart3, ListTodo, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import SectionDivider from '../components/SectionDivider';

const Products = () => {
  const { ref, isInView } = useInView({ threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  return (
    <div id="products" className="bg-white min-h-[calc(100vh-80px)] pt-24 flex flex-col justify-between relative scroll-mt-20">
      
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16 flex-grow">
        
        {/* Header Section */}
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block bg-gray-100 text-gray-800 border border-gray-200 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            PRODUCTS
          </span>
          <div className="w-16 h-1 bg-[#c4a77d] rounded-full mx-auto mb-6"></div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Powerful products <br className="hidden sm:inline" />built for productivity.
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our enterprise products are architected to simplify intricate processes, dramatically improve operational efficiency, and help businesses scale effortlessly.
          </p>
        </div>

        {/* Products Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          <div className="bg-gray-50 border border-gray-100 p-10 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full group">
            <div className="bg-gray-900 text-white group-hover:bg-[#c4a77d] w-14 h-14 flex items-center justify-center rounded-xl mb-8 shadow transition-colors duration-300">
              <span className="text-2xl font-black">D</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#c4a77d] transition-colors">
              Damiungo CRM
            </h3>
            <p className="text-gray-600 leading-relaxed flex-grow text-sm sm:text-base mb-6">
              An all-in-one business management solution to streamline your operations, automate sales funnels, and manage enterprise client lifecycles.
            </p>
            <Link to="#" className="inline-flex items-center text-gray-900 group-hover:text-[#c4a77d] font-bold hover:underline group/link transition-colors">
              Learn more <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </Link>
          </div>

          <div className="bg-gray-50 border border-gray-100 p-10 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full group">
            <div className="bg-gray-900 text-white group-hover:bg-[#c4a77d] w-14 h-14 flex items-center justify-center rounded-xl mb-8 shadow transition-colors duration-300">
              <BarChart3 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#c4a77d] transition-colors">
              Damiungo ERP
            </h3>
            <p className="text-gray-600 leading-relaxed flex-grow text-sm sm:text-base mb-6">
              An enterprise resource planning platform designed to unify inventory, human resources, accounting, and predictive business intelligence.
            </p>
            <Link to="#" className="inline-flex items-center text-gray-900 group-hover:text-[#c4a77d] font-bold hover:underline group/link transition-colors">
              Learn more <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </Link>
          </div>

          <div className="bg-gray-50 border border-gray-100 p-10 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full group">
            <div className="bg-gray-900 text-white group-hover:bg-[#c4a77d] w-14 h-14 flex items-center justify-center rounded-xl mb-8 shadow transition-colors duration-300">
              <ListTodo className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#c4a77d] transition-colors">
              Damiungo Project
            </h3>
            <p className="text-gray-600 leading-relaxed flex-grow text-sm sm:text-base mb-6">
              A robust project management solution built to keep cross-functional enterprise teams highly organized, agile, and fiercely productive.
            </p>
            <Link to="#" className="inline-flex items-center text-gray-900 group-hover:text-[#c4a77d] font-bold hover:underline group/link transition-colors">
              Learn more <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </Link>
          </div>

        </div>

        <div className={`text-center transition-all duration-700 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button type="button" className="bg-black text-white px-9 py-4 rounded-md font-bold hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            View all Products
          </button>
        </div>

      </div>

      {/* Bottom Section Divider bridging to Contact (gray-900 bg) */}
      <div className="w-full pointer-events-none">
        <SectionDivider fillColor="fill-gray-900" bgColor="bg-white" />
      </div>
    </div>
  );
};

export default Products;
