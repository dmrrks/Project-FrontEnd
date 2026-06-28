import { Code2, Smartphone, Cloud, ShieldCheck } from 'lucide-react';

const Services = () => {
  return (
    <div id="services" className="bg-gray-400 min-h-[calc(100vh-80px-112px)] py-20 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gray-700 text-sm font-semibold tracking-wider uppercase mb-3">
            SERVICES
          </h2>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Solutions tailored to<br />your business needs.
          </h1>
          <p className="text-lg text-gray-700">
            We offer a wide range of services to help you build, scale, and transform your ideas into reality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <div className="bg-white p-8 rounded-sm shadow-md h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="mb-6 text-black">
              <Code2 className="w-10 h-10" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-black mb-4 pr-4">
              Custom Software<br />Development
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We build custom software solutions tailored to your business requirements.
            </p>
          </div>

          <div className="bg-white p-8 rounded-sm shadow-md h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="mb-6 text-black">
              <Smartphone className="w-10 h-10" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-black mb-4 pr-4">
              Mobile App<br />Development
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We create powerful and user-friendly mobile applications for iOS and Android.
            </p>
          </div>

          <div className="bg-white p-8 rounded-sm shadow-md h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="mb-6 text-black">
              <Cloud className="w-10 h-10" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">
              Cloud Solutions
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We help businesses migrate, manage, and optimize their operations in the cloud.
            </p>
          </div>

          <div className="bg-white p-8 rounded-sm shadow-md h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="mb-6 text-black">
              <ShieldCheck className="w-10 h-10" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">
              IT Consulting
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We provide expert advice and strategies to help you make the right technology decisions.
            </p>
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

export default Services;
