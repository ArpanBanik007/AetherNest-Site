import { motion } from 'framer-motion';

export const GlassCard = ({ children, className = "", ...props }) => (
  <div 
    className={`bg-white border border-gray-50 rounded-[2.5rem] p-8 shadow-premium ${className}`}
    {...props}
  >
    {children}
  </div>
);

export const GlowButton = ({ 
  children, 
  variant = 'primary', 
  className = "", 
  ...props 
}) => {
  const variants = {
    primary: "bg-primary text-white shadow-lg shadow-primary/10 hover:shadow-primary/30 hover:-translate-y-0.5",
    secondary: "bg-white text-rich-dark border border-gray-100 shadow-premium hover:shadow-premium-hover hover:-translate-y-0.5",
    emerald: "bg-primary text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5",
    outline: "bg-transparent border-2 border-primary/20 text-primary hover:bg-primary hover:text-white"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`px-8 py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export const StatCard = ({ label, value, icon, color = "text-primary", bg = "bg-primary/5" }) => (
  <div className="flex items-center gap-6 bg-white rounded-[2.5rem] p-8 border border-gray-50 shadow-premium hover:shadow-premium-hover transition-all duration-500 group">
    <div className={`w-16 h-16 rounded-[1.5rem] ${bg} ${color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-bold text-rich-dark/30 uppercase tracking-[0.2em] mb-1.5">{label}</p>
      <p className="text-3xl font-extrabold text-rich-dark">{value}</p>
    </div>
  </div>
);

export const Skeleton = ({ className = "" }) => (
  <div className={`animate-pulse bg-gray-100 rounded-2xl ${className}`} />
);

