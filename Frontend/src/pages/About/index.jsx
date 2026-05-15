import { motion } from 'framer-motion';
import { ShieldCheck, Target, Users, Award, MapPin, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { GlowButton } from '../../components/common/UI';

const About = () => {
  const navigate = useNavigate();
  const stats = [

    { label: 'Happy Clients', value: '98+' },
    { label: 'Loan Success', value: '100+' },
    { label: 'Service Rating', value: '4.9/5' },
    { label: 'Years of Excellence', value: '11+' },
  ];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-primary font-bold tracking-[0.4em] text-[10px] uppercase mb-6 block">OUR LEGACY</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-rich-dark mb-10 tracking-tight leading-[1.1]">
              Your Trusted <br />
              <span className="text-primary">Property Partner.</span>
            </h1>
            <p className="text-rich-dark/40 text-lg font-medium leading-relaxed mb-12 max-w-xl">
              Disha Realty is a trusted real estate and home loan consultancy company in Howrah. We provide expert guidance for property purchase, home loans, and documentation support to make your journey hassle-free.
            </p>
            <div className="flex flex-wrap gap-6">
              <GlowButton variant="emerald" className="px-10 py-5 text-[10px]" onClick={() => navigate('/properties')}>
                Explore Portfolio
              </GlowButton>

              <button className="px-10 py-5 rounded-2xl border border-gray-100 text-[10px] font-bold text-rich-dark uppercase tracking-[0.2em] hover:bg-gray-50 transition-all">
                The Disha Realty Standard
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop" 
                alt="Luxury Property" 
                className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-12 rounded-[3rem] shadow-premium border border-gray-50 hidden md:block">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary border border-primary/10">
                  <Award size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-extrabold text-rich-dark">#1 Trusted Agency</h4>
                  <p className="text-[10px] font-bold text-rich-dark/20 uppercase tracking-[0.2em]">In Howrah Since 2013</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-40">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-6xl font-extrabold text-rich-dark mb-4 tracking-tight">{stat.value}</h3>
              <p className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mb-40">
          <div className="text-center mb-24">
            <span className="text-primary font-bold tracking-[0.4em] text-[10px] uppercase mb-6 block">OUR CORE VECTORS</span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-rich-dark tracking-tight">The Pillars of <span className="text-primary">Disha Realty.</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              { icon: <ShieldCheck size={32} />, title: "Trust First", desc: "Absolute transparency in every transaction, ensuring your home loan and property purchase is built on trust." },
              { icon: <Target size={32} />, title: "Expert Support", desc: "We provide end-to-end assistance for documentation, bank coordination, and registration." },
              { icon: <Users size={32} />, title: "Customer Focused", desc: "Known for our smooth loan processing, transparent communication, and cooperative staff." }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-12 rounded-[4rem] border border-gray-100 hover:bg-white hover:shadow-premium transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-10 group-hover:scale-110 transition-transform border border-primary/10">
                  {value.icon}
                </div>
                <h4 className="text-2xl font-extrabold text-rich-dark mb-6 tracking-tight">{value.title}</h4>
                <p className="text-rich-dark/40 font-medium leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global Reach */}
        <div className="bg-rich-dark rounded-[5rem] p-16 md:p-32 relative overflow-hidden text-center shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <span className="text-primary font-bold tracking-[0.4em] text-[10px] uppercase mb-8 block">LOCAL EXPERTISE</span>
            <h2 className="text-4xl md:text-7xl font-extrabold text-white mb-10 tracking-tight leading-tight">Strong Roots <br /> <span className="text-primary italic">Universal Trust.</span></h2>
            <p className="text-white/40 text-xl font-medium max-w-2xl mx-auto mb-16 leading-relaxed">Headquartered in Howrah, West Bengal, our network provides expert real estate solutions across the region.</p>
            
            <div className="flex flex-wrap justify-center gap-16">
              {['Howrah', 'Kolkata', 'Hooghly', 'West Bengal'].map((city, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_15px_rgba(0,166,81,0.8)]" />
                  <span className="text-sm font-bold text-white uppercase tracking-[0.2em]">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
