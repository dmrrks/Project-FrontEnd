import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-400 min-h-[calc(100vh-80px-112px)] py-20 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column - Contact Info */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-gray-700 text-sm font-semibold tracking-wider uppercase mb-4">
              CONTACT US
            </h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Let's build something<br />great together.
            </h1>
            <p className="text-lg text-gray-700 mb-12">
              Have a project in mind or need more information?<br />We'd love to hear from you.
            </p>

            <div className="space-y-8">
              <div className="flex items-center">
                <div className="flex-shrink-0 text-black mr-6">
                  <Mail className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <div className="text-xl font-bold text-gray-900">
                  damiungo@gmail.com
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 text-black mr-6">
                  <Phone className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <div className="text-xl font-bold text-gray-900">
                  +94 123 456 7890
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 text-black mr-6">
                  <MapPin className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <div className="text-xl font-bold text-gray-900">
                  123, TC Garden, Battaramulla,<br />Sri Lanka.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:w-1/2">
            <div className="bg-white/40 backdrop-blur-md rounded-2xl p-8 sm:p-10 shadow-lg border border-white/30">
              <form className="space-y-6">
                
                <div>
                  <label htmlFor="name" className="sr-only">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-5 py-4 rounded-md border-none focus:ring-2 focus:ring-black outline-none shadow-sm text-gray-800 bg-white placeholder-gray-500 transition-shadow"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full px-5 py-4 rounded-md border-none focus:ring-2 focus:ring-black outline-none shadow-sm text-gray-800 bg-white placeholder-gray-500 transition-shadow"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="sr-only">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    className="w-full px-5 py-4 rounded-md border-none focus:ring-2 focus:ring-black outline-none shadow-sm text-gray-800 bg-white placeholder-gray-500 transition-shadow"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Your Message"
                    className="w-full px-5 py-4 rounded-md border-none focus:ring-2 focus:ring-black outline-none shadow-sm text-gray-800 bg-white placeholder-gray-500 transition-shadow resize-none"
                    required
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-black text-white px-8 py-3 rounded-md font-bold hover:bg-gray-800 transition-colors shadow-md hover:shadow-lg w-auto"
                  >
                    Send Message
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
