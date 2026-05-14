import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, Globe, ShieldCheck } from 'lucide-react';
import { GlowButton, GlassCard } from '../../components/common/UI';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-24 items-center relative z-10">
        {/* Left Side: Branding */}
        <div className="hidden lg:block">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-4 mb-16">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary/20">
                <span className="text-2xl font-black italic">A</span>
              </div>
              <div className="flex flex-col -gap-1">
                <span className="text-2xl font-extrabold tracking-tight text-rich-dark">AETHERNEST</span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">Elite Real Estate</span>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-extrabold text-rich-dark tracking-tight leading-[1.1] mb-12">
              Luxury Living <br />
              <span className="text-primary">Redefined.</span>
            </h1>
            
            <div className="space-y-10">
              {[
                { icon: <ShieldCheck className="text-primary" />, title: "Secure Transactions", desc: "Military-grade encryption for your high-value property investments." },
                { icon: <Globe className="text-primary" />, title: "Global Network", desc: "Access the most exclusive off-market listings across the UAE." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 max-w-md">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 border border-primary/10 flex-shrink-0 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-rich-dark mb-1">{item.title}</h4>
                    <p className="text-rich-dark/40 text-sm font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white p-12 md:p-16 rounded-[4rem] border border-gray-50 shadow-premium relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary/20" />
            
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-rich-dark mb-4 tracking-tight">
                {isLogin ? "Welcome Back" : "Join the Elite"}
              </h2>
              <p className="text-rich-dark/30 text-sm font-medium max-w-[280px] mx-auto leading-relaxed">
                {isLogin ? "Enter your exclusive credentials to access your luxury portfolio" : "Create your member account to access off-market listings"}
              </p>
            </div>

            <div className="flex bg-gray-50 p-1.5 rounded-[1.5rem] mb-12">
              <button 
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-4 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${isLogin ? 'bg-white text-primary shadow-premium' : 'text-rich-dark/20 hover:text-rich-dark'}`}
              >
                Sign In
              </button>
              <button 
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-4 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${!isLogin ? 'bg-white text-primary shadow-premium' : 'text-rich-dark/20 hover:text-rich-dark'}`}
              >
                Register
              </button>
            </div>

            <form className="space-y-6">
              <AnimatePresence mode="wait">
                {!isLogin && (
                  <motion.div
                    key="name"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <div className="relative">
                      <User className="absolute left-6 top-1/2 -translate-y-1/2 text-rich-dark/20" size={18} />
                      <input 
                        type="text" 
                        placeholder="Full Name" 
                        className="w-full bg-gray-50 border-none rounded-2xl py-5 pl-16 pr-6 text-sm font-bold text-rich-dark focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-rich-dark/20"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="relative">
                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-rich-dark/20" size={18} />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-gray-50 border-none rounded-2xl py-5 pl-16 pr-6 text-sm font-bold text-rich-dark focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-rich-dark/20"
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-rich-dark/20" size={18} />
                <input 
                  type="password" 
                  placeholder="Password" 
                  className="w-full bg-gray-50 border-none rounded-2xl py-5 pl-16 pr-6 text-sm font-bold text-rich-dark focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-rich-dark/20"
                />
              </div>

              {isLogin && (
                <div className="flex justify-end">
                  <button type="button" className="text-[10px] font-bold text-primary uppercase tracking-widest hover:underline">Forgot Password?</button>
                </div>
              )}

              <button className="w-full bg-primary text-white py-6 rounded-2xl font-bold text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 flex items-center justify-center gap-3 active:scale-95 mt-4">
                {isLogin ? "Authenticate Account" : "Initialize Membership"} <ArrowRight size={18} />
              </button>

              <div className="relative py-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-50"></div>
                </div>
                <div className="relative flex justify-center text-[9px] font-bold uppercase tracking-[0.3em]">
                  <span className="bg-white px-4 text-rich-dark/20">Or Secure Portal</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button type="button" className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-premium transition-all font-bold text-[10px] text-rich-dark uppercase tracking-widest">
                  <Globe size={18} className="text-primary/40" /> Google
                </button>
                <button type="button" className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-premium transition-all font-bold text-[10px] text-rich-dark uppercase tracking-widest">
                  <GithubIcon width="18" height="18" className="text-rich-dark/40" /> Github
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Auth;
