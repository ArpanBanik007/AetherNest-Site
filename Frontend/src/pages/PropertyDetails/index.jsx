import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Bed, Bath, Maximize, Heart, Share2, Calendar, Phone, Mail, ShieldCheck, Map as MapIcon, Info, ChevronRight, PlayCircle, Camera, Loader2 } from 'lucide-react';
import { properties } from '../../data/properties';
import { GlowButton, GlassCard } from '../../components/common/UI';
import ScheduleVisitModal from '../../components/features/ScheduleVisitModal';
import MortgageCalculator from '../../components/features/MortgageCalculator';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import useAuthStore from '../../store/useAuthStore';
import useUIStore from '../../store/useUIStore';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [isVisitModalOpen, setIsVisitModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [inquiryLoading, setInquiryLoading] = useState(false);
  
  const { user, toggleWishlist, isAuthenticated } = useAuthStore();
  const { addToast } = useUIStore();

  useEffect(() => {
    const found = properties.find(p => p.id === parseInt(id));
    if (found) {
      setProperty(found);
    }
  }, [id]);

  const isWishlisted = user?.wishlist?.includes(property?.id);

  const handleWishlistToggle = () => {
    if (!isAuthenticated) {
      addToast({ title: 'Sign In Required', message: 'Please login to save properties.', type: 'info' });
      return;
    }
    toggleWishlist(property.id);
    addToast({ 
      title: isWishlisted ? 'Removed' : 'Saved', 
      message: isWishlisted ? 'Removed from favorites.' : 'Added to your favorites.', 
      type: isWishlisted ? 'info' : 'success' 
    });
  };

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    setInquiryLoading(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    setInquiryLoading(false);
    addToast({ 
      title: 'Inquiry Sent', 
      message: 'Your message has been sent to our agent. We will contact you shortly.', 
      type: 'success' 
    });
    e.target.reset();
  };

  const handleImageError = (e) => {
    e.target.src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop";
  };

  if (!property) return <div className="h-screen flex items-center justify-center font-bold text-rich-dark/20 uppercase tracking-widest">Loading Property...</div>;

  const galleryImages = [
    property.image,
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600585154526-990dcea4db0d?q=80&w=2000&auto=format&fit=crop"
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Hero Gallery */}
      <section className="relative h-[75vh] w-full overflow-hidden bg-gray-100">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000 }}
          className="h-full w-full"
        >
          {galleryImages.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-full">
                <img 
                  src={img} 
                  alt={`${property.title} ${i}`} 
                  onError={handleImageError}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute bottom-10 left-10 z-10 flex gap-4">
          <button className="px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-white hover:text-rich-dark transition-all shadow-2xl">
            <Camera size={16} /> 24 High-Res Photos
          </button>
          <button className="px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-white hover:text-rich-dark transition-all shadow-2xl">
            <PlayCircle size={16} /> Virtual Tour
          </button>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-20">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            <div className="space-y-8">
              <div className="flex flex-wrap items-start justify-between gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-4 py-2 rounded-lg bg-primary/5 text-primary text-[10px] font-bold tracking-[0.2em] uppercase border border-primary/10">{property.type}</span>
                    <span className="px-4 py-2 rounded-lg bg-gray-50 text-rich-dark/30 text-[10px] font-bold tracking-[0.2em] uppercase border border-gray-100">Exclusive</span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-extrabold text-rich-dark tracking-tight leading-tight">{property.title}</h1>
                  <div className="flex items-center gap-2 text-rich-dark/40 font-bold uppercase tracking-[0.1em] text-sm">
                    <MapPin size={18} className="text-primary/40" />
                    {property.location}
                  </div>
                </div>
                <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 min-w-[240px]">
                  <p className="text-[10px] font-bold text-rich-dark/20 uppercase tracking-[0.2em] mb-2">Listing Price</p>
                  <p className="text-4xl font-extrabold text-primary">{formatPrice(property.price)}</p>
                  <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mt-2">Fully Furnished</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <GlowButton variant="emerald" className="flex-1 py-5 text-[10px]" onClick={() => setIsVisitModalOpen(true)}>
                  <Calendar size={18} /> Schedule a Private Viewing
                </GlowButton>
                <button 
                  onClick={handleWishlistToggle}
                  className={`w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center transition-all ${
                    isWishlisted ? 'text-rose-500 bg-white shadow-premium' : 'text-rich-dark/20 hover:text-rose-500 hover:bg-white hover:shadow-premium'
                  }`}
                >
                  <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
                </button>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    addToast({ title: 'Link Copied', message: 'Property link copied to clipboard.', type: 'success' });
                  }}
                  className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-rich-dark/20 hover:text-primary hover:bg-white hover:shadow-premium transition-all"
                >
                  <Share2 size={20} />
                </button>
              </div>
            </div>

            {/* Core Specs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-12 border-y border-gray-50">
              {[
                { icon: Bed, value: property.beds, label: 'Bedrooms' },
                { icon: Bath, value: property.baths, label: 'Bathrooms' },
                { icon: Maximize, value: property.area, label: 'Square Feet' },
                { icon: ShieldCheck, value: property.yearBuilt || '2024', label: 'Year Built' }
              ].map((spec, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex items-center gap-4">
                    <spec.icon size={28} className="text-primary/30" />
                    <span className="text-2xl font-extrabold text-rich-dark">{spec.value}</span>
                  </div>
                  <span className="text-[10px] font-bold text-rich-dark/30 uppercase tracking-[0.2em] block">{spec.label}</span>
                </div>
              ))}
            </div>

            {/* Description Tabs */}
            <div className="space-y-10">
              <div className="flex gap-12 border-b border-gray-50 overflow-x-auto scrollbar-hide">
                {['overview', 'amenities', 'location', 'mortgage'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-6 text-[11px] font-bold uppercase tracking-[0.2em] relative transition-all whitespace-nowrap ${
                      activeTab === tab ? 'text-primary' : 'text-rich-dark/20 hover:text-rich-dark'
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div layoutId="activeTabDetails" className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full" />
                    )}
                  </button>
                ))}
              </div>

              <div className="text-rich-dark/50 leading-[1.8] font-medium text-lg">
                {activeTab === 'overview' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                    <p className="text-2xl text-rich-dark font-extrabold leading-tight">A masterpiece of contemporary architecture and ultra-luxury finishing.</p>
                    <p>{property.description}</p>
                    <p>Every element of this property has been curated for the most discerning client, featuring floor-to-ceiling glass walls, premium Italian marble, and a bespoke smart-home integration system.</p>
                  </motion.div>
                )}
                {activeTab === 'amenities' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {(property.amenities || [
                      "Custom Smart Home AI", "Olympic Infinity Pool", "State-of-the-art Cinema", 
                      "Climate Controlled Wine Vault", "Professional Chef's Kitchen", "Private Sky-Elevator",
                      "Full-service Wellness Spa", "Executive Staff Suites", "6-Car Private Gallery"
                    ]).map((item, i) => (
                      <div key={i} className="flex items-center gap-4 py-4 border-b border-gray-50">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-lg shadow-primary/40" />
                        <span className="text-xs font-bold text-rich-dark uppercase tracking-widest">{item}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
                {activeTab === 'location' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10">
                    <p>Perfectly positioned in an elite residential enclave with immediate access to private beaches, Michelin-starred dining, and prestigious international hubs.</p>
                    <div className="h-96 bg-gray-50 rounded-[3rem] flex items-center justify-center border border-gray-100 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
                      <div className="text-center relative z-10">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-premium group-hover:scale-110 transition-transform duration-500">
                          <MapIcon size={32} className="text-primary/20" />
                        </div>
                        <p className="text-[10px] font-bold text-rich-dark/20 uppercase tracking-[0.3em]">Interactive Surroundings Map</p>
                        <button className="mt-4 text-primary font-bold text-[10px] uppercase tracking-widest hover:underline">Launch Map View</button>
                      </div>
                    </div>
                  </motion.div>
                )}
                {activeTab === 'mortgage' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <MortgageCalculator propertyPrice={property.price} />
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-12">
            {/* Agent Card */}
            <div className="bg-white p-12 border border-gray-50 shadow-premium !rounded-[4rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-primary/10 transition-colors" />
              
              <div className="flex flex-col items-center text-center mb-12">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-primary/10 rounded-full scale-125 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" 
                    onError={handleImageError}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl relative z-10" 
                    alt="Agent" 
                  />
                  <div className="absolute bottom-2 right-2 w-10 h-10 bg-primary rounded-full border-4 border-white flex items-center justify-center text-white z-20 shadow-lg" title="Verified Expert">
                    <ShieldCheck size={18} />
                  </div>
                </div>
                <h4 className="text-2xl font-extrabold text-rich-dark mb-1">Marcus Valerius</h4>
                <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Senior Portfolio Advisor</p>
              </div>

              <div className="space-y-4">
                <button className="w-full py-5 rounded-2xl bg-primary text-white font-bold text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-lg shadow-primary/10 hover:shadow-primary/30 transition-all active:scale-95">
                  <Phone size={18} /> Direct Call
                </button>
                <button className="w-full py-5 rounded-2xl bg-gray-50 text-rich-dark/40 font-bold text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 border border-gray-100 hover:bg-white hover:text-primary hover:shadow-premium transition-all active:scale-95">
                  <Mail size={18} /> Message Marcus
                </button>
              </div>

              <div className="mt-12 pt-12 border-t border-gray-50/50">
                <div className="flex items-center gap-3 mb-8">
                  <Info size={16} className="text-primary/40" />
                  <span className="text-[10px] font-bold text-rich-dark/20 uppercase tracking-[0.2em]">Priority Inquiry</span>
                </div>
                <form onSubmit={handleInquirySubmit} className="space-y-5">
                  <input type="text" required placeholder="Full Name" className="w-full bg-gray-50 border border-gray-50 rounded-2xl py-5 px-6 text-sm font-bold text-rich-dark focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all outline-none placeholder:text-rich-dark/20" />
                  <textarea required placeholder="Your inquiry..." className="w-full bg-gray-50 border border-gray-50 rounded-2xl py-5 px-6 text-sm font-bold text-rich-dark h-32 focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all outline-none resize-none placeholder:text-rich-dark/20" />
                  <button 
                    disabled={inquiryLoading}
                    className="w-full bg-rich-dark text-white py-5 rounded-2xl font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-primary transition-colors shadow-lg shadow-black/5 active:scale-95 flex items-center justify-center gap-3"
                  >
                    {inquiryLoading ? <Loader2 className="animate-spin" size={18} /> : "Send Request"}
                  </button>
                </form>
              </div>
            </div>

            {/* Performance Stats */}
            <div className="p-10 bg-primary/5 rounded-[3rem] border border-primary/10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary/20" />
              <h5 className="text-[10px] font-bold text-rich-dark/80 uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
                Property Pulse <PlayCircle size={14} className="text-primary" />
              </h5>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-bold text-rich-dark/30 uppercase tracking-widest">Est. ROI</span>
                  <span className="text-lg font-extrabold text-emerald-500">+8.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-bold text-rich-dark/30 uppercase tracking-widest">Market Score</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="w-[92%] h-full bg-primary" />
                    </div>
                    <span className="text-xs font-bold text-primary">9.2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ScheduleVisitModal 
        isOpen={isVisitModalOpen} 
        onClose={() => setIsVisitModalOpen(false)} 
        property={property}
      />
    </div>
  );
};


export default PropertyDetails;
