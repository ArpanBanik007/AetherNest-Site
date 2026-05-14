import { Link } from 'react-router-dom';
import { Camera, Share2, UserPlus, PlayCircle, Apple, Play } from 'lucide-react';
import { GlowButton } from '../components/common/UI';

const Footer = () => {
  return (
    <footer className="bg-white pt-32 pb-16 border-t border-gray-50 relative overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand */}
          <div className="space-y-10">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="text-xl font-bold text-white italic">A</span>
              </div>
              <div className="flex flex-col -gap-0.5">
                <span className="text-xl font-extrabold tracking-tight text-rich-dark">AETHERNEST</span>
                <span className="text-[9px] font-bold tracking-[0.2em] text-primary uppercase">Elite Real Estate</span>
              </div>
            </div>
            <p className="text-rich-dark/40 text-sm leading-relaxed font-medium">
              Revolutionizing the luxury real estate experience through innovation, integrity, and unparalleled service across the UAE.
            </p>
            <div className="flex gap-4">
              {[Camera, Share2, UserPlus, PlayCircle].map((Icon, i) => (
                <button key={i} className="w-11 h-11 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-rich-dark/30 hover:text-primary hover:bg-white hover:shadow-premium transition-all">
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-10 text-rich-dark/80">Properties</h4>
            <ul className="space-y-4 text-rich-dark/40 text-[13px] font-bold uppercase tracking-widest">
              <li><Link to="/properties" className="hover:text-primary transition-colors">Villas</Link></li>
              <li><Link to="/properties" className="hover:text-primary transition-colors">Penthouses</Link></li>
              <li><Link to="/properties" className="hover:text-primary transition-colors">Apartments</Link></li>
              <li><Link to="/compare" className="hover:text-primary transition-colors">Compare</Link></li>
              <li><Link to="/properties" className="hover:text-primary transition-colors">Off-Plan</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-10 text-rich-dark/80">Company</h4>
            <ul className="space-y-4 text-rich-dark/40 text-[13px] font-bold uppercase tracking-widest">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/agents" className="hover:text-primary transition-colors">Our Agents</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Market Insights</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-10 text-rich-dark/80">Newsletter</h4>
            <p className="text-rich-dark/40 text-sm font-medium mb-8 leading-relaxed">Subscribe to receive exclusive off-market listings and market updates.</p>
            <div className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-gray-50 border border-gray-100 rounded-2xl py-5 px-6 text-sm font-bold text-rich-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all placeholder:text-rich-dark/20"
              />
              <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95">Subscribe Now</button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-16 border-t border-gray-50 flex flex-col lg:flex-row justify-between items-center gap-10">
          <p className="text-rich-dark/20 text-[10px] font-bold tracking-[0.3em] uppercase">
            © 2026 AETHERNEST. ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex gap-4">
            <button className="flex items-center gap-5 bg-white px-8 py-4 rounded-2xl hover:shadow-premium transition-all border border-gray-100 group">
              <Apple size={22} className="text-rich-dark group-hover:text-primary transition-colors" />
              <div className="text-left">
                <div className="text-[8px] text-rich-dark/30 font-bold uppercase tracking-widest leading-none mb-1">Download on</div>
                <div className="text-sm font-extrabold tracking-tight text-rich-dark">App Store</div>
              </div>
            </button>
            <button className="flex items-center gap-5 bg-white px-8 py-4 rounded-2xl hover:shadow-premium transition-all border border-gray-100 group">
              <Play size={20} className="text-rich-dark group-hover:text-primary transition-colors" />
              <div className="text-left">
                <div className="text-[8px] text-rich-dark/30 font-bold uppercase tracking-widest leading-none mb-1">Get it on</div>
                <div className="text-sm font-extrabold tracking-tight text-rich-dark">Google Play</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
