import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { GlassCard, GlowButton } from '../components/common/UI';

const ContactSection = ({ id }) => {
  return (
    <section id={id} className="py-32 relative overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">GET IN TOUCH</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-rich-dark mb-10 leading-tight">
              Let's Start Your <br />
              <span className="text-primary italic">Journey</span>
            </h2>
            <p className="text-xl text-rich-dark/60 mb-12 leading-relaxed">
              Our luxury property specialists are ready to help you find the perfect sanctuary or investment.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-center group">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-[10px] text-rich-dark/40 font-bold uppercase tracking-widest mb-1">Call Us</div>
                  <div className="text-xl font-bold tracking-tight text-rich-dark group-hover:text-primary transition-colors">+1 (800) AETHERNEST</div>
                </div>
              </div>

              <div className="flex gap-6 items-center group">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-[10px] text-rich-dark/40 font-bold uppercase tracking-widest mb-1">Email Us</div>
                  <div className="text-xl font-bold tracking-tight text-rich-dark group-hover:text-primary transition-colors">hello@aethernest.com</div>
                </div>
              </div>

              <div className="flex gap-6 items-center group">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-[10px] text-rich-dark/40 font-bold uppercase tracking-widest mb-1">Office</div>
                  <div className="text-xl font-bold tracking-tight text-rich-dark group-hover:text-primary transition-colors">Palm Jumeirah, Dubai, UAE</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-10 border-gray-100 bg-white shadow-2xl shadow-black/5 !rounded-[2.5rem]">
              <form className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-rich-dark/40 ml-2">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-6 text-sm font-bold text-rich-dark focus:outline-none focus:border-primary focus:bg-white transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-rich-dark/40 ml-2">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-6 text-sm font-bold text-rich-dark focus:outline-none focus:border-primary focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-rich-dark/40 ml-2">Subject</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-6 text-sm font-bold text-rich-dark focus:outline-none focus:border-primary appearance-none cursor-pointer">
                    <option>Property Inquiry</option>
                    <option>Investment Consultation</option>
                    <option>Selling Your Property</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-rich-dark/40 ml-2">Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell us about your dream home..." 
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-6 text-sm font-bold text-rich-dark focus:outline-none focus:border-primary focus:bg-white transition-all resize-none"
                  />
                </div>

                <GlowButton variant="emerald" className="w-full py-5 text-xs mt-2 shadow-xl shadow-primary/20">
                  Send Message <Send size={18} />
                </GlowButton>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
