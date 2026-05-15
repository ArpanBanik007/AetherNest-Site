import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  BarChart3, Users, Building2, DollarSign, 
  CheckCircle, Clock, AlertCircle, Search, 
  Filter, MoreVertical, Download, ArrowUpRight, Loader2
} from 'lucide-react';
import { GlassCard, GlowButton } from '../../../components/common/UI';
import { properties } from '../../../data/properties';
import useAuthStore from '../../../store/useAuthStore';
import useUIStore from '../../../store/useUIStore';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';

const data = [
  { name: 'Jan', sales: 4000, revenue: 2400 },
  { name: 'Feb', sales: 3000, revenue: 1398 },
  { name: 'Mar', sales: 2000, revenue: 9800 },
  { name: 'Apr', sales: 2780, revenue: 3908 },
  { name: 'May', sales: 1890, revenue: 4800 },
  { name: 'Jun', sales: 2390, revenue: 3800 },
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuthStore();
  const { addToast } = useUIStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [exportLoading, setExportLoading] = useState(false);

  useEffect(() => {
    if (!isAuthenticated || user?.role !== 'Admin') {
      // For demo purposes we might allow viewing, but in real app we'd redirect
      // navigate('/auth');
    }
  }, [isAuthenticated, user, navigate]);

  const stats = [
    { label: 'Portfolio Value', value: '$12.4B', change: '+12.5%', icon: <DollarSign size={20} />, color: 'text-emerald-500', bg: 'bg-emerald-50/50' },
    { label: 'Elite Closures', value: '48', change: '+8.2%', icon: <Building2 size={20} />, color: 'text-primary', bg: 'bg-primary/5' },
    { label: 'Senior Advisors', value: '156', change: '+4.1%', icon: <Users size={20} />, color: 'text-blue-500', bg: 'bg-blue-50/50' },
    { label: 'Priority Leads', value: '1,240', change: '+22.4%', icon: <BarChart3 size={20} />, color: 'text-amber-500', bg: 'bg-amber-50/50' },
  ];

  const handleExport = async () => {
    setExportLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setExportLoading(false);
    addToast({ title: 'Export Complete', message: 'The analytics report has been downloaded.', type: 'success' });
  };

  const handleAssetAction = (action, name) => {
    addToast({ title: 'Action Executed', message: `${action} performed on ${name}`, type: 'info' });
  };

  const filteredProperties = properties.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 1,
      notation: 'compact',
    }).format(price);
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50 p-8 lg:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-rich-dark tracking-tight mb-2">Management Console</h1>
            <p className="text-rich-dark/40 font-medium text-sm">System status: <span className="text-emerald-500 font-bold uppercase tracking-widest text-[10px]">Optimal</span>. {properties.length} active listings under management.</p>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={handleExport}
              disabled={exportLoading}
              className="px-8 py-4 rounded-2xl bg-white border border-gray-100 text-[10px] font-bold text-rich-dark uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-gray-50 transition-all shadow-sm disabled:opacity-50"
            >
              {exportLoading ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} className="text-rich-dark/20" />} 
              Export Analytics
            </button>
            <GlowButton variant="emerald" className="px-10 py-4 text-[10px]" onClick={() => addToast({ title: 'Feature Restricted', message: 'Asset creation is disabled in prototype mode.', type: 'warning' })}>
              Add New Asset
            </GlowButton>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="bg-white p-10 border border-gray-100 rounded-[3rem] shadow-premium group hover:border-primary/20 transition-all cursor-default">
                <div className="flex justify-between items-start mb-8">
                  <div className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    {stat.icon}
                  </div>
                  <span className={`text-[10px] font-bold px-3 py-1.5 rounded-lg ${stat.color} ${stat.bg} border border-current/10`}>
                    {stat.change}
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-rich-dark/20 uppercase tracking-[0.2em] mb-1">{stat.label}</p>
                  <p className="text-3xl font-extrabold text-rich-dark">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Analytics Section */}
        <div className="grid lg:grid-cols-3 gap-16 mb-16">
          <div className="lg:col-span-2 bg-white p-12 rounded-[4rem] border border-gray-100 shadow-premium relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary/20" />
            <div className="flex justify-between items-center mb-12">
              <h3 className="text-2xl font-extrabold text-rich-dark tracking-tight">Revenue Intelligence</h3>
              <select className="bg-gray-50 border border-gray-100 rounded-xl py-3 px-6 text-[10px] font-bold uppercase tracking-[0.2em] text-rich-dark/40 outline-none focus:ring-2 focus:ring-primary/10 transition-all cursor-pointer">
                <option>H1 2026 Analysis</option>
                <option>2025 Retrospective</option>
              </select>
            </div>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00a651" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#00a651" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f8fafc" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 800, fill: '#cbd5e1', letterSpacing: '1px' }} dy={20} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 800, fill: '#cbd5e1' }} dx={-20} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.1)', padding: '20px' }}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#00a651" fillOpacity={1} fill="url(#colorRev)" strokeWidth={4} dot={{ r: 6, fill: '#fff', stroke: '#00a651', strokeWidth: 3 }} activeDot={{ r: 8, strokeWidth: 0 }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-12 rounded-[4rem] border border-gray-100 shadow-premium relative overflow-hidden">
            <h3 className="text-2xl font-extrabold text-rich-dark tracking-tight mb-10">Asset Audits</h3>
            <div className="space-y-8">
              {properties.slice(0, 3).map((prop) => (
                <div key={prop.id} onClick={() => navigate(`/property/${prop.id}`)} className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-gray-50 overflow-hidden border border-gray-100 flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
                    <img src={prop.image} className="w-full h-full object-cover" alt="Property" />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-sm font-extrabold text-rich-dark mb-1 truncate max-w-[120px]">{prop.title}</h5>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                      <p className="text-[9px] font-bold text-rich-dark/20 uppercase tracking-[0.2em]">Compliance Check</p>
                    </div>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-rich-dark/20 group-hover:text-primary group-hover:bg-primary/5 transition-all">
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              ))}
              <GlowButton variant="emerald" className="w-full py-5 text-[10px] mt-6" onClick={() => addToast({ title: 'Access Granted', message: 'Audit Center is operational.', type: 'success' })}>
                Enter Audit Center
              </GlowButton>
            </div>
          </div>
        </div>

        {/* Property Management Table */}
        <div className="bg-white rounded-[4rem] border border-gray-100 shadow-premium overflow-hidden">
          <div className="p-12 border-b border-gray-50 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <h3 className="text-2xl font-extrabold text-rich-dark tracking-tight">Enterprise Asset Registry</h3>
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-80">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-rich-dark/20" size={16} />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by PID, Agent, or Location..." 
                  className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-16 pr-6 text-xs font-bold text-rich-dark focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all outline-none" 
                />
              </div>
              <button className="p-4 bg-gray-50 rounded-2xl text-rich-dark/20 hover:text-primary transition-colors border border-gray-100">
                <Filter size={18} />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className="p-10 text-[10px] font-bold text-rich-dark/20 uppercase tracking-[0.3em]">Premier Asset</th>
                  <th className="p-10 text-[10px] font-bold text-rich-dark/20 uppercase tracking-[0.3em]">Category</th>
                  <th className="p-10 text-[10px] font-bold text-rich-dark/20 uppercase tracking-[0.3em]">Verification</th>
                  <th className="p-10 text-[10px] font-bold text-rich-dark/20 uppercase tracking-[0.3em]">Asset Value</th>
                  <th className="p-10 text-[10px] font-bold text-rich-dark/20 uppercase tracking-[0.3em]">Controls</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filteredProperties.slice(0, 5).map((row, i) => (
                  <tr key={i} className="group hover:bg-gray-50/30 transition-all cursor-default">
                    <td className="p-10">
                      <div className="flex items-center gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-gray-50 overflow-hidden border border-gray-100 flex-shrink-0">
                          <img src={row.image} className="w-full h-full object-cover" alt="Property" />
                        </div>
                        <span className="text-md font-extrabold text-rich-dark truncate max-w-[200px]">{row.title}</span>
                      </div>
                    </td>
                    <td className="p-10">
                      <span className="text-[10px] font-bold text-rich-dark/40 uppercase tracking-[0.1em]">{row.category}</span>
                    </td>
                    <td className="p-10">
                      <div className="flex items-center gap-3">
                        <CheckCircle size={16} className="text-emerald-500" />
                        <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-emerald-500">Verified</span>
                      </div>
                    </td>
                    <td className="p-10">
                      <span className="text-lg font-extrabold text-rich-dark">{formatPrice(row.price)}</span>
                    </td>
                    <td className="p-10">
                      <button 
                        onClick={() => handleAssetAction('Audit', row.title)}
                        className="p-3 text-rich-dark/10 hover:text-primary transition-colors rounded-xl hover:bg-primary/5"
                      >
                        <MoreVertical size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AdminDashboard;
