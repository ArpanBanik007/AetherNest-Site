import { motion } from 'framer-motion';
import { Cpu, Lightbulb, ShieldAlert, Sun, BatteryCharging, Mic, Smartphone, Thermometer } from 'lucide-react';
import { GlassCard } from '../components/common/UI';

const features = [
  {
    icon: Cpu,
    title: "AI Automation",
    desc: "Intelligent systems that learn your preferences and automate your home environment.",
    color: "text-emerald-500"
  },
  {
    icon: Lightbulb,
    title: "Smart Lighting",
    desc: "Energy-efficient lighting that adjusts to your mood and time of day.",
    color: "text-emerald-500"
  },
  {
    icon: ShieldAlert,
    title: "Advanced Security",
    desc: "State-of-the-art biometric access and 24/7 intelligent monitoring.",
    color: "text-emerald-500"
  },
  {
    icon: Sun,
    title: "Solar Power",
    desc: "Integrated solar energy solutions for sustainable and cost-effective living.",
    color: "text-emerald-500"
  },
  {
    icon: BatteryCharging,
    title: "EV Ready",
    desc: "Universal electric vehicle charging stations in every parking space.",
    color: "text-emerald-500"
  },
  {
    icon: Smartphone,
    title: "Mobile Control",
    desc: "Control every aspect of your home from your smartphone, anywhere in the world.",
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
            SMART LIVING
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-rich-dark mb-6 leading-tight">
            The Future of <span className="text-primary italic">Comfort</span>
          </h2>
          <p className="text-rich-dark/40 max-w-2xl mx-auto text-sm font-medium leading-relaxed">
            AetherNest homes are equipped with the latest smart technologies, providing a seamless and intuitive living experience.
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
                  <span className="text-3xl font-bold tracking-tight text-rich-dark leading-tight">Total Control <br /> at Your Fingertips</span>
                </div>
                <p className="text-rich-dark/40 mb-12 leading-relaxed font-medium text-sm">
                  The AetherNest app allows you to monitor and control your home's systems from anywhere in the world.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-5 rounded-[1.5rem] bg-gray-50 border border-gray-100 group hover:border-primary/20 transition-all">
                    <div className="flex items-center gap-4">
                      <Thermometer className="text-primary" size={20} />
                      <span className="text-sm font-bold text-rich-dark">Temperature</span>
                    </div>
                    <span className="text-primary font-bold text-lg">22°C</span>
                  </div>
                  <div className="flex items-center justify-between p-5 rounded-[1.5rem] bg-gray-50 border border-primary/20 group">
                    <div className="flex items-center gap-4">
                      <ShieldAlert className="text-primary" size={20} />
                      <span className="text-sm font-bold text-rich-dark">Security System</span>
                    </div>
                    <span className="text-primary font-bold text-xs uppercase tracking-widest">Active</span>
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
