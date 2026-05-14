import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { GlassCard } from '../components/common/UI';

const testimonials = [
  {
    name: "Jonathan Wick",
    role: "Tech Entrepreneur",
    content: "The futuristic design and seamless experience of AetherNest made finding my Dubai penthouse an absolute pleasure. Truly world-class.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop"
  },
  {
    name: "Elena Rodriguez",
    role: "International Investor",
    content: "Their AI-driven market analytics gave me the confidence to expand my luxury portfolio. The ROI has exceeded all my expectations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2000&auto=format&fit=crop"
  }
];

const Testimonials = ({ id }) => {
  return (
    <section id={id} className="py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(22,163,74,0.03),transparent_40%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-3 gap-20 items-center">
          <div className="lg:col-span-1">
            <span className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">CLIENT EXPERIENCES</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-rich-dark mb-8">
              What Our <br />
              <span className="text-primary italic">Clients</span> Say
            </h2>
            <div className="flex items-center gap-6 text-rich-dark/40 italic">
              <Quote size={48} className="text-primary/10" />
              <p className="text-sm font-medium leading-relaxed">Trusted by world-class leaders and investors seeking the pinnacle of luxury living.</p>
            </div>
          </div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-10">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <GlassCard className="h-full border-gray-100 bg-white relative !rounded-[2.5rem] p-10 shadow-xl shadow-black/5 hover:shadow-2xl transition-all duration-500">
                  <div className="flex gap-1 mb-8">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-accent-gold text-accent-gold" />
                    ))}
                  </div>
                  <p className="text-lg text-rich-dark/70 mb-10 leading-relaxed italic">
                    "{t.content}"
                  </p>
                  <div className="flex items-center gap-4 border-t border-gray-50 pt-8">
                    <img src={t.image} alt={t.name} className="w-14 h-14 rounded-2xl object-cover shadow-lg" />
                    <div>
                      <div className="font-bold text-rich-dark text-sm flex items-center gap-2 tracking-tight">
                        {t.name}
                        <CheckCircle2 size={16} className="text-primary" />
                      </div>
                      <div className="text-[10px] text-rich-dark/30 font-bold uppercase tracking-widest mt-1">{t.role}</div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
