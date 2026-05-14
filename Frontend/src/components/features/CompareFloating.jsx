import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useCompareStore from '../../store/useCompareStore';

const CompareFloating = () => {
  const { comparedProperties, removeFromCompare, clearCompare } = useCompareStore();
  const navigate = useNavigate();

  if (comparedProperties.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[90] w-full max-w-2xl px-6"
      >
        <div className="bg-white dark:bg-gray-900 rounded-[2rem] shadow-2xl border border-gray-100 dark:border-gray-800 p-4 flex items-center justify-between gap-6">
          <div className="flex items-center gap-4 flex-1 overflow-x-auto no-scrollbar">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
              <Layers size={20} />
            </div>
            <div className="flex gap-2">
              {comparedProperties.map((prop) => (
                <div key={prop.id} className="relative group flex-shrink-0">
                  <img 
                    src={prop.image} 
                    alt={prop.title} 
                    className="w-12 h-12 rounded-xl object-cover border border-gray-100" 
                  />
                  <button 
                    onClick={() => removeFromCompare(prop.id)}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform shadow-lg"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
              {Array(4 - comparedProperties.length).fill(0).map((_, i) => (
                <div key={i} className="w-12 h-12 rounded-xl border-2 border-dashed border-gray-100 flex items-center justify-center text-gray-200">
                  <span className="text-xl">+</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={clearCompare}
              className="text-[10px] font-bold text-gray-400 hover:text-red-500 uppercase tracking-widest transition-colors"
            >
              Clear
            </button>
            <button 
              onClick={() => navigate('/compare')}
              className="bg-primary text-white px-6 py-3 rounded-xl font-bold text-xs flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-primary/20"
            >
              Compare <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CompareFloating;
