import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, PieChart, BarChart3, ArrowUpRight, Zap } from 'lucide-react';
import { GlassCard, GlowButton } from '../components/common/UI';

const data = [
  { name: '2020', value: 4000 },
  { name: '2021', value: 5500 },
  { name: '2022', value: 4800 },
  { name: '2023', value: 7000 },
  { name: '2024', value: 8500 },
  { name: '2025', value: 12000 },
];

const InvestmentSection = ({ id }) => {
  return (
    <section id={id} className="py-32 relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-primary/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left Side: Chart UI */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <GlassCard className="p-10 border-gray-100 bg-white shadow-2xl shadow-black/5 !rounded-[3rem]">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h3 className="text-3xl font-bold tracking-tight text-rich-dark">Market Growth</h3>
                  <p className="text-rich-dark/40 text-xs font-bold uppercase tracking-widest mt-2">Real Estate Appreciation Index</p>
                </div>
                <div className="px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-widest uppercase">
                  +32.8% PROJECTION
                </div>
              </div>

              <div className="h-96 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#16a34a" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#16a34a" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#00000005" vertical={false} />
                    <XAxis 
                      dataKey="name" 
                      stroke="#00000020" 
                      fontSize={10} 
                      tickLine={false} 
                      axisLine={false} 
                      tick={{ fontWeight: 'bold' }}
                    />
                    <YAxis hide />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #00000010', borderRadius: '24px', padding: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}
                      itemStyle={{ color: '#16a34a', fontWeight: 'bold' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#16a34a" 
                      strokeWidth={4}
                      fillOpacity={1} 
                      fill="url(#colorValue)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12">
                {[
                  { label: "Annual ROI", val: "22.4%" },
                  { label: "Rental Yield", val: "9.1%" },
                  { label: "Stability", val: "High" }
                ].map((stat, i) => (
                  <div key={i} className="p-6 rounded-3xl bg-gray-50 border border-gray-100 group hover:bg-white hover:shadow-xl transition-all">
                    <div className="text-rich-dark/40 text-[8px] font-bold uppercase tracking-widest mb-2">{stat.label}</div>
                    <div className="text-2xl font-bold tracking-tight text-rich-dark group-hover:text-primary transition-colors">{stat.val}</div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -15, 0], rotateZ: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 z-30"
            >
              <GlassCard className="p-6 border-primary/20 bg-white/90 backdrop-blur-xl shadow-2xl shadow-primary/10 group">
                <Zap size={28} className="text-primary mb-3 group-hover:scale-125 transition-transform" />
                <div className="text-[10px] font-bold uppercase tracking-widest text-rich-dark mb-1">AI INSIGHTS</div>
                <div className="text-[8px] text-rich-dark/30 font-bold uppercase tracking-widest">Market Predictor</div>
              </GlassCard>
            </motion.div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-primary font-bold tracking-[0.4em] text-[10px] uppercase mb-6 block">Maximize Your Returns</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-10 leading-[1.05] text-rich-dark">
              Invest with <br />
              <span className="text-primary italic">Confidence</span>
            </h2>
            <p className="text-xl text-rich-dark/60 mb-12 leading-relaxed">
              Our advanced data analytics platform provides real-time market insights to help you build a high-performance luxury property portfolio.
            </p>

            <div className="space-y-8 mb-16">
              {[
                { title: "Market Forecasting", desc: "Stay ahead with AI-powered property value projections.", icon: TrendingUp, color: "text-primary" },
                { title: "Yield Management", desc: "Optimize your rental income with dynamic pricing tools.", icon: BarChart3, color: "text-primary" }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-[2rem] hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100 group">
                  <div className={`w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center ${item.color} group-hover:bg-primary group-hover:text-white transition-all`}>
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold tracking-tight text-rich-dark mb-1">{item.title}</h4>
                    <p className="text-rich-dark/40 text-sm font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <GlowButton variant="emerald" className="gap-4 px-12 py-6 text-sm shadow-2xl">
              Start Investing <ArrowUpRight size={20} />
            </GlowButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
