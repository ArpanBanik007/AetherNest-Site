import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { GlassCard } from '../components/common/UI';

const testimonials = [
  {
    name: "Tapas Manna",
    role: "Property Owner",
    highlight: "Smooth Process",
    content: "The entire home loan process was smooth and transparent. The team guided me properly at every step.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop"
  },
  {
    name: "Sanjib Dey",
    role: "Verified Client",
    highlight: "Cooperative Staff",
    content: "Very cooperative staff with hassle-free service and timely updates throughout the process.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2000&auto=format&fit=crop"
  },
  {
    name: "Prattya Guchait",
    role: "Home Buyer",
    highlight: "Helpful Team",
    content: "One-stop solution for property and loan services. Very helpful people and smooth experience.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2000&auto=format&fit=crop"
  },
  {
    name: "Ipsita Dutta",
    role: "Customer",
    highlight: "Transparent Communication",
    content: "Professional service and supportive team. They made the loan process easy and stress-free.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop"
  },
  {
    name: "Laltu Maji",
    role: "Local Client",
    highlight: "Home Loan Support",
    content: "Excellent behavior and very supportive staff. Highly recommended for home loan services in Howrah.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2000&auto=format&fit=crop"
  },
  {
    name: "Prianka Basak",
    role: "Verified Buyer",
    highlight: "Timely Updates",
    content: "Easy process, transparent communication, and very responsive team.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2000&auto=format&fit=crop"
  },
  {
    name: "Saumya Chakraborty",
    role: "Investor",
    highlight: "Good Behavior",
    content: "Good behavior, low interest guidance, and smooth paperwork handling.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2000&auto=format&fit=crop"
  },
  {
    name: "Gagan Thakur",
    role: "Business Owner",
    highlight: "Professional Team",
    content: "Very good coordination and customer support from beginning to end.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2000&auto=format&fit=crop"
  }
];

const Testimonials = ({ id }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9
    })
  };

  const nextStep = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1 === testimonials.length ? 0 : prev + 1));
  };

  const prevStep = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 < 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextStep, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id={id} className="py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(22,163,74,0.03),transparent_40%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block"
          >
            CLIENT EXPERIENCES
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-rich-dark mb-6">
            Built on <span className="text-primary italic">Trust</span>
          </h2>
          <p className="text-rich-dark/40 max-w-2xl mx-auto text-sm font-medium">
            Hear from our clients who have successfully found their homes and secured hassle-free loans with Disha Realty.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto min-h-[450px] flex items-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 }
              }}
              className="absolute w-full"
            >
              <GlassCard className="border-gray-100 bg-white relative !rounded-[3rem] p-12 md:p-20 shadow-2xl shadow-black/5">
                <Quote size={80} className="absolute top-10 right-10 text-primary/5 -z-10" />
                
                <div className="flex flex-col items-center text-center">
                  <div className="flex gap-1 mb-8">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-accent-gold text-accent-gold" />
                    ))}
                  </div>

                  <div className="mb-6 inline-block px-4 py-1 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-bold text-primary uppercase tracking-widest">
                    {testimonials[currentIndex].highlight}
                  </div>

                  <p className="text-xl md:text-2xl text-rich-dark/80 mb-12 leading-relaxed italic font-medium">
                    "{testimonials[currentIndex].content}"
                  </p>

                  <div className="flex flex-col items-center gap-4">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name} 
                      className="w-20 h-20 rounded-3xl object-cover shadow-xl border-4 border-white" 
                    />
                    <div>
                      <div className="font-extrabold text-rich-dark text-lg flex items-center justify-center gap-2 tracking-tight">
                        {testimonials[currentIndex].name}
                        <CheckCircle2 size={18} className="text-primary" />
                      </div>
                      <div className="text-[10px] text-rich-dark/30 font-bold uppercase tracking-widest mt-1">
                        {testimonials[currentIndex].role}
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute -left-4 md:-left-20 top-1/2 -translate-y-1/2 z-20">
            <button 
              onClick={prevStep}
              className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white shadow-xl border border-gray-100 flex items-center justify-center text-rich-dark hover:text-primary transition-all group"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="absolute -right-4 md:-right-20 top-1/2 -translate-y-1/2 z-20">
            <button 
              onClick={nextStep}
              className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white shadow-xl border border-gray-100 flex items-center justify-center text-rich-dark hover:text-primary transition-all group"
            >
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-16">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
