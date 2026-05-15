import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Search, Grid, List as ListIcon, Map as MapIcon, SlidersHorizontal, ChevronDown, RotateCcw } from 'lucide-react';
import PropertyCard from '../../components/common/PropertyCard';
import { PropertyListSkeleton } from '../../skeletons/PropertySkeleton';
import usePropertyStore from '../../store/usePropertyStore';

const Listings = () => {
  const [view, setView] = useState('grid');
  const { 
    filteredProperties, 
    loading, 
    filters, 
    setFilter, 
    resetFilters,
    applyFilters 
  } = usePropertyStore();

  useEffect(() => {
    applyFilters();
  }, []);

  const handleFilterChange = (key, value) => {
    setFilter(key, value);
  };

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block"
            >
              PREMIUM LISTINGS
            </motion.span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-rich-dark mb-4">
              Explore Our <span className="text-primary">Properties</span>
            </h1>
            <p className="text-rich-dark/40 font-medium">
              Discover {filteredProperties.length} elite residences across the most prestigious locations.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-gray-50 p-2 rounded-2xl border border-gray-100 shadow-sm">
            <button 
              onClick={() => setView('grid')}
              className={`p-3 rounded-xl transition-all ${view === 'grid' ? 'bg-white text-primary shadow-premium' : 'text-rich-dark/30 hover:text-rich-dark'}`}
            >
              <Grid size={18} />
            </button>
            <button 
              onClick={() => setView('list')}
              className={`p-3 rounded-xl transition-all ${view === 'list' ? 'bg-white text-primary shadow-premium' : 'text-rich-dark/30 hover:text-rich-dark'}`}
            >
              <ListIcon size={18} />
            </button>
            <div className="w-[1px] h-6 bg-gray-200 mx-2" />
            <button className="p-3 text-rich-dark/30 hover:text-primary transition-colors flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
              <MapIcon size={18} />
              Map View
            </button>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="bg-gray-50 p-4 rounded-[2.5rem] border border-gray-100 shadow-premium mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <div className="relative group">
              <select 
                className="w-full bg-white border border-gray-100 rounded-2xl py-4.5 px-6 text-[11px] font-bold text-rich-dark appearance-none cursor-pointer focus:ring-2 focus:ring-primary/10 transition-all outline-none"
                value={filters.type}
                onChange={(e) => handleFilterChange('type', e.target.value)}
              >
                <option value="All">All Types</option>
                <option value="Villa">Villa</option>
                <option value="Apartment">Apartment</option>
                <option value="Penthouse">Penthouse</option>
                <option value="Townhouse">Townhouse</option>
              </select>
              <ChevronDown size={14} className="absolute right-6 top-1/2 -translate-y-1/2 text-rich-dark/20 pointer-events-none group-hover:text-primary transition-colors" />
            </div>

            <div className="relative group">
              <select 
                className="w-full bg-white border border-gray-100 rounded-2xl py-4.5 px-6 text-[11px] font-bold text-rich-dark appearance-none cursor-pointer focus:ring-2 focus:ring-primary/10 transition-all outline-none"
                value={filters.beds}
                onChange={(e) => handleFilterChange('beds', e.target.value)}
              >
                <option value="Any">Any Beds</option>
                <option value="2">2+ Beds</option>
                <option value="4">4+ Beds</option>
                <option value="6">6+ Beds</option>
              </select>
              <ChevronDown size={14} className="absolute right-6 top-1/2 -translate-y-1/2 text-rich-dark/20 pointer-events-none group-hover:text-primary transition-colors" />
            </div>

            <div className="relative group">
              <select 
                className="w-full bg-white border border-gray-100 rounded-2xl py-4.5 px-6 text-[11px] font-bold text-rich-dark appearance-none cursor-pointer focus:ring-2 focus:ring-primary/10 transition-all outline-none"
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
              >
                <option value="All">Any Location</option>
                <option value="Dubai Marina">Dubai Marina</option>
                <option value="Palm Jumeirah">Palm Jumeirah</option>
                <option value="Emirates Hills">Emirates Hills</option>
                <option value="Downtown">Downtown Dubai</option>
              </select>
              <ChevronDown size={14} className="absolute right-6 top-1/2 -translate-y-1/2 text-rich-dark/20 pointer-events-none group-hover:text-primary transition-colors" />
            </div>

            <div className="relative group col-span-2 lg:col-span-1">
              <div className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl py-4 px-6">
                <Search size={16} className="text-rich-dark/20" />
                <input 
                  type="text"
                  placeholder="Search location..."
                  className="bg-transparent border-none p-0 w-full text-[11px] font-bold text-rich-dark focus:ring-0 placeholder:text-rich-dark/20"
                  value={filters.search}
                  onChange={(e) => handleFilterChange('search', e.target.value)}
                />
              </div>
            </div>

            <button 
              onClick={resetFilters}
              className="col-span-2 lg:col-span-1 bg-white border border-gray-100 text-rich-dark/40 hover:text-primary rounded-2xl py-4.5 px-6 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:shadow-lg transition-all active:scale-95"
            >
              <RotateCcw size={16} />
              Reset
            </button>
          </div>
        </div>

        {/* Listings Grid */}
        {loading ? (
          <PropertyListSkeleton />
        ) : filteredProperties.length > 0 ? (
          <motion.div 
            layout
            className={`grid ${view === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-10`}
          >
            <AnimatePresence>
              {filteredProperties.map((property) => (
                <motion.div
                  key={property.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <PropertyCard property={property} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="py-32 text-center bg-gray-50 rounded-[4rem] border border-gray-100">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 text-primary/20 shadow-premium">
              <Search size={40} />
            </div>
            <h3 className="text-2xl font-bold text-rich-dark mb-4">No results matching your criteria</h3>
            <p className="text-rich-dark/40 max-w-sm mx-auto font-medium">Try broadening your search or adjusting the filters to find the perfect property.</p>
            <button 
              onClick={resetFilters}
              className="mt-8 text-primary font-bold text-[10px] uppercase tracking-widest hover:underline"
            >
              Reset all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};


export default Listings;
