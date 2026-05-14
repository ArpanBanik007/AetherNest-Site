import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, Heart, Calendar, MessageSquare, Settings, 
  LogOut, Bell, Search, Clock, ChevronRight, 
  TrendingUp, Home as HomeIcon, MapPin 
} from 'lucide-react';
import { GlassCard, GlowButton } from '../../../components/common/UI';
import { properties } from '../../../data/properties';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Saved Properties', value: '12', icon: <Heart size={18} />, color: 'text-red-500', bg: 'bg-red-50/50' },
    { label: 'Upcoming Visits', value: '3', icon: <Calendar size={18} />, color: 'text-primary', bg: 'bg-primary/5' },
    { label: 'Active Inquiries', value: '5', icon: <MessageSquare size={18} />, color: 'text-emerald-500', bg: 'bg-emerald-50/50' },
  ];

  const sidebarLinks = [
    { id: 'overview', label: 'Portfolio Overview', icon: <HomeIcon size={18} /> },
    { id: 'watchlist', label: 'My Watchlist', icon: <Heart size={18} /> },
    { id: 'visits', label: 'Scheduled Visits', icon: <Calendar size={18} /> },
    { id: 'messages', label: 'Secure Messages', icon: <MessageSquare size={18} /> },
    { id: 'settings', label: 'Account Settings', icon: <Settings size={18} /> },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="hidden lg:flex w-80 bg-white border-r border-gray-100 flex-col p-10 fixed h-[calc(100vh-5rem)]">
        <div className="flex items-center gap-4 mb-16">
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary border border-primary/10">
              <User size={24} />
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-4 border-white" />
          </div>
          <div>
            <h3 className="font-extrabold text-rich-dark">Arpan Roy</h3>
            <p className="text-[9px] font-bold text-primary uppercase tracking-[0.2em]">Platinum Member</p>
          </div>
        </div>

        <nav className="flex-1 space-y-3">
          {sidebarLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveTab(link.id)}
              className={`w-full flex items-center gap-4 px-6 py-4.5 rounded-2xl text-[10px] font-bold uppercase tracking-[0.15em] transition-all ${
                activeTab === link.id 
                  ? 'bg-primary text-white shadow-xl shadow-primary/20' 
                  : 'text-rich-dark/30 hover:bg-gray-50 hover:text-rich-dark'
              }`}
            >
              {link.icon}
              {link.label}
            </button>
          ))}
        </nav>

        <button className="flex items-center gap-4 px-6 py-4.5 text-[10px] font-bold text-red-500 uppercase tracking-[0.2em] hover:bg-red-50 rounded-2xl transition-all">
          <LogOut size={18} />
          Secure Sign Out
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-80 p-8 lg:p-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-rich-dark tracking-tight mb-2">Member Dashboard</h1>
              <p className="text-rich-dark/40 font-medium text-sm">You have <span className="text-primary font-bold">3 viewings</span> scheduled for this week. Enjoy your tours.</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-rich-dark/20 relative hover:text-primary transition-colors">
                <Bell size={20} />
                <span className="absolute top-4 right-4 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
              </button>
              <GlowButton variant="emerald" className="px-8 py-4 text-[10px]">
                Explore New Listings
              </GlowButton>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="bg-white p-8 border border-gray-100 flex items-center gap-6 rounded-[2.5rem] shadow-premium group hover:border-primary/20 transition-all cursor-default">
                  <div className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-rich-dark/20 uppercase tracking-[0.2em] mb-1">{stat.label}</p>
                    <p className="text-2xl font-extrabold text-rich-dark">{stat.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Content Sections */}
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main Section */}
            <div className="lg:col-span-2 space-y-16">
              {/* Watchlist Preview */}
              <div>
                <div className="flex justify-between items-center mb-10">
                  <h2 className="text-2xl font-extrabold text-rich-dark tracking-tight">Recent in Watchlist</h2>
                  <button className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] flex items-center gap-2 hover:underline">
                    View Portfolio <ChevronRight size={14} />
                  </button>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {properties.slice(0, 2).map((prop) => (
                    <div key={prop.id} className="bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden group hover:shadow-premium transition-all">
                      <div className="h-52 relative overflow-hidden">
                        <img src={prop.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={prop.title} />
                        <div className="absolute top-5 right-5">
                          <button className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-all">
                            <Heart size={16} fill="white" />
                          </button>
                        </div>
                      </div>
                      <div className="p-8">
                        <h4 className="text-lg font-extrabold text-rich-dark mb-1">{prop.title}</h4>
                        <div className="flex items-center gap-2 text-rich-dark/30 text-[10px] font-bold uppercase tracking-widest">
                          <MapPin size={12} className="text-primary/40" />
                          {prop.location.split(',')[0]}
                        </div>
                        <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-50">
                          <span className="text-md font-extrabold text-primary">{prop.price}</span>
                          <button className="text-[10px] font-bold text-rich-dark/20 uppercase tracking-[0.2em] hover:text-primary transition-colors">Manage</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity Logs */}
              <div>
                <h2 className="text-2xl font-extrabold text-rich-dark tracking-tight mb-10">Recent Activity</h2>
                <div className="space-y-4">
                  {[
                    { action: 'Price Optimization', details: 'The Obsidian Tower is now $2.7M', time: '2 hours ago', icon: <TrendingUp size={18} /> },
                    { action: 'Private Viewing', details: 'Schedule confirmed for Azure Marina Suite', time: '1 day ago', icon: <Calendar size={18} /> },
                    { action: 'Advisor Message', details: 'From Marcus Valerius regarding your inquiry', time: '2 days ago', icon: <MessageSquare size={18} /> }
                  ].map((log, i) => (
                    <div key={i} className="flex items-center gap-6 p-6 bg-white rounded-3xl border border-gray-50 hover:border-primary/10 transition-colors">
                      <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-primary/40 group-hover:text-primary transition-colors">
                        {log.icon}
                      </div>
                      <div className="flex-1">
                        <h5 className="text-sm font-extrabold text-rich-dark mb-0.5">{log.action}</h5>
                        <p className="text-xs text-rich-dark/30 font-medium">{log.details}</p>
                      </div>
                      <span className="text-[9px] font-bold text-rich-dark/10 uppercase tracking-[0.2em]">{log.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Section */}
            <div className="space-y-16">
              {/* Upcoming Visits */}
              <div className="p-10 rounded-[3rem] border border-primary/10 bg-primary/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                <h3 className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-10 flex items-center gap-3">
                  <Clock size={16} /> Upcoming Visits
                </h3>
                <div className="space-y-10">
                  {[1, 2].map((visit) => (
                    <div key={visit} className="relative pl-10 border-l border-primary/10 last:border-0 pb-10 last:pb-0">
                      <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-primary shadow-lg shadow-primary/20" />
                      <div className="mb-4">
                        <span className="text-[9px] font-bold text-rich-dark/20 uppercase tracking-[0.2em] block mb-2">Tomorrow, 11:00 AM</span>
                        <h5 className="text-md font-extrabold text-rich-dark">Sky Garden Villa</h5>
                      </div>
                      <button className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] hover:underline">Surroundings Map</button>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-10 py-5 rounded-2xl bg-primary text-white font-bold text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-primary/10 hover:shadow-primary/30 transition-all">
                  All Appointments
                </button>
              </div>

              {/* Saved Search */}
              <div className="space-y-8">
                <h3 className="text-[10px] font-bold text-rich-dark/20 uppercase tracking-[0.3em]">Saved Intelligence</h3>
                <div className="space-y-3">
                  {['Villas in Palm Jumeirah', 'Penthouses under $5M', 'Business Bay Offices'].map((search, i) => (
                    <button key={i} className="w-full flex items-center justify-between p-5 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 transition-all group">
                      <span className="text-xs font-bold text-rich-dark group-hover:text-primary transition-colors">{search}</span>
                      <Search size={14} className="text-rich-dark/10 group-hover:text-primary transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
