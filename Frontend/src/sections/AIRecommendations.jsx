import { motion } from 'framer-motion';
import { Sparkles, Brain, ArrowRight, Heart } from 'lucide-react';
import { GlassCard, GlowButton } from '../components/common/UI';

const recommendations = [
  {
    id: 1,
    title: "The Glass Pavilion",
    location: "Emirates Hills, Dubai",
    price: "$12,500,000",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2000&auto=format&fit=crop",
    match: "98% Match"
  },
  {
    id: 2,
    title: "Azure Marina Suite",
    location: "Dubai Marina",
    price: "$4,200,000",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop",
    match: "95% Match"
  },
  {
    id: 3,
    title: "Sky Garden Villa",
    location: "Palm Jumeirah",
    price: "$8,900,000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
    match: "92% Match"
  }
];

const AIRecommendations = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Decorative AI background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-300 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Brain size={20} />
              </div>
              <span className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase">AI-POWERED MATCHING</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-rich-dark">
              Recommended <span className="text-primary italic">for You</span>
            </h2>
          </div>
          <p className="text-rich-dark/40 max-w-md text-sm font-medium">
            Our neural network analyzed your preferences to find properties that perfectly match your lifestyle and investment goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {recommendations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-0 overflow-hidden group bg-white border-gray-100 shadow-xl shadow-black/5 !rounded-[2.5rem] hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-primary/90 backdrop-blur-md text-white text-[10px] font-bold tracking-widest flex items-center gap-2">
                    <Sparkles size={12} /> {item.match}
                  </div>
                  <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-all">
                    <Heart size={18} />
                  </button>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-rich-dark mb-1">{item.title}</h3>
                  <p className="text-rich-dark/40 text-xs font-bold uppercase tracking-widest mb-6">{item.location}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                    <span className="text-lg font-bold text-primary">{item.price}</span>
                    <button className="flex items-center gap-2 text-[10px] font-bold text-rich-dark uppercase tracking-widest hover:text-primary transition-colors">
                      View Details <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <GlowButton variant="secondary" className="px-10 py-5 !rounded-2xl text-[11px] border-gray-200">
            Fine-tune Your Preferences
          </GlowButton>
        </div>
      </div>
    </section>
  );
};

export default AIRecommendations;
