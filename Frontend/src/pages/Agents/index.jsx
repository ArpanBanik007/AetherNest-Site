import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Star, ShieldCheck, Phone, Mail, ChevronRight, Filter } from 'lucide-react';
import { GlowButton, GlassCard } from '../../components/common/UI';

const agents = [
  {
    id: 1,
    name: "Marcus Valerius",
    role: "Senior Investment Advisor",
    location: "Emirates Hills, Dubai",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
    rating: 4.9,
    reviews: 124,
    specialization: "Luxury Villas",
    verified: true
  },
  {
    id: 2,
    name: "Elena Rodriguez",
    role: "Waterfront Specialist",
    location: "Palm Jumeirah, Dubai",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    rating: 5.0,
    reviews: 89,
    specialization: "Penthouses",
    verified: true
  },
  {
    id: 3,
    name: "David Chen",
    role: "Commercial Expert",
    location: "Business Bay, Dubai",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    rating: 4.8,
    reviews: 156,
    specialization: "Offices & Retail",
    verified: true
  },
  {
    id: 4,
    name: "Sarah Jenkins",
    role: "Leasing Manager",
    location: "Dubai Marina",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=200&auto=format&fit=crop",
    rating: 4.7,
    reviews: 210,
    specialization: "Short-term Rentals",
    verified: false
  }
];

const Agents = () => {
  const handleImageError = (e) => {
    e.target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop";
  };

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">EXPERT ADVISORS</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-rich-dark mb-6">
            Meet Our <span className="text-primary">Luxury Agents</span>
          </h1>
          <p className="text-rich-dark/40 max-w-2xl mx-auto font-medium">
            Connect with the industry's most successful real estate professionals, dedicated to finding your perfect sanctuary.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="bg-gray-50 p-4 rounded-[2.5rem] flex flex-col md:flex-row gap-4 border border-gray-100 shadow-premium">
            <div className="flex-1 relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/40" size={18} />
              <input 
                type="text" 
                placeholder="Search by name, location or specialization..." 
                className="w-full bg-white border-none rounded-2xl py-5 pl-16 pr-6 text-sm font-bold focus:ring-2 focus:ring-primary/20 text-rich-dark placeholder:text-rich-dark/20"
              />
            </div>
            <button className="bg-white px-8 py-5 rounded-2xl border border-gray-100 flex items-center justify-center gap-3 text-[10px] font-bold text-rich-dark uppercase tracking-widest hover:bg-gray-50 transition-all shadow-sm">
              <Filter size={16} /> Filters
            </button>
          </div>
        </div>

        {/* Agents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {agents.map((agent, i) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-[3rem] p-8 text-center group border border-gray-50 shadow-premium hover:shadow-premium-hover transition-all duration-500">
                <div className="relative mx-auto mb-8 w-36 h-36">
                  <div className="absolute inset-0 bg-primary/10 rounded-full scale-110 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img 
                    src={agent.image} 
                    alt={agent.name} 
                    onError={handleImageError}
                    className="w-full h-full rounded-full object-cover border-4 border-white shadow-xl relative z-10" 
                  />
                  {agent.verified && (
                    <div className="absolute bottom-2 right-2 w-9 h-9 bg-primary rounded-full border-4 border-white flex items-center justify-center text-white z-20 shadow-lg" title="Verified Expert">
                      <ShieldCheck size={16} />
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-rich-dark mb-1 group-hover:text-primary transition-colors duration-300">{agent.name}</h3>
                <p className="text-[10px] font-bold text-primary/60 uppercase tracking-widest mb-6">{agent.role}</p>
                
                <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-8 bg-gray-50 py-2 px-4 rounded-full w-max mx-auto">
                  <Star size={14} fill="currentColor" />
                  <span className="text-sm font-bold text-rich-dark">{agent.rating}</span>
                  <span className="text-[10px] text-rich-dark/20 font-bold uppercase ml-1">({agent.reviews})</span>
                </div>

                <div className="space-y-4 pt-8 border-t border-gray-50/50">
                  <div className="flex items-center justify-center gap-2 text-rich-dark/30 text-[10px] font-bold uppercase tracking-widest">
                    <MapPin size={14} className="text-primary/40" />
                    {agent.location}
                  </div>
                  <GlowButton variant="secondary" className="w-full py-4 text-[10px] !rounded-2xl !bg-gray-50 border-none shadow-none hover:!bg-primary hover:text-white">
                    View Profile <ChevronRight size={14} />
                  </GlowButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-32 p-16 md:p-24 bg-primary rounded-[4rem] relative overflow-hidden text-center shadow-premium shadow-primary/20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">Ready to <span className="text-white/70 italic">Consult</span> with an Expert?</h2>
            <p className="text-white/80 max-w-xl mx-auto mb-12 text-lg font-medium leading-relaxed">Join Dubai's most elite network of real estate advisors and reach high-net-worth clients globally.</p>
            <button className="bg-white text-primary hover:bg-gray-50 px-12 py-6 rounded-2xl font-bold text-xs uppercase tracking-widest shadow-xl transition-all active:scale-95">Apply to Join Network</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agents;
