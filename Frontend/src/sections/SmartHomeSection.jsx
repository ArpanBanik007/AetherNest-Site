import { motion } from 'framer-motion';
import { Cpu, Lightbulb, ShieldAlert, Sun, BatteryCharging, Mic, Smartphone, Thermometer } from 'lucide-react';
import { GlassCard } from '../components/common/UI';

const features = [
  {
    icon: ShieldAlert,
    title: "11+ Years Experience",
    desc: "A decade of expertise in providing top-notch real estate and home loan solutions.",
    color: "text-emerald-500"
  },
  {
    icon: Lightbulb,
    title: "Expert Guidance",
    desc: "Professional advice for first-time home buyers and seasoned investors alike.",
    color: "text-emerald-500"
  },
  {
    icon: Sun,
    title: "Transparent Process",
    desc: "Clear and honest communication at every step of your property journey.",
    color: "text-emerald-500"
  },
  {
    icon: Cpu,
    title: "Fast Loan Approval",
    desc: "Quick processing and coordination with major banks for hassle-free loans.",
    color: "text-emerald-500"
  },
  {
    icon: BatteryCharging,
    title: "Smooth Paperwork",
    desc: "End-to-end documentation and property registration support.",
    color: "text-emerald-500"
  },
  {
    icon: Smartphone,
    title: "Professional Team",
    desc: "Cooperative and highly responsive staff dedicated to your needs.",
    color: "text-emerald-500"
  }
];

const SmartHomeSection = ({ id }) => {
  return (
    <section id={id} className="py-32 relative overflow-hidden bg-gray-50">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block"
          >
            WHY CHOOSE US
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-rich-dark mb-6 leading-tight">
            Built on <span className="text-primary italic">Trust</span> & Expertise
          </h2>
          <p className="text-rich-dark/40 max-w-2xl mx-auto text-sm font-medium leading-relaxed">
            Disha Realty is a trusted name in Howrah, providing seamless property and home loan solutions with a focus on customer satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="h-full group hover:bg-white transition-all border-gray-100 !rounded-[2.5rem] p-10 bg-white/50">
                <div className={`w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 ${feature.color}`}>
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-rich-dark tracking-tight">{feature.title}</h3>
                <p className="text-rich-dark/40 text-sm font-medium leading-relaxed">
                  {feature.desc}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Interactive Device Mockup */}
        <div className="mt-32 relative">
          <GlassCard className="max-w-5xl mx-auto p-0 overflow-hidden border-white bg-white/80 shadow-2xl shadow-black/5 !rounded-[3rem] relative z-10">
            <div className="grid md:grid-cols-2">
              <div className="p-16 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-8 text-primary">
                  <Smartphone size={32} />
                  <span className="text-3xl font-bold tracking-tight text-rich-dark leading-tight">End-to-End <br /> Support</span>
                </div>
                <p className="text-rich-dark/40 mb-12 leading-relaxed font-medium text-sm">
                  From initial property search to final bank coordination, our team stays with you at every step.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-5 rounded-[1.5rem] bg-gray-50 border border-gray-100 group hover:border-primary/20 transition-all">
                    <div className="flex items-center gap-4">
                      <Thermometer className="text-primary" size={20} />
                      <span className="text-sm font-bold text-rich-dark">Loan Status</span>
                    </div>
                    <span className="text-primary font-bold text-lg">Processing</span>
                  </div>
                  <div className="flex items-center justify-between p-5 rounded-[1.5rem] bg-gray-50 border border-primary/20 group">
                    <div className="flex items-center gap-4">
                      <ShieldAlert className="text-primary" size={20} />
                      <span className="text-sm font-bold text-rich-dark">Bank Coordination</span>
                    </div>
                    <span className="text-primary font-bold text-xs uppercase tracking-widest">In Progress</span>
                  </div>
                </div>
              </div>
              <div className="bg-primary/5 p-12 flex items-center justify-center min-h-[500px]">
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-64 h-[30rem] bg-white rounded-[3rem] border-[8px] border-rich-dark/5 shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-rich-dark/5 rounded-b-2xl z-10" />
                  <div className="p-6 pt-12 space-y-6">
                    <div className="w-full h-32 rounded-2xl bg-primary/10 border border-primary/5" />
                    <div className="space-y-2">
                      <div className="w-4/5 h-2 rounded-full bg-gray-100" />
                      <div className="w-3/5 h-2 rounded-full bg-gray-50" />
                    </div>
                    <div className="grid grid-cols-2 gap-3 pt-4">
                      <div className="h-16 rounded-xl bg-gray-50 border border-gray-100" />
                      <div className="h-16 rounded-xl bg-gray-50 border border-gray-100" />
                    </div>
                    <div className="w-full h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default SmartHomeSection;
