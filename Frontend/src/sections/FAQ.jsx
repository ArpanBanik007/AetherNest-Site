import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { GlassCard } from '../components/common/UI';

const faqs = [
  {
    question: "How do I start the buying process?",
    answer: "The process begins with a consultation with one of our luxury advisors. We'll help you define your requirements, secure financing, and identify exclusive off-market opportunities."
  },
  {
    question: "What makes AetherNest different from other agencies?",
    answer: "We combine world-class real estate expertise with advanced AI technology to provide our clients with unparalleled market insights and a seamless, tech-driven experience."
  },
  {
    question: "Do you offer property management services?",
    answer: "Yes, we provide comprehensive property management services for our investors, including tenant screening, maintenance, and yield optimization using our proprietary software."
  },
  {
    question: "Can I buy property using cryptocurrency?",
    answer: "Absolutely. We have established protocols for secure real estate transactions using major cryptocurrencies, ensuring full legal compliance and transparency."
  }
];

const FAQ = ({ id }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id={id} className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">FREQUENTLY ASKED</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-rich-dark">
            Got <span className="text-primary italic">Questions?</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard 
                className={`p-0 overflow-hidden transition-all duration-300 border-gray-100 ${openIndex === index ? 'shadow-lg border-primary/20' : 'hover:border-primary/10'}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full p-8 flex items-center justify-between text-left group"
                >
                  <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-primary' : 'text-rich-dark'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === index ? 'bg-primary text-white rotate-180' : 'bg-gray-50 text-rich-dark/40 group-hover:bg-primary/5 group-hover:text-primary'}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-8 text-rich-dark/60 leading-relaxed text-sm">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
