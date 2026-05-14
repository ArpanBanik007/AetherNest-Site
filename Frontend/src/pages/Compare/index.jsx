import { motion } from 'framer-motion';
import { X, Check, MapPin, Bed, Bath, Maximize, ArrowRight, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useCompareStore from '../../store/useCompareStore';
import { GlowButton } from '../../components/common/UI';

const Compare = () => {
  const { comparedProperties, removeFromCompare, clearCompare } = useCompareStore();
  const navigate = useNavigate();

  const specs = [
    { label: 'Market Valuation', key: 'price' },
    { label: 'Exclusive Location', key: 'location' },
    { label: 'Architecture Type', key: 'type' },
    { label: 'Suite Count', key: 'beds' },
    { label: 'Bathrooms', key: 'baths' },
    { label: 'Total Magnitude', key: 'area' },
    { label: 'Portfolio Category', key: 'category' },
  ];

  if (comparedProperties.length === 0) {
    return (
      <div className="pt-32 pb-24 min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-xl px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-32 h-32 bg-primary/5 rounded-[3rem] flex items-center justify-center mx-auto mb-12 text-primary border border-primary/10 shadow-premium"
          >
            <Layers size={48} />
          </motion.div>
          <h1 className="text-4xl font-extrabold text-rich-dark mb-6 tracking-tight">Portfolio Comparison Empty</h1>
          <p className="text-rich-dark/30 text-lg mb-12 font-medium leading-relaxed">Synthesize your investment decisions by adding up to 4 elite properties for a comprehensive side-by-side analytical evaluation.</p>
          <GlowButton variant="emerald" onClick={() => navigate('/properties')} className="px-12 py-5 text-[10px]">
            Browse Elite Collection
          </GlowButton>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block"
            >
              ANALYTICS ENGINE
            </motion.span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-rich-dark tracking-tight">
              Property <span className="text-primary">Intelligence.</span>
            </h1>
          </div>
          <button 
            onClick={clearCompare}
            className="px-8 py-4 rounded-2xl bg-gray-50 border border-gray-100 text-[10px] font-bold text-red-500 uppercase tracking-[0.2em] hover:bg-red-50 transition-all active:scale-95"
          >
            Reset Analysis
          </button>
        </div>

        <div className="overflow-x-auto no-scrollbar pb-12">
          <table className="w-full min-w-[1000px] border-collapse bg-white rounded-[3rem] border border-gray-50 shadow-premium overflow-hidden">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="p-12 text-left w-72 border-r border-gray-100">
                  <span className="text-[10px] font-bold text-rich-dark/20 uppercase tracking-[0.3em]">Evaluation Vector</span>
                </th>
                {comparedProperties.map((prop, index) => (
                  <th key={prop.id} className="p-12 text-center border-r border-gray-100 last:border-0 bg-white">
                    <div className="relative group mx-auto mb-10 w-full max-w-[240px]">
                      <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-premium border border-gray-50">
                        <img src={prop.image} alt={prop.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                      </div>
                      <button 
                        onClick={() => removeFromCompare(prop.id)}
                        className="absolute -top-3 -right-3 w-10 h-10 bg-white text-red-500 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform border border-gray-50"
                      >
                        <X size={18} />
                      </button>
                    </div>
                    <h3 className="text-xl font-extrabold text-rich-dark mb-2 tracking-tight line-clamp-1">{prop.title}</h3>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                      <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">{prop.type}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {specs.map((spec, i) => (
                <tr key={spec.key} className="hover:bg-gray-50/30 transition-colors">
                  <td className="p-12 font-bold text-[10px] text-rich-dark/30 uppercase tracking-[0.2em] border-r border-gray-50 bg-gray-50/20">
                    {spec.label}
                  </td>
                  {comparedProperties.map((prop) => (
                    <td key={`${prop.id}-${spec.key}`} className="p-12 text-center text-sm font-extrabold text-rich-dark border-r border-gray-50 last:border-0">
                      {prop[spec.key]}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="bg-gray-50/50">
                <td className="p-12 border-r border-gray-50" />
                {comparedProperties.map((prop) => (
                  <td key={`${prop.id}-action`} className="p-12 text-center border-r border-gray-50 last:border-0">
                    <GlowButton variant="emerald" className="w-full py-5 text-[10px]">
                      View Asset Profile
                    </GlowButton>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Compare;
