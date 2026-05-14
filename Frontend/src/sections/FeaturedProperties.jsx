import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { GlowButton } from '../components/common/UI';
import PropertyCard from '../components/common/PropertyCard';
import { properties } from '../data/properties';

const FeaturedProperties = ({ id }) => {
  return (
    <section id={id} className="section-gray relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block"
            >
              PREMIUM SELECTION
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-rich-dark">
              Featured <span className="text-primary">Properties</span>
            </h2>
          </div>
          <p className="text-rich-dark/30 max-w-sm text-left hidden md:block text-sm font-medium leading-relaxed">
            A hand-picked selection of the most exclusive properties in the global market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {properties.slice(0, 3).map((prop, index) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PropertyCard property={prop} />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button className="px-10 py-5 rounded-[1.5rem] bg-white text-rich-dark border border-gray-100 font-bold text-xs uppercase tracking-widest shadow-premium hover:shadow-premium-hover transition-all duration-300 flex items-center gap-3 active:scale-95">
            View All Properties <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
