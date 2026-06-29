import { BarChart3, ListTodo, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div id="products" className="bg-gray-400 min-h-[calc(100vh-80px-112px)] py-20 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gray-700 text-sm font-semibold tracking-wider uppercase mb-3">
            PRODUCTS
          </h2>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Powerful products<br />built for productivity.
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our Products are designed to simplify processes, improve efficiency, and help businesses succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          <div className="bg-white p-10 rounded-sm shadow-md flex flex-col h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="bg-black text-white w-12 h-12 flex items-center justify-center rounded-md mb-8">
              <span className="text-xl font-bold">D</span>
            </div>
            <h3 className="text-xl font-bold text-black mb-4">
              Damiungo CRM
            </h3>
            <p className="text-gray-600 leading-relaxed flex-grow">
              An all-in-one business management solution to streamline your operations.
            </p>
            <Link to="#" className="inline-flex items-center text-black font-bold hover:underline mt-6 group">
              Learn more <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="bg-white p-10 rounded-sm shadow-md flex flex-col h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="bg-black text-white w-12 h-12 flex items-center justify-center rounded-md mb-8">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">
              Damiungo ERP
            </h3>
            <p className="text-gray-600 leading-relaxed flex-grow">
              A customer relationship management tool to help you connect and grow with your customers.
            </p>
            <Link to="#" className="inline-flex items-center text-black font-bold hover:underline mt-6 group">
              Learn more <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="bg-white p-10 rounded-sm shadow-md flex flex-col h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="bg-black text-white w-12 h-12 flex items-center justify-center rounded-md mb-8">
              <ListTodo className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">
              Damiungo Project
            </h3>
            <p className="text-gray-600 leading-relaxed flex-grow">
              A project management solution designed to keep your teams organized and productive.
            </p>
            <Link to="#" className="inline-flex items-center text-black font-bold hover:underline mt-6 group">
              Learn more <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

        </div>

        <div className="text-center">
          <button className="bg-black text-white px-8 py-3 rounded-md font-bold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl">
            View all Services
          </button>
        </div>

      </div>
    </div>
  );
};

export default Products;
