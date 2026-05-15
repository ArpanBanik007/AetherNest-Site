import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, User, Clock, ArrowRight, ChevronRight, TrendingUp, Check, Loader2 } from 'lucide-react';
import { GlowButton, GlassCard } from '../../components/common/UI';
import useBlogStore from '../../store/useBlogStore';
import useUIStore from '../../store/useUIStore';

const Blog = () => {
  const { filteredPosts, categories, activeCategory, searchQuery, setCategory, setSearchQuery } = useBlogStore();
  const { addToast } = useUIStore();
  const [submitting, setSubmitting] = useState(false);

  const featuredPost = filteredPosts[0];
  const otherPosts = filteredPosts.slice(1);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitting(false);
    addToast({ title: 'Subscription Active', message: 'You have been subscribed to our global journal.', type: 'success' });
    e.target.reset();
  };

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-bold tracking-[0.4em] text-[10px] uppercase mb-6 block"
            >
              AETHERNEST JOURNAL
            </motion.span>
            <h1 className="text-4xl md:text-7xl font-extrabold text-rich-dark mb-8 tracking-tight leading-tight">
              Curated <br />
              <span className="text-primary">Market Intelligence.</span>
            </h1>
            <p className="text-rich-dark/40 font-medium text-lg leading-relaxed max-w-xl">
              Exclusive insights, investment trajectories, and lifestyle narratives from the pinnacle of the UAE real estate sector.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 bg-gray-50 p-2 rounded-[2rem] border border-gray-100">
            {categories.map((cat, i) => (
              <button 
                key={i}
                onClick={() => setCategory(cat)}
                className={`px-8 py-4 rounded-[1.5rem] text-[10px] font-bold uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                    ? 'bg-white text-primary shadow-premium border border-gray-100' 
                    : 'text-rich-dark/20 hover:text-rich-dark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-20 relative max-w-2xl">
          <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-rich-dark/20" size={20} />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search insights, trends, and reports..." 
            className="w-full bg-gray-50 border border-gray-100 rounded-[2rem] py-6 pl-20 pr-8 text-sm font-bold text-rich-dark focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all outline-none"
          />
        </div>

        <AnimatePresence mode="wait">
          {featuredPost ? (
            <motion.div 
              key={featuredPost.id}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            >
              {/* Featured Article */}
              <div className="mb-32">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="group relative h-[650px] rounded-[4rem] overflow-hidden cursor-pointer shadow-premium"
                >
                  <img src={featuredPost.image} alt="Featured" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-rich-dark/90 via-rich-dark/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-16 md:p-20">
                    <div className="flex items-center gap-6 mb-8">
                      <span className="px-6 py-2 rounded-xl bg-primary text-white text-[9px] font-bold tracking-[0.2em] uppercase shadow-xl">EDITORIAL FEATURE</span>
                      <span className="flex items-center gap-2 text-white/60 text-[10px] font-bold tracking-widest uppercase">
                        <Clock size={14} className="text-primary" /> {featuredPost.readTime}
                      </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 max-w-4xl leading-tight group-hover:text-primary transition-colors duration-500">
                      {featuredPost.title}
                    </h2>
                    <p className="text-white/50 text-xl max-w-2xl mb-12 font-medium leading-relaxed">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-8">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center text-primary border border-white/20">
                          <User size={20} />
                        </div>
                        <div>
                          <span className="text-sm font-bold text-white block">{featuredPost.author}</span>
                          <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Senior Editor</span>
                        </div>
                      </div>
                      <div className="w-[1px] h-8 bg-white/10" />
                      <span className="text-sm font-bold text-white/30 uppercase tracking-widest">{featuredPost.date}</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Article Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                {otherPosts.map((post, i) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-white h-full flex flex-col group border border-gray-50 rounded-[3rem] shadow-premium hover:shadow-2xl transition-all duration-500 overflow-hidden">
                      <div className="relative h-72 overflow-hidden">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                        <div className="absolute top-8 left-8">
                          <span className="px-5 py-2 rounded-xl bg-white/90 backdrop-blur-xl text-primary text-[9px] font-bold tracking-[0.2em] uppercase shadow-xl border border-white/50">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-12 flex-1 flex flex-col">
                        <div className="flex items-center gap-4 text-[9px] font-bold text-rich-dark/20 uppercase tracking-[0.2em] mb-6">
                          <span className="flex items-center gap-2"><Calendar size={12} className="text-primary/40" /> {post.date}</span>
                          <span className="w-1 h-1 rounded-full bg-primary/20" />
                          <span className="flex items-center gap-2"><Clock size={12} className="text-primary/40" /> {post.readTime}</span>
                        </div>
                        <h3 className="text-2xl font-extrabold text-rich-dark mb-6 group-hover:text-primary transition-colors duration-500 leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-rich-dark/40 text-md mb-10 line-clamp-3 font-medium leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="mt-auto pt-10 border-t border-gray-50 flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-rich-dark/20 group-hover:bg-primary/5 group-hover:text-primary transition-all">
                              <User size={16} />
                            </div>
                            <span className="text-xs font-bold text-rich-dark/40">{post.author}</span>
                          </div>
                          <button className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-rich-dark/20 group-hover:text-primary group-hover:border-primary group-hover:shadow-lg transition-all duration-500">
                            <ChevronRight size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="py-40 text-center"
            >
              <h3 className="text-2xl font-bold text-rich-dark/20 uppercase tracking-widest">No articles found matching your criteria.</h3>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Newsletter Section */}
        <div className="mt-40 pt-40 border-t border-gray-50">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary border border-primary/10">
                  <TrendingUp size={24} />
                </div>
                <span className="text-primary font-bold tracking-[0.4em] text-[10px] uppercase">STRATEGIC UPDATES</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-rich-dark mb-8 tracking-tight leading-tight">Elite <br /> <span className="text-primary">Intelligence.</span></h2>
              <p className="text-rich-dark/30 font-medium text-lg max-w-lg leading-relaxed mb-12">Synchronize your investment strategy with real-time data from Dubai's most exclusive real estate ecosystem.</p>
              
              <div className="flex items-center gap-8 text-[10px] font-bold text-rich-dark/20 uppercase tracking-[0.2em]">
                <div className="flex items-center gap-2"><Check size={14} className="text-emerald-500" /> Weekly Reports</div>
                <div className="flex items-center gap-2"><Check size={14} className="text-emerald-500" /> Off-Market Access</div>
              </div>
            </div>
            
            <div className="bg-white p-12 md:p-16 rounded-[4rem] border border-gray-50 shadow-premium relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-primary/10 transition-colors" />
              <form onSubmit={handleSubscribe} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label className="text-[9px] font-bold text-rich-dark/20 uppercase tracking-[0.3em] ml-2">Secure Business Email</label>
                  <input 
                    type="email" 
                    required
                    placeholder="advisor@enterprise.com" 
                    className="w-full bg-gray-50 border-none rounded-2xl py-6 px-8 text-sm font-bold text-rich-dark focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-rich-dark/10"
                  />
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <input type="checkbox" required id="consent" className="mt-1 w-5 h-5 rounded border-gray-200 text-primary focus:ring-primary" />
                  <label htmlFor="consent" className="text-[10px] text-rich-dark/30 font-bold uppercase leading-relaxed tracking-widest">I authorize AetherNest to transmit off-market opportunities and market analytics.</label>
                </div>
                <button 
                  disabled={submitting}
                  className="w-full bg-primary text-white py-6 rounded-2xl font-bold text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95 flex items-center justify-center gap-3"
                >
                  {submitting ? <Loader2 size={18} className="animate-spin" /> : "Subscribe to Global Journal"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Blog;
