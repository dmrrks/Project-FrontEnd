import { Mail, Phone, MapPin } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Contact = () => {
  const { ref, isInView } = useInView({ threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  return (
    <div id="contact" className="bg-gray-900 min-h-[calc(100vh-80px)] py-24 flex flex-col justify-center relative scroll-mt-20">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column - Contact Info */}
          <div className={`lg:w-1/2 flex flex-col justify-center transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="flex flex-col items-start">
              <span className="bg-[#c4a77d]/10 text-[#c4a77d] border border-[#c4a77d]/30 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
                CONTACT US
              </span>
              <div className="w-16 h-1 bg-[#c4a77d] rounded-full mb-8"></div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
              Let's build something <br className="hidden sm:inline" />great together.
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-14 max-w-xl leading-relaxed">
              Have a pioneering project in mind or need expert technical advisory? We'd love to collaborate and help you succeed.
            </p>

            <div className="space-y-10">
              <div className="flex items-center group">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#c4a77d] mr-6 group-hover:bg-[#c4a77d] group-hover:text-white transition-all duration-300 shadow-sm">
                  <Mail className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 block mb-1">Email Us</span>
                  <div className="text-xl font-bold text-white group-hover:text-[#c4a77d] transition-colors">
                    damiungo@gmail.com
                  </div>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#c4a77d] mr-6 group-hover:bg-[#c4a77d] group-hover:text-white transition-all duration-300 shadow-sm">
                  <Phone className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 block mb-1">Call Us</span>
                  <div className="text-xl font-bold text-white group-hover:text-[#c4a77d] transition-colors">
                    +94 123 456 7890
                  </div>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#c4a77d] mr-6 group-hover:bg-[#c4a77d] group-hover:text-white transition-all duration-300 shadow-sm">
                  <MapPin className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 block mb-1">Visit Us</span>
                  <div className="text-xl font-bold text-white group-hover:text-[#c4a77d] transition-colors">
                    123, TC Garden, Battaramulla, Sri Lanka.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className={`lg:w-1/2 w-full transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-8">Send us a message</h3>
              <form className="space-y-6">
                
                <div>
                  <label htmlFor="name" className="sr-only">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-5 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#c4a77d] focus:border-transparent outline-none shadow-inner transition-all text-sm sm:text-base"
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
                    className="w-full px-5 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#c4a77d] focus:border-transparent outline-none shadow-inner transition-all text-sm sm:text-base"
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
                    className="w-full px-5 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#c4a77d] focus:border-transparent outline-none shadow-inner transition-all text-sm sm:text-base"
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
                    className="w-full px-5 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#c4a77d] focus:border-transparent outline-none shadow-inner transition-all text-sm sm:text-base resize-none"
                    required
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-[#c4a77d] hover:bg-[#b5966c] text-white px-10 py-4 rounded-xl font-bold transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 w-full sm:w-auto text-sm sm:text-base"
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
