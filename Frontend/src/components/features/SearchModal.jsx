import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Mic, X, Clock, TrendingUp, MapPin, ChevronRight, Filter } from 'lucide-react';

const SearchModal = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const trending = ["Palm Jumeirah", "Emirates Hills", "Dubai Marina", "Business Bay"];
  const recent = ["Villa in Dubai", "Modern Penthouse", "3 Bed Apartment"];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-start justify-center pt-24 p-6">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-rich-dark/40 backdrop-blur-md"
      />
      
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        className="relative w-full max-w-3xl bg-white dark:bg-gray-900 rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800"
      >
        <div className="p-8">
          <div className="relative flex items-center gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-primary" size={24} />
              <input 
                autoFocus
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Where would you like to live?" 
                className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-2xl py-6 pl-16 pr-24 text-lg font-bold text-rich-dark dark:text-white placeholder:text-gray-300 focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-4">
                <button className="p-3 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all group">
                  <Mic size={20} className="group-hover:scale-110 transition-transform" />
                </button>
                <div className="w-[1px] h-6 bg-gray-200 dark:bg-gray-700" />
                <button onClick={onClose} className="p-2 text-gray-400 hover:text-rich-dark transition-colors">
                  <X size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Recent Searches */}
            <div>
              <h4 className="text-[10px] font-bold text-rich-dark/30 dark:text-gray-500 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <Clock size={14} /> Recent Searches
              </h4>
              <div className="space-y-3">
                {recent.map((item, i) => (
                  <button key={i} className="w-full flex items-center justify-between p-4 rounded-2xl bg-gray-50/50 dark:bg-gray-800/50 hover:bg-primary/5 hover:text-primary transition-all group">
                    <span className="text-sm font-bold text-rich-dark/60 dark:text-gray-400 group-hover:text-primary">{item}</span>
                    <ChevronRight size={16} className="text-gray-300 opacity-0 group-hover:opacity-100 transition-all" />
                  </button>
                ))}
              </div>
            </div>

            {/* Trending Locations */}
            <div>
              <h4 className="text-[10px] font-bold text-rich-dark/30 dark:text-gray-500 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <TrendingUp size={14} /> Trending Locations
              </h4>
              <div className="flex flex-wrap gap-3">
                {trending.map((loc, i) => (
                  <button key={i} className="flex items-center gap-2 px-5 py-3 rounded-2xl border border-gray-100 dark:border-gray-800 text-xs font-bold text-rich-dark/60 dark:text-gray-400 hover:border-primary hover:text-primary transition-all">
                    <MapPin size={14} />
                    {loc}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-50 dark:border-gray-800 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-bold text-gray-300 dark:text-gray-600 uppercase">Quick Filters:</span>
              <div className="flex gap-2">
                {['Ready', 'Off-plan', 'Resale'].map((f) => (
                  <button key={f} className="px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-primary transition-colors">
                    {f}
                  </button>
                ))}
              </div>
            </div>
            <button className="flex items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-widest hover:underline">
              <Filter size={14} /> Advanced Filters
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SearchModal;
