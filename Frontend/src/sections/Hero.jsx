import { motion } from 'framer-motion';
import { Search, MapPin, Filter, Sparkles, TrendingUp, Users, ShieldCheck } from 'lucide-react';
import { GlowButton, GlassCard } from '../components/common/UI';

const Hero = ({ id }) => {
  return (
    <section id={id} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
      {/* Background Image with Clean Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Real Estate" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-white" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/5 text-primary text-[10px] font-bold tracking-[0.2em] mb-8 border border-primary/10"
            >
              <Sparkles size={12} />
              DISHA REALTY HOWRAH
            </motion.div>
            
            <h1 className="text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 text-rich-dark">
              Your Trusted <br />
              <span className="text-primary">Partner.</span>
            </h1>
            
            <p className="text-lg text-rich-dark/50 max-w-lg mb-12 leading-relaxed font-medium">
              Get hassle-free home loan assistance, property guidance, and expert real estate consultancy in Howrah with Disha Realty.
            </p>

            {/* Quick Stats */}
            <div className="flex gap-12 pt-4 border-t border-gray-50">
              <div>
                <div className="text-2xl font-bold text-rich-dark">98+</div>
                <div className="text-[10px] text-rich-dark/30 font-bold uppercase tracking-widest mt-1">Happy Clients</div>
              </div>
              <div className="w-[1px] h-10 bg-gray-100" />
              <div>
                <div className="text-2xl font-bold text-rich-dark">11+</div>
                <div className="text-[10px] text-rich-dark/30 font-bold uppercase tracking-widest mt-1">Years Exp.</div>
              </div>
            </div>
          </motion.div>

          {/* Search Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-xl lg:ml-auto"
          >
            <div className="bg-white rounded-[3rem] p-12 shadow-premium border border-gray-50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary/20" />
              
              <div className="flex gap-2 mb-10 p-1.5 bg-gray-50 rounded-2xl">
                <button className="flex-1 py-4 rounded-xl bg-white text-[11px] font-bold text-rich-dark shadow-premium uppercase tracking-widest">Home Loan</button>
                <button className="flex-1 py-4 rounded-xl hover:bg-white/50 text-[11px] font-bold text-rich-dark/30 transition-all uppercase tracking-widest">Property</button>
              </div>

              <div className="space-y-8">
                <div className="relative">
                  <label className="block text-[10px] font-bold text-rich-dark/30 uppercase tracking-[0.2em] mb-3 ml-2">Preferred Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/40" size={18} />
                    <input 
                      type="text" 
                      placeholder="e.g. Kadamtala, Howrah" 
                      className="w-full bg-gray-50 border-none rounded-2xl py-5 pl-16 pr-6 text-sm font-bold text-rich-dark focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-rich-dark/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-rich-dark/30 uppercase tracking-[0.2em] mb-3 ml-2">Property Type</label>
                    <select className="w-full bg-gray-50 border-none rounded-2xl py-5 px-6 text-sm font-bold text-rich-dark focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer">
                      <option>Villas</option>
                      <option>Apartments</option>
                      <option>Penthouses</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-rich-dark/30 uppercase tracking-[0.2em] mb-3 ml-2">Price Range</label>
                    <select className="w-full bg-gray-50 border-none rounded-2xl py-5 px-6 text-sm font-bold text-rich-dark focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer">
                      <option>$1M - $5M</option>
                      <option>$5M - $20M</option>
                      <option>$20M+</option>
                    </select>
                  </div>
                </div>

                <button className="w-full bg-primary text-white py-6 rounded-[1.5rem] font-bold text-xs uppercase tracking-[0.2em] shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 flex items-center justify-center gap-3 active:scale-95">
                  Get Free Consultation
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30"
      >
        <div className="w-[1px] h-12 bg-rich-dark rounded-full" />
        <span className="text-[10px] font-bold uppercase tracking-widest">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
