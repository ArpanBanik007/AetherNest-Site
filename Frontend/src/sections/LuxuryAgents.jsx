import { motion } from 'framer-motion';
import { MessageCircle, Phone, Star, Camera, UserPlus, Share2 } from 'lucide-react';
import { GlassCard, GlowButton } from '../components/common/UI';

const agents = [
  {
    name: "Alexander Sterling",
    role: "Senior Partner - Dubai",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop",
    experience: "15+ Years",
    properties: "450+ Sold",
    rating: 4.9,
    bio: "Specializing in ultra-high-net-worth real estate acquisitions across the GCC region."
  },
  {
    name: "Sophia Valentine",
    role: "Global Listings Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop",
    experience: "10+ Years",
    properties: "320+ Sold",
    rating: 5.0,
    bio: "Exquisite taste and an unparalleled network of international luxury buyers."
  },
  {
    name: "Marcus Chen",
    role: "Investment Strategist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2000&auto=format&fit=crop",
    experience: "12+ Years",
    properties: "580+ Sold",
    rating: 4.8,
    bio: "Expert in identifying high-yield residential and commercial property opportunities."
  }
];

const LuxuryAgents = ({ id }) => {
  return (
    <section id={id} className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_20%,rgba(22,163,74,0.03),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">WORLD-CLASS EXPERTISE</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-rich-dark">
              Meet Our <span className="text-primary italic">Trusted</span> Agents
            </h2>
          </div>
          <GlowButton variant="secondary" className="text-[10px] px-8 py-4 !rounded-xl">View All Agents</GlowButton>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="group p-0 overflow-hidden border-gray-100 bg-white shadow-xl shadow-black/5 h-full flex flex-col !rounded-[2.5rem] hover:shadow-2xl transition-all duration-500">
                <div className="relative h-[26rem] overflow-hidden">
                  <img 
                    src={agent.image} 
                    alt={agent.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  
                  {/* Social Links */}
                  <div className="absolute top-6 right-6 flex flex-col gap-3 transform translate-x-16 group-hover:translate-x-0 transition-transform duration-700">
                    <button className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-rich-dark/60 hover:text-primary transition-all shadow-lg">
                      <Camera size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-rich-dark/60 hover:text-primary transition-all shadow-lg">
                      <Share2 size={18} />
                    </button>
                  </div>

                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">{agent.name}</h3>
                    <p className="text-primary text-xs font-bold tracking-widest uppercase">{agent.role}</p>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2 bg-gray-50 px-4 py-1.5 rounded-full border border-gray-100">
                      <Star size={14} className="fill-accent-gold text-accent-gold" />
                      <span className="text-[10px] font-bold text-rich-dark/60 tracking-widest">{agent.rating} RATING</span>
                    </div>
                    <div className="text-[10px] font-bold text-primary tracking-widest uppercase">{agent.experience} Experience</div>
                  </div>

                  <p className="text-rich-dark/60 text-sm mb-8 flex-1 italic leading-relaxed">
                    "{agent.bio}"
                  </p>

                  <div className="flex gap-4">
                    <GlowButton variant="secondary" className="flex-1 py-4 px-0 !rounded-xl text-[10px]">
                      <MessageCircle size={18} /> Chat
                    </GlowButton>
                    <GlowButton variant="emerald" className="flex-1 py-4 px-0 !rounded-xl text-[10px]">
                      <Phone size={18} /> Contact
                    </GlowButton>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryAgents;
