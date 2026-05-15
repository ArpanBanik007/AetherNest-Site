import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare, Clock, Globe, ArrowRight, Send, Loader2 } from 'lucide-react';
import { GlowButton, GlassCard } from '../../components/common/UI';
import useUIStore from '../../store/useUIStore';

const Contact = () => {
  const { addToast } = useUIStore();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setSubmitting(false);
    addToast({ 
      title: 'Inquiry Transmitted', 
      message: 'A private wealth advisor will contact you within 24 hours.', 
      type: 'success' 
    });
    e.target.reset();
  };

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-bold tracking-[0.4em] text-[10px] uppercase mb-6 block"
          >
            CONTACT OUR ADVISORS
          </motion.span>
          <h1 className="text-4xl md:text-7xl font-extrabold text-rich-dark mb-8 tracking-tight">
            Let's Start Your <br />
            <span className="text-primary">Property Journey.</span>
          </h1>
          <p className="text-rich-dark/40 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
            Our consultants are here to assist you with home loans, property verification, and finding your ideal home in Howrah and Kolkata.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-10">
            <h3 className="text-2xl font-extrabold text-rich-dark tracking-tight mb-12">Visit Our Office</h3>
            
            {[
              { icon: <MapPin size={24} />, title: "Head Office", details: "Kadamtala Bazar Road, Howrah, West Bengal" },
              { icon: <Phone size={24} />, title: "Support Line", details: "+91 [Phone Number]" },
              { icon: <Mail size={24} />, title: "Support Portal", details: "contact@disharealty.com" },
              { icon: <Clock size={24} />, title: "Availability", details: "Mon - Sat: 10 AM - 8 PM" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-primary shadow-premium group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-rich-dark mb-1 uppercase tracking-widest">{item.title}</h4>
                  <p className="text-rich-dark/40 font-medium text-sm leading-relaxed">{item.details}</p>
                </div>
              </motion.div>
            ))}

            <div className="pt-12 border-t border-gray-100">
              <h4 className="text-[10px] font-bold text-rich-dark/20 uppercase tracking-[0.3em] mb-8">Follow Us</h4>
              <div className="flex gap-4">
                {['Facebook', 'Instagram', 'LinkedIn', 'YouTube'].map((social) => (
                  <button key={social} className="px-6 py-3 rounded-xl bg-gray-50 text-[10px] font-bold text-rich-dark/30 hover:text-primary hover:bg-white hover:shadow-premium transition-all uppercase tracking-widest">
                    {social}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <GlassCard className="!p-12 md:!p-20 !rounded-[4rem] border-gray-100 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary/20" />
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-primary/10 transition-colors" />
              
              <div className="mb-16">
                <h3 className="text-3xl font-extrabold text-rich-dark tracking-tight mb-4">Inquiry Form</h3>
                <p className="text-rich-dark/30 font-medium">Tell us about your requirements and our team will get back to you shortly.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold text-rich-dark/20 uppercase tracking-[0.3em] ml-2">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Your Name" 
                      className="w-full bg-gray-50 border-none rounded-2xl py-5 px-8 text-sm font-bold text-rich-dark focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-rich-dark/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold text-rich-dark/20 uppercase tracking-[0.3em] ml-2">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="email@example.com" 
                      className="w-full bg-gray-50 border-none rounded-2xl py-5 px-8 text-sm font-bold text-rich-dark focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-rich-dark/10"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold text-rich-dark/20 uppercase tracking-[0.3em] ml-2">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+91 00000 00000" 
                      className="w-full bg-gray-50 border-none rounded-2xl py-5 px-8 text-sm font-bold text-rich-dark focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-rich-dark/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold text-rich-dark/20 uppercase tracking-[0.3em] ml-2">I am interested in</label>
                    <select className="w-full bg-gray-50 border-none rounded-2xl py-5 px-8 text-sm font-bold text-rich-dark focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all outline-none appearance-none">
                      <option>Home Loan Assistance</option>
                      <option>Property Purchase</option>
                      <option>Property Selling</option>
                      <option>Registration Support</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] font-bold text-rich-dark/20 uppercase tracking-[0.3em] ml-2">Message</label>
                  <textarea 
                    rows="6"
                    required
                    placeholder="How can we help you?" 
                    className="w-full bg-gray-50 border-none rounded-3xl py-6 px-8 text-sm font-bold text-rich-dark focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-rich-dark/10 resize-none"
                  ></textarea>
                </div>

                <div className="pt-8">
                  <GlowButton 
                    variant="emerald" 
                    disabled={submitting}
                    className="w-full py-6 text-[10px] uppercase tracking-[0.3em] shadow-xl shadow-primary/20 flex items-center justify-center gap-4 group disabled:opacity-70"
                  >
                    {submitting ? (
                      <>Sending Inquiry <Loader2 size={18} className="animate-spin" /></>
                    ) : (
                      <>Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                    )}
                  </GlowButton>
                  <p className="text-center text-[9px] font-bold text-rich-dark/20 uppercase tracking-[0.2em] mt-8">
                    By submitting, you agree to our <span className="text-primary hover:underline cursor-pointer">Privacy Policy</span> and <span className="text-primary hover:underline cursor-pointer">Terms of Service</span>.
                  </p>
                </div>
              </form>
            </GlassCard>
          </div>
        </div>

      </div>
    </div>
  );
};


export default Contact;
