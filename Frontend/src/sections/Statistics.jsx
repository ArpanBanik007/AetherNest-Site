import { motion } from 'framer-motion';
import { Users, Home, Award, TrendingUp } from 'lucide-react';

const stats = [
  { label: 'Happy Clients', value: '98+', icon: Users, delay: 0.1 },
  { label: 'Years Experience', value: '11+', icon: Home, delay: 0.2 },
  { label: 'Star Rating', value: '4.9', icon: Award, delay: 0.3 },
  { label: 'Loan Consultations', value: '100+', icon: TrendingUp, delay: 0.4 },
];

const Statistics = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: stat.delay }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white text-primary shadow-sm mb-4">
                <stat.icon size={24} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-rich-dark mb-1">{stat.value}</div>
              <div className="text-xs font-bold text-rich-dark/40 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
