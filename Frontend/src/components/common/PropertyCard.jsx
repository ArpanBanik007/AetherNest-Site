import { motion } from 'framer-motion';
import { Heart, Layers, MapPin, Bed, Bath, Maximize, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GlassCard } from './UI';
import useCompareStore from '../../store/useCompareStore';

const PropertyCard = ({ property }) => {
  const { addToCompare, comparedProperties } = useCompareStore();
  const isCompared = comparedProperties.some(p => p.id === property.id);

  const handleImageError = (e) => {
    e.target.src = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000&auto=format&fit=crop";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="group bg-white rounded-[2.5rem] overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-500 border border-gray-50">
        <div className="relative h-72 overflow-hidden">
          <Link to={`/property/${property.id}`}>
            <img 
              src={property.image} 
              alt={property.title} 
              onError={handleImageError}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
            />
          </Link>
          
          <div className="absolute top-6 left-6 flex flex-wrap gap-2">
            <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-primary text-[10px] font-bold tracking-widest shadow-sm">
              {property.category}
            </span>
          </div>

          <div className="absolute top-6 right-6 flex flex-col gap-3 translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
            <button className="w-11 h-11 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-rich-dark hover:text-red-500 shadow-lg transition-all active:scale-90">
              <Heart size={20} />
            </button>
            <button 
              onClick={() => addToCompare(property)}
              className={`w-11 h-11 rounded-2xl backdrop-blur-md flex items-center justify-center shadow-lg transition-all active:scale-90 ${
                isCompared ? 'bg-primary text-white' : 'bg-white/90 text-rich-dark hover:text-primary'
              }`}
            >
              <Layers size={20} />
            </button>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 flex justify-between items-center shadow-lg">
              <span className="text-xl font-bold text-primary">{property.price}</span>
              <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">View Details</span>
            </div>
          </div>
        </div>
        
        <div className="p-8">
          <div className="flex justify-between items-start mb-2">
            <Link to={`/property/${property.id}`} className="group/title">
              <h3 className="text-xl font-bold text-rich-dark group-hover/title:text-primary transition-colors duration-300">
                {property.title}
              </h3>
            </Link>
          </div>
          
          <div className="flex items-center gap-2 text-rich-dark/40 text-[11px] font-bold uppercase tracking-widest mb-8">
            <MapPin size={14} className="text-primary/60" />
            {property.location}
          </div>

          <div className="grid grid-cols-3 gap-6 py-6 border-y border-gray-50/50 mb-8">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2.5 text-rich-dark/70">
                <Bed size={18} className="text-primary/40" />
                <span className="text-sm font-bold">{property.beds}</span>
              </div>
              <span className="text-[10px] font-bold text-rich-dark/20 uppercase tracking-tighter">Bedrooms</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2.5 text-rich-dark/70">
                <Bath size={18} className="text-primary/40" />
                <span className="text-sm font-bold">{property.baths}</span>
              </div>
              <span className="text-[10px] font-bold text-rich-dark/20 uppercase tracking-tighter">Bathrooms</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2.5 text-rich-dark/70">
                <Maximize size={18} className="text-primary/40" />
                <span className="text-sm font-bold">{property.area.split(' ')[0]}</span>
              </div>
              <span className="text-[10px] font-bold text-rich-dark/20 uppercase tracking-tighter">Sq Ft</span>
            </div>
          </div>

          <Link 
            to={`/property/${property.id}`}
            className="group/btn relative w-full py-5 rounded-[1.25rem] bg-gray-50 overflow-hidden transition-all duration-500 hover:bg-primary"
          >
            <div className="relative z-10 flex items-center justify-center gap-3 text-rich-dark font-bold text-xs uppercase tracking-widest group-hover/btn:text-white transition-colors duration-500">
              Explore Property <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
