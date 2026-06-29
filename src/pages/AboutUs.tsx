import { Users, Eye, Lightbulb, Target } from 'lucide-react';

const AboutUs = () => {
  return (
    <div id="about" className="bg-gray-400 min-h-[calc(100vh-80px-112px)] py-16 flex flex-col justify-center">
      {/* Hero section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-lg font-medium text-gray-800 mb-2">About Us</h2>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
            We Build Software<br />
            Solutions That Help<br />
            Business Grow.
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-xl">
            Damiungo is a software development company passionate about creating innovative, reliable, and scalable solutions for businesses of all sizes.
          </p>
          <button className="bg-black text-white px-6 py-2.5 rounded-md font-medium hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl">
            Learn more about us
          </button>
        </div>
      </div>

      {/* Values section with lift-on-hover cards */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            <div className="p-4 rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="mb-4 text-black">
                <Users className="w-12 h-12" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with technology solutions that drive efficiency and growth.
              </p>
            </div>

            <div className="p-4 rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="mb-4 text-black">
                <Eye className="w-12 h-12" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To be a leading software company known for innovation, quality, and customer success.
              </p>
            </div>

            <div className="p-4 rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="mb-4 text-black">
                <Lightbulb className="w-12 h-12" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Our Values</h3>
              <p className="text-gray-600">
                Innovation, Integrity, Collaboration, and Customer-Centricity are at the heart of what we do.
              </p>
            </div>

            <div className="p-4 rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="mb-4 text-black">
                <Target className="w-12 h-12" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Our Commitment</h3>
              <p className="text-gray-600">
                We are committed to delivering high-quality software solutions that make an impact.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
