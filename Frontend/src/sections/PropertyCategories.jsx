import { motion } from 'framer-motion';
import { Home, Building2, Palmtree, Hotel, Factory, Tent, Warehouse, Building } from 'lucide-react';
import { GlassCard } from '../components/common/UI';

const categories = [
  { name: "Apartments", icon: Building2, count: "120+", color: "text-emerald-500" },
  { name: "Luxury Villas", icon: Home, count: "85+", color: "text-emerald-500" },
  { name: "Smart Homes", icon: Building, count: "45+", color: "text-emerald-500" },
  { name: "Commercial", icon: Hotel, count: "30+", color: "text-emerald-500" },
  { name: "Penthouses", icon: Building2, count: "15+", color: "text-emerald-500" },
  { name: "Beach Houses", icon: Palmtree, count: "25+", color: "text-emerald-500" },
  { name: "Farmhouses", icon: Tent, count: "12+", color: "text-emerald-500" },
  { name: "Office Spaces", icon: Warehouse, count: "50+", color: "text-emerald-500" },
];

const PropertyCategories = ({ id }) => {
  return (
    <section id={id} className="py-32 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block"
          >
            DISCOVER THE BEST
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-rich-dark mb-4">
            Property <span className="text-primary italic">Categories</span>
          </h2>
          <p className="text-rich-dark/40 text-sm font-medium">Explore our curated collections of ultra-luxury properties.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <GlassCard className="group flex flex-col items-center text-center p-8 hover:bg-gray-50 border-gray-100 cursor-pointer relative overflow-hidden !rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500">
                <div className={`w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 ${cat.color} relative z-10`}>
                  <cat.icon size={28} className="transition-transform group-hover:scale-110" />
                </div>
                <h3 className="text-lg font-bold text-rich-dark mb-1 tracking-tight relative z-10">{cat.name}</h3>
                <span className="text-[10px] text-rich-dark/30 font-bold uppercase tracking-widest relative z-10">{cat.count} Properties</span>
                
                {/* Background decorative element */}
                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyCategories;
